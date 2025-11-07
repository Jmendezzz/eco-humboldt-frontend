import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

interface UseQrScannerProps {
    onScan: (token: string) => void;
    onError?: (error: string) => void;
    active?: boolean;
}

export function useQrScanner({ onScan, onError, active }: UseQrScannerProps) {
    const qrRef = useRef<HTMLDivElement>(null);
    const html5Qr = useRef<Html5Qrcode | null>(null);
    const QR_ELEMENT_ID = "qr-reader";

    useEffect(() => {
        if (!active) return;

        let isMounted = true;

        const startScanner = async () => {
            try {
                console.log("[QR] Starting scanner...");
                const devices = await navigator.mediaDevices.enumerateDevices();
                const cameras = devices.filter((d) => d.kind === "videoinput");

                if (cameras.length === 0) {
                    throw new Error("NO_CAMERA_FOUND");
                }

                await new Promise((r) => setTimeout(r, 300));

                const element = document.getElementById(QR_ELEMENT_ID);
                if (!element) {
                    console.warn("[QR] Element not found, aborting");
                    return;
                }

                const qr = new Html5Qrcode(QR_ELEMENT_ID);
                html5Qr.current = qr;

                await qr.start(
                    { facingMode: "environment" },
                    { fps: 10, qrbox: { width: 250, height: 250 } },
                    (decodedText) => {
                        if (!isMounted) return;
                        console.log("[QR] Code detected:", decodedText);
                        onScan(decodedText);
                        stopScanner();
                    },
                    (errorMessage) => {
                        if (onError) onError(errorMessage);
                    }
                );
            } catch (err: any) {
                console.error("[QR] Error initializing:", err);
                if (!onError) return;
                if (err.message === "NO_CAMERA_FOUND") onError("NO_CAMERA_FOUND");
                else if (err.name === "NotAllowedError") onError("PERMISSION_DENIED");
                else onError("UNKNOWN_ERROR");
            }
        };

        const stopScanner = async () => {
            if (html5Qr.current) {
                try {
                    if (html5Qr.current.isScanning) {
                        await html5Qr.current.stop();
                    }
                    await html5Qr.current.clear();
                    console.log("[QR] Scanner stopped and cleared");
                } catch (err) {
                    console.warn("[QR] Error stopping scanner:", err);
                }
            }
        };

        startScanner();

        return () => {
            isMounted = false;
            stopScanner();
        };
    }, [active]);

    return { qrRef };
}
