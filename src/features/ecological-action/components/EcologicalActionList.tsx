import { useAllEcologicalActions } from "../hooks/useAllEcologicalActions";
import { EcologicalActionCard } from "./EcologicalActionCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
import { EcologicalActionScannerModal } from "./EcologicalActionScannerModal";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useTodayUserEcologicalActions } from "@/features/user-ecological-actions/hooks/useTodayUserEcologicalActions";

export function EcologicalActionsList() {
    const { data, isLoading, isError } = useAllEcologicalActions();
    const { user } = useAuth();
    const navigate = useNavigate();
    const { data: userTodayEcologicalActions } = useTodayUserEcologicalActions();

    const [scannerOpen, setScannerOpen] = useState(false);

    const handleOpenScanner = () => {
        if (!user) {
            navigate(ROUTES.AUTH.LOGIN);
            return;
        }
        setScannerOpen(true);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col gap-4 mt-8">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-lg" />
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <p className="text-destructive text-center mt-10">
                Error al cargar las acciones ecológicas.
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">

            <div className="flex justify-center">
                <Button
                    size="lg"
                    onClick={handleOpenScanner}
                >
                    Registrar acción
                </Button>
            </div>

            {data?.map((action) => (
                <EcologicalActionCard
                    key={action.id}
                    action={action}
                    validated={userTodayEcologicalActions?.ecologicalActionIds.includes(action.id)}
                />
            ))}


            <EcologicalActionScannerModal
                open={scannerOpen}
                onClose={() => setScannerOpen(false)}
            />
        </div>
    );
}
