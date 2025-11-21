import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/AuthContext";
import { RefreshCw, Crown, Medal, Star } from "lucide-react";
import { useLeaderBoardTop } from "../hooks/useLeaderBoardTop";
import { LeaderBoardCard } from "./LeaderBoardCard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LeaderBoardEntryDto } from "../dtos/leader-board-response.dto";

interface Props {
    limit?: number;
}

function PodiumItem({ entry, highlight }: { entry: LeaderBoardEntryDto | undefined; highlight: boolean }) {
    if (!entry) return <div className="h-20" />;

    const heights: Record<number, string> = {
        1: "min-h-[9rem]",
        2: "min-h-[7.5rem]",
        3: "min-h-[6.5rem]",
    };

    const accents: Record<number, string> = {
        1: "border-amber-400/60 bg-amber-50/60 text-amber-900 dark:bg-amber-400/10 dark:text-amber-100",
        2: "border-slate-400/60 bg-slate-50/60 text-slate-900 dark:bg-slate-400/10 dark:text-slate-100",
        3: "border-orange-400/60 bg-orange-50/60 text-orange-900 dark:bg-orange-400/10 dark:text-orange-100",
    };

    const icon = entry.position === 1 ? <Crown className="w-5 h-5" /> : entry.position === 2 ? <Medal className="w-5 h-5" /> : <Star className="w-5 h-5" />;

    return (
        <div className="flex flex-col items-center gap-3 w-full">
            <div
                className={cn(
                    "w-full rounded-2xl border p-4 shadow-sm flex flex-col items-center justify-between text-center bg-background/70 backdrop-blur-sm",
                    heights[entry.position] || "min-h-[6rem]",
                    accents[entry.position] || "border-border/70 text-foreground"
                )}
            >
                <div className="flex items-center gap-1 font-semibold text-sm">
                    {icon}
                    <span>#{entry.position}</span>
                </div>
                <div className="text-sm font-semibold text-foreground">
                    {entry.firstName} {entry.lastName}
                </div>
                <Badge variant="secondary" className="bg-foreground/5 text-foreground border-border/60">
                    {entry.totalPoints} pts
                </Badge>
                {highlight && (
                    <Badge className="mt-2 text-[11px]" variant="secondary">
                        Tú
                    </Badge>
                )}
            </div>
        </div>
    );
}

export function LeaderBoardList({ limit = 20 }: Props) {
    const { user } = useAuth();
    const { data, isLoading, isError, refetch, isRefetching } = useLeaderBoardTop(limit);

    if (isLoading) {
        return (
            <div className="space-y-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Skeleton key={idx} className="h-16 w-full rounded-xl" />
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex flex-col items-center gap-3 text-center text-destructive">
                <p>No se pudo cargar el ranking. Inténtalo nuevamente.</p>
                <Button onClick={() => refetch()} variant="outline" size="sm" disabled={isRefetching}>
                    <RefreshCw className="w-4 h-4" />
                    Reintentar
                </Button>
            </div>
        );
    }

    if (!data?.leaders.length) {
        return (
            <p className="text-center text-muted-foreground">
                Aún no hay líderes disponibles. ¡Sé el primero en sumar puntos!
            </p>
        );
    }

    const podium = data.leaders.slice(0, 3);
    const podiumDisplay = [podium[1], podium[0], podium[2]]; 
    const rest = data.leaders.slice(3);

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground text-center">Medallero</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                    {podiumDisplay.map((entry, idx) => (
                        <PodiumItem key={entry ? `${entry.userId}-${entry.position}` : `empty-${idx}`} entry={entry} highlight={entry ? user?.id === entry.userId : false} />
                    ))}
                </div>
            </div>

            {rest.length > 0 && (
                <div className="space-y-3">
                    {rest.map((entry) => (
                        <LeaderBoardCard
                            key={`${entry.userId}-${entry.position}`}
                            entry={entry}
                            highlight={user?.id === entry.userId}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
