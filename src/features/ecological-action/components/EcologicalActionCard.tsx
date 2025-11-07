import { motion, AnimatePresence } from "framer-motion";
import { Leaf, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { EcologicalActionResponseDto } from "../dtos/ecological-action-response.dto";

interface Props {
    action: EcologicalActionResponseDto;
    validated?: boolean;
}

export function EcologicalActionCard({ action, validated = false }: Props) {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className={`flex items-center justify-between w-full p-4 border rounded-lg bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 ${validated
                ? "border-green-500/70 bg-green-50/60 dark:bg-green-900/20"
                : "border-border/40"
                }`}
        >
            <div className="flex items-start gap-4 text-left w-full">
                <motion.div
                    animate={{
                        rotate: validated ? [0, -15, 15, 0] : 0,
                        scale: validated ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    {validated ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    ) : (
                        <Leaf className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    )}
                </motion.div>

                <div className="flex flex-col w-full">
                    <h3 className="text-md font-medium text-foreground">{action.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-snug">
                        {action.description}
                    </p>
                </div>
            </div>

            <AnimatePresence>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <Badge
                        variant="secondary"
                        className={`text-sm font-bold px-2 py-1 rounded-full ${validated
                            ? "bg-green-500/90 text-white shadow-md"
                            : "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200"
                            }`}
                    >
                        +{action.points} pts
                    </Badge>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
