import { motion } from "framer-motion";
import { useMe } from "@/features/auth/hooks/useMe";
import { Mail, User, IdCard, Crown, Sparkles, Leaf, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useMyLeaderBoardSummary } from "@/features/leader-board/hooks/useMyLeaderBoardSummary";

export function ProfilePage() {
    const { data: user, isLoading, isError } = useMe();
    const { data: summary, isLoading: summaryLoading, isError: summaryError } = useMyLeaderBoardSummary(!!user);

    const monthlyTarget = 20;
    const actionsCount = summary?.actionsCompletedThisMonth ?? 0;
    const pointsCount = summary?.totalPointsThisMonth ?? 0;
    const progress = Math.min(100, Math.round((actionsCount / monthlyTarget) * 100));

    if (isLoading) {
        return (
            <div className="container  mx-auto py-12 px-4 space-y-6">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-32 w-full rounded-xl" />
            </div>
        );
    }

    if (isError || !user) {
        return (
            <div className="container  mx-auto py-20 text-center">
                <p className="text-muted-foreground">No se pudo cargar la información del usuario.</p>
            </div>
        );
    }

    return (
        <motion.div
            className="container mx-auto py-12 px-4 space-y-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">
                        Perfil de {user.firstName} {user.lastName}
                    </h1>
                    <p className="text-muted-foreground text-sm">Tu información y progreso ecológico</p>
                </div>
                <Badge variant="outline" className="text-xs font-semibold py-1 px-3">
                    ID #{user.id}
                </Badge>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card className="lg:col-span-2 shadow-sm border-border/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-semibold flex items-center gap-2">
                            <Crown className="w-5 h-5 text-amber-500" />
                            Resumen ecológico (mes)
                        </CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            Activo
                        </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {summaryError && (
                            <div className="p-3 rounded-xl border border-destructive/40 bg-destructive/5 flex items-start gap-2 text-sm">
                                <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />
                                <div>
                                    <p className="font-semibold text-foreground">No pudimos cargar tu resumen.</p>
                                    <p className="text-muted-foreground text-xs">Inténtalo nuevamente más tarde.</p>
                                </div>
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="p-4 rounded-xl border border-border/60 bg-foreground/5">
                                <p className="text-xs text-muted-foreground">Puntos este mes</p>
                                {summaryLoading ? (
                                    <Skeleton className="h-6 w-16 mt-2" />
                                ) : (
                                    <p className="text-2xl font-bold text-primary">+{pointsCount}</p>
                                )}
                                <span className="text-[11px] text-muted-foreground">Sigue registrando acciones</span>
                            </div>
                            <div className="p-4 rounded-xl border border-border/60 bg-foreground/5">
                                <p className="text-xs text-muted-foreground">Acciones completadas</p>
                                {summaryLoading ? (
                                    <Skeleton className="h-6 w-12 mt-2" />
                                ) : (
                                    <p className="text-2xl font-bold text-foreground">{actionsCount}</p>
                                )}
                                <span className="text-[11px] text-muted-foreground">Reciclar, plantar y más</span>
                            </div>
                            <div className="p-4 rounded-xl border border-border/60 bg-foreground/5">
                                <p className="text-xs text-muted-foreground">Progreso mensual</p>
                                <div className="flex items-center justify-between mt-2">
                                    {summaryLoading ? (
                                        <Skeleton className="h-6 w-14" />
                                    ) : (
                                        <p className="text-lg font-semibold text-foreground">{progress}%</p>
                                    )}
                                    <div className="h-12 w-12 rounded-full border-4 border-primary/30 flex items-center justify-center text-primary font-semibold">
                                        {summaryLoading ? <Skeleton className="h-4 w-10" /> : `${progress}%`}
                                    </div>
                                </div>
                                <span className="text-[11px] text-muted-foreground">Meta: {monthlyTarget} acciones</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="p-4 rounded-xl border border-border/60 bg-background/70 flex items-start gap-3">
                                <Leaf className="w-5 h-5 text-green-500 mt-0.5" />
                                <div className="text-sm text-left">
                                    <p className="font-semibold text-foreground">Siguiente paso</p>
                                    <p className="text-muted-foreground">Registra una nueva acción hoy para mantener tu racha activa.</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl border border-border/60 bg-background/70 flex items-start gap-3">
                                <Sparkles className="w-5 h-5 text-indigo-500 mt-0.5" />
                                <div className="text-sm text-left">
                                    <p className="font-semibold text-foreground">Consejo rápido</p>
                                    <p className="text-muted-foreground">Organiza los residuos de la semana y registra cada categoría reciclada.</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

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
            </div>
        </motion.div>
    );
}
