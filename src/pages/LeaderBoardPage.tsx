import { motion } from "framer-motion";
import { Crown, Medal, Sparkles } from "lucide-react";
import { LeaderBoardList } from "@/features/leader-board/components/LeaderBoardList";
import { Badge } from "@/components/ui/badge";

export function LeaderBoardPage() {
    return (
        <motion.section
            className="relative py-14 px-6 min-h-screen overflow-hidden flex justify-center transition-colors duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/50 via-background/70 to-background/95 dark:from-emerald-900/25" />

            <motion.div
                className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-green-400/25 dark:bg-green-500/10"
                animate={{ y: [0, 25, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl bg-emerald-300/25 dark:bg-emerald-600/10"
                animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 text-center"
                >
                    <div className="flex justify-center">
                        <Badge variant="secondary" className="text-xs font-semibold bg-primary/10 text-primary border-primary/20">
                            Ranking del mes
                        </Badge>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary flex items-center gap-3">
                            Ranking Ecológico
                            <Crown className="w-8 h-8 text-amber-500" />
                        </h1>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Descubre a las personas que más están aportando al planeta. Suma puntos completando acciones ecológicas para subir posiciones.
                    </p>
                </motion.div>

                <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-10" />

                <LeaderBoardList />

                <motion.div
                    className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] h-24 bg-white/30 dark:bg-white/10 rounded-3xl blur-2xl"
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>
        </motion.section>
    );
}
