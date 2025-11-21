import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { ROUTES } from "@/routes";
import { motion } from "framer-motion";
import { ArrowRight, Crown, Leaf, Sparkles, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useMyLeaderBoardSummary } from "@/features/leader-board/hooks/useMyLeaderBoardSummary";
import { Skeleton } from "@/components/ui/skeleton";

const highlights = [
    { icon: <Leaf className="w-4 h-4 text-emerald-500" />, title: "Acciones diarias", desc: "Registrar hábitos sostenibles es rápido y motivador." },
    { icon: <Crown className="w-4 h-4 text-amber-500" />, title: "Ranking mensual", desc: "Sube posiciones mientras impactas positivamente al planeta." },
    { icon: <Sparkles className="w-4 h-4 text-indigo-500" />, title: "Comunidad verde", desc: "Inspírate con las acciones de otros usuarios." },
];

export function HomePage() {
    const { user } = useAuth();
    const { data: summary, isLoading: summaryLoading, isError: summaryError } = useMyLeaderBoardSummary(!!user);

    const actionsCount = summary?.actionsCompletedThisMonth ?? 0;
    const pointsCount = summary?.totalPointsThisMonth ?? 0;
    const monthlyTarget = 20;
    const progress = Math.min(100, Math.round((actionsCount / monthlyTarget) * 100));
    
    return (
        <motion.section
            className="relative min-h-[90vh] overflow-hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
                alt="Naturaleza abstracta"
                className="absolute inset-0 w-full h-full object-cover opacity-70 select-none"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-background/90 backdrop-blur-sm" />
            <div className="absolute -left-10 top-10 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute right-0 bottom-10 w-72 h-72 bg-emerald-400/15 blur-3xl rounded-full" />

            <div className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">
                        Plataforma ecológica
                    </Badge>
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary drop-shadow-sm leading-tight">
                            {user ? `Hola ${user.firstName},` : "Acciona por el planeta,"}
                            <br />
                            suma puntos y cambia tu entorno.
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                            Registra hábitos sostenibles, compite en el ranking del mes y descubre nuevas formas de reducir tu huella ecológica.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="lg" className="font-semibold shadow-md" asChild>
                            <Link to={ROUTES.ECOLOGICAL_ACTIONS}>
                                Empezar ahora
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-border/60 hover:bg-foreground/5" asChild>
                            <Link to={ROUTES.LEADERBOARD}>
                                Ver ranking
                                <Crown className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="p-4 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm shadow-sm text-left"
                            >
                                <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-foreground">
                                    {item.icon}
                                    {item.title}
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative w-full"
                >
                    <div className="rounded-3xl border border-border/60 bg-background/80 backdrop-blur-lg shadow-lg p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Ranking del mes</p>
                                <h3 className="text-lg font-semibold text-foreground">Top ecológico</h3>
                            </div>
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {user ? "Activo" : "Invitado"}
                            </Badge>
                        </div>

                        {!user && (
                            <div className="p-4 rounded-2xl border border-border/60 bg-foreground/5 text-left space-y-2">
                                <p className="text-sm font-semibold text-foreground">Inicia sesión para ver tu progreso</p>
                                <p className="text-xs text-muted-foreground">Conéctate para sincronizar tus puntos y acciones del mes.</p>
                            </div>
                        )}

                        {user && summaryError && (
                            <div className="p-4 rounded-2xl border border-destructive/40 bg-destructive/5 text-left flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-foreground">No pudimos cargar tu resumen</p>
                                    <p className="text-xs text-muted-foreground">Inténtalo nuevamente más tarde.</p>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl border border-border/60 bg-foreground/5">
                                <p className="text-xs text-muted-foreground">Puntos totales</p>
                                {summaryLoading ? (
                                    <Skeleton className="h-7 w-20 mt-2" />
                                ) : (
                                    <p className="text-2xl font-bold text-primary">+{pointsCount}</p>
                                )}
                                <span className="text-[11px] text-muted-foreground">Sigue sumando acciones</span>
                            </div>
                            <div className="p-4 rounded-2xl border border-border/60 bg-foreground/5">
                                <p className="text-xs text-muted-foreground">Acciones completadas</p>
                                {summaryLoading ? (
                                    <Skeleton className="h-7 w-14 mt-2" />
                                ) : (
                                    <p className="text-2xl font-bold text-foreground">{actionsCount}</p>
                                )}
                                <span className="text-[11px] text-muted-foreground">Reciclar, plantar y más</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl border border-border/60 bg-foreground/5">
                            <p className="text-xs text-muted-foreground mb-2">Progreso mensual</p>
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    {summaryLoading ? (
                                        <Skeleton className="h-5 w-28 mb-2" />
                                    ) : (
                                        <p className="text-sm font-semibold text-foreground">
                                            {actionsCount} de {monthlyTarget} acciones
                                        </p>
                                    )}
                                    <span className="text-[11px] text-muted-foreground">Completa acciones para subir en el ranking</span>
                                </div>
                                <div className="h-12 w-12 rounded-full border-4 border-primary/30 flex items-center justify-center text-primary font-semibold">
                                    {summaryLoading ? <Skeleton className="h-4 w-10" /> : `${progress}%`}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/15 blur-3xl rounded-full" />
                    <div className="absolute -top-6 -right-6 w-28 h-28 bg-emerald-300/20 blur-3xl rounded-full" />
                </motion.div>
            </div>
        </motion.section>
    );
}
