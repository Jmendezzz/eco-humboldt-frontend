import { motion } from "framer-motion";
import { useMe } from "@/features/auth/hooks/useMe";
import { Mail, User, IdCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfilePage() {
    const { data: user, isLoading, isError } = useMe();

    if (isLoading) {
        return (
            <div className="container max-w-3xl mx-auto py-12 px-4 space-y-6">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-32 w-full rounded-xl" />
            </div>
        );
    }

    if (isError || !user) {
        return (
            <div className="container max-w-3xl mx-auto py-20 text-center">
                <p className="text-muted-foreground">No se pudo cargar la información del usuario.</p>
            </div>
        );
    }

    return (
        <motion.div
            className="container max-w-3xl mx-auto py-12 px-4 space-y-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">
                        Perfil de {user.firstName} {user.lastName}
                    </h1>
                    <p className="text-muted-foreground text-sm">Tu información básica de usuario</p>
                </div>
                <Badge variant="outline" className="text-xs font-semibold py-1 px-3">
                    ID #{user.id}
                </Badge>
            </header>

            <Card className="shadow-sm border-border/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        Información personal
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                        <IdCard className="w-4 h-4 text-muted-foreground" />
                        <span>
                            <strong>Nombre:</strong> {user.firstName} {user.lastName}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span>
                            <strong>Correo:</strong> {user.email}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
