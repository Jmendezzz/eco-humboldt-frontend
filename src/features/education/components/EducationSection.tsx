import { motion } from "framer-motion";
import { educationContent } from "../constants/data";
import { EducationCard } from "./EducationCard";
import { BookOpen, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function EducationSection() {
    return (
        <section className="relative py-24 px-6 text-center overflow-hidden">
            {/* 🌈 Fondo animado */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/60 to-background/90 backdrop-blur-xl" />
            <motion.div
                className="absolute top-20 left-10 w-60 h-60 bg-primary/30 blur-3xl rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/20 blur-3xl rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 7, repeat: Infinity }}
            />

            <div className="relative z-10 max-w-6xl mx-auto space-y-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-5"
                >
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary drop-shadow-sm">
                            Educación y Conciencia Ambiental
                        </h2>
                    </div>

                    <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Aprender sobre sostenibilidad es el primer paso para construir un futuro más verde.
                        Cada acción, por pequeña que parezca, puede tener un impacto positivo en el planeta.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                >
                    {educationContent.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <EducationCard index={index} {...item} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 flex  flex-col justify-center"
                >
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                        🌱 Sé parte del cambio
                    </h3>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                        Aprende, comparte y aplica tus conocimientos en tu vida diaria.
                        La educación ambiental comienza con una decisión: cuidar nuestro hogar.
                    </p>

                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            className="shadow-md font-semibold flex items-center gap-2"
                        >
                            <BookOpen className="w-5 h-5" />
                            Explorar más recursos
                        </Button>
                    </div>


                </motion.div>
            </div>

            <motion.div
                className="absolute top-1/3 left-1/4 w-8 h-8 bg-green-400/20 rounded-full blur-md"
                animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-emerald-300/20 rounded-full blur-md"
                animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
        </section>
    );
}
