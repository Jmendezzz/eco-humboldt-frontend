import { motion } from "framer-motion";
import { EcologicalActionsList } from "@/features/ecological-action/components/EcologicalActionList";
import { Leaf, Sparkles } from "lucide-react";

export function EcologicalActionsPage() {
    return (
        <motion.section
            className="relative py-12 px-6 min-h-screen overflow-hidden flex justify-center transition-colors duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute inset-0 bg-gradient-to-b 
        from-emerald-100/40 via-background/60 to-background/95 
        dark:from-emerald-900/20 dark:via-background/70 dark:to-background/95 
        backdrop-blur-[14px] transition-colors duration-500"
            />

            <motion.div
                className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl 
        bg-green-400/25 dark:bg-green-500/10"
                animate={{ y: [0, 25, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl 
        bg-emerald-300/25 dark:bg-emerald-600/10"
                animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary flex justify-center items-center gap-3">
                            <Sparkles className="w-6 h-6 text-green-500 animate-pulse" />
                            Acciones Ecológicas
                            <Leaf className="w-6 h-6 text-green-500 animate-pulse" />
                        </h1>

                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Participa en actividades sostenibles, gana puntos ecológicos y ayuda al planeta 🌍
                        </p>

                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Registra que actividades haz realizado hoy!
                        </p>
                        
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-10" />

                    <EcologicalActionsList />
                </motion.div>

                <motion.div
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-24 
          bg-white/30 dark:bg-white/10 rounded-3xl blur-2xl"
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>
        </motion.section>
    );
}
