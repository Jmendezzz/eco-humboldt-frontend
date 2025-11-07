import { useQrScanner } from "@/hooks/useQrScanner";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, CameraOff } from "lucide-react";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { useValidateEcologicalAction } from "@/features/user-ecological-actions/hooks/useValidateEcologicalAction";
import confetti from "canvas-confetti";

interface Props {
    open: boolean;
    onClose: () => void;
}

export function EcologicalActionScannerModal({ open, onClose }: Props) {
    const [status, setStatus] = useState<
        "idle" | "success" | "error" | "camera-error" | "permission-denied"
    >("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { mutate } = useValidateEcologicalAction();

    const { qrRef } = useQrScanner({
        active: open,
        onScan: (url) => {
            const token = url.split("/").pop();
            if (!token) return;
            mutate(
                { token },
                {
                    onSuccess: () => {
                        setErrorMessage(null);
                        setStatus("success");

                        confetti({
                            particleCount: 120,
                            spread: 90,
                            origin: { y: 0.7 },
                            colors: ["#16a34a", "#22c55e", "#4ade80", "#86efac"],
                        });

                        setTimeout(onClose, 1500);
                    },
                    onError: (error: any) => {
                        console.error("[QR] Validation error:", error);
                        setStatus("error");

                        const message =
                            error?.response?.data?.message ||
                            error?.message ||
                            "Error al validar la acción.";
                        setErrorMessage(message);
                    },
                }
            );
        },
        onError: (type) => {
            if (type === "NO_CAMERA_FOUND") setStatus("camera-error");
            else if (type === "PERMISSION_DENIED") setStatus("permission-denied");
            else setStatus("error");
        },
    });

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center text-green-600">
                        Escanea tu acción ecológica 🌿
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                        Apunta tu cámara al código QR
                    </DialogDescription>
                </DialogHeader>

                {status === "camera-error" && (
                    <div className="flex flex-col items-center gap-3 py-6">
                        <CameraOff className="w-10 h-10 text-gray-400" />
                        <p className="text-gray-600 text-center">
                            No se encontró una cámara disponible.
                        </p>
                        <Button onClick={() => window.location.reload()}>Reintentar</Button>
                    </div>
                )}

                {status === "permission-denied" && (
                    <div className="flex flex-col items-center gap-3 py-6">
                        <XCircle className="w-10 h-10 text-red-500" />
                        <p className="text-center text-red-600 font-medium">
                            Permiso de cámara denegado.
                            Por favor, habilítalo en la configuración del navegador.
                        </p>
                        <Button onClick={() => window.location.reload()}>Reintentar</Button>
                    </div>
                )}

                {status !== "camera-error" && status !== "permission-denied" && (
                    <>
                        <div
                            id="qr-reader"
                            ref={qrRef}
                            className="w-full rounded-lg overflow-hidden bg-black/5 min-h-[250px]"
                        />

                        <motion.div
                            animate={{ opacity: status !== "idle" ? 1 : 0 }}
                            className="flex flex-col items-center gap-2 mt-4"
                        >
                            {status === "success" && (
                                <>
                                    <CheckCircle className="text-green-500 w-8 h-8" />
                                    <p className="text-green-600 font-medium">
                                        ¡Acción validada con éxito! 🎉
                                    </p>
                                </>
                            )}

                            {status === "error" && (
                                <>
                                    <XCircle className="text-red-500 w-8 h-8" />
                                    <p className="text-red-600 font-medium text-center">
                                        {errorMessage || "Error al validar el QR."}
                                    </p>
                                </>
                            )}
                        </motion.div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
