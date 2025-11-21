import { motion } from "framer-motion";
import { Crown, Medal, Star, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { LeaderBoardEntryDto } from "../dtos/leader-board-response.dto";
import { cn } from "@/lib/utils";

interface Props {
    entry: LeaderBoardEntryDto;
    highlight?: boolean;
}

function getMedal(entry: LeaderBoardEntryDto) {
    if (entry.position === 1) return <Crown className="w-5 h-5" />;
    if (entry.position === 2) return <Medal className="w-5 h-5" />;
    if (entry.position === 3) return <Star className="w-5 h-5" />;
    return null;
}

function getAccentClasses(position: number) {
    switch (position) {
        case 1:
            return "bg-amber-100/80 text-amber-900 border-amber-300/80 dark:bg-amber-500/10 dark:text-amber-100 dark:border-amber-500/40";
        case 2:
            return "bg-slate-100/80 text-slate-900 border-slate-300/80 dark:bg-slate-400/10 dark:text-slate-100 dark:border-slate-400/40";
        case 3:
            return "bg-orange-100/80 text-orange-900 border-orange-300/80 dark:bg-orange-500/10 dark:text-orange-100 dark:border-orange-500/40";
        default:
            return "bg-foreground/5 text-foreground border-border/60";
    }
}

export function LeaderBoardCard({ entry, highlight = false }: Props) {
    const initials = `${entry.firstName.charAt(0) ?? ""}${entry.lastName.charAt(0) ?? ""}`.toUpperCase();
    const medal = getMedal(entry);
    const accent = getAccentClasses(entry.position);

    return (
        <motion.div
            whileHover={{ scale: 1.01, translateY: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className={cn(
                "flex items-center gap-4 w-full p-4 border rounded-xl shadow-sm transition-colors duration-300 bg-background",
                highlight
                    ? "border-primary/70 shadow-md shadow-primary/10 ring-1 ring-primary/10"
                    : "border-border/60 hover:border-primary/40 hover:shadow-md hover:shadow-foreground/5"
            )}
        >
            <div
                className={cn(
                    "relative size-12 shrink-0 rounded-xl flex items-center justify-center font-semibold border shadow-inner",
                    accent
                )}
            >
                {medal ? medal : <span className="text-lg">{entry.position}</span>}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-wide text-muted-foreground">
                    #{entry.position}
                </span>
            </div>

            <div className="flex w-full items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <Avatar className="size-10 ring-2 ring-border/70">
                        <AvatarFallback className="bg-foreground/5 text-foreground font-semibold">
                            {initials || "?"}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <h3 className="text-base font-semibold text-foreground">
                                {entry.firstName} {entry.lastName}
                            </h3>
                            {highlight && (
                                <Badge variant="secondary" className="text-[11px]">
                                    Tú
                                </Badge>
                            )}
                        </div>
                        <p className="text-xs text-muted-foreground">Acciones completadas: {entry.actionsCompleted}</p>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                    <Badge className="px-3 py-1 rounded-full text-sm shadow-sm bg-foreground/5 text-foreground border-border/60">
                        {entry.totalPoints} pts
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Leaf className="w-4 h-4 text-green-500" />
                        Impacto positivo
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
