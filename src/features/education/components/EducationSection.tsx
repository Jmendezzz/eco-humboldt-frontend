import { motion } from "framer-motion";
import { educationContent } from "../constants/data";
import { EducationCard } from "./EducationCard";
import {
    TbBook2,
    TbLeaf,
    TbSparkles,
    TbBulb,
    TbRecycle,
    TbShieldCheck,
    TbCircleCheck,
    TbClockHour4,
    TbFileDescription,
} from "react-icons/tb";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
    const quickWins = [
        { icon: <TbRecycle className="w-4 h-4 text-emerald-500" />, title: "Reutiliza y repara", desc: "Dale una segunda vida a envases y bolsas antes de desechar." },
        { icon: <TbBulb className="w-4 h-4 text-amber-500" />, title: "Compra con intención", desc: "Elige productos a granel o con empaques reciclables." },
        { icon: <TbShieldCheck className="w-4 h-4 text-sky-500" />, title: "Protege tu entorno", desc: "Organiza limpiezas comunitarias y separa residuos correctamente." },
    ];

    const resourcePills = [
        "Guías prácticas", "Hábitos cotidianos", "Impacto en cifras", "Inspiración rápida"
    ];

    const stats = [
        { label: "Minutos por hábito", value: "5-10", detail: "Tiempo promedio para adoptar un cambio" },
        { label: "Acciones comunitarias", value: "120+", detail: "Eventos organizados por la comunidad" },
        { label: "Plástico evitado", value: "~280 kg", detail: "Impacto estimado por usuarios activos" },
    ];

    const spotlights = [
        { title: "Guía de reciclaje en 5 pasos", type: "PDF práctico", time: "5 min", icon: <TbFileDescription className="w-4 h-4 text-primary" /> },
        { title: "Check-list de compras conscientes", type: "Lista rápida", time: "3 min", icon: <TbCircleCheck className="w-4 h-4 text-green-500" /> },
    ];

    return (
        <section className="relative py-24 px-6 text-center overflow-hidden">
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

            <div className="relative z-10 max-w-6xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="flex flex-col items-center gap-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            Aprende y actúa
                        </Badge>
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <h2 className="text-4xl md:text-5xl font-bold text-primary drop-shadow-sm">
                                Educación y Conciencia Ambiental
                            </h2>
                        </div>

                        <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Conecta conocimiento con acción. Explora guías prácticas, hábitos rápidos y recursos que puedes usar hoy para reducir tu huella.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {resourcePills.map((pill) => (
                                <Badge key={pill} variant="outline" className="bg-background/60 border-border/60 text-xs">
                                    {pill}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="p-4 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm shadow-sm text-left">
                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                                <p className="text-2xl font-bold text-primary mt-1">{stat.value}</p>
                                <p className="text-[11px] text-muted-foreground mt-1">{stat.detail}</p>
                            </div>
                        ))}
                    </div>
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
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {quickWins.map((item) => (
                        <div key={item.title} className="p-5 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-sm text-left shadow-sm">
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                                {item.icon}
                                {item.title}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {spotlights.map((item) => (
                        <div key={item.title} className="p-5 rounded-2xl border border-border/60 bg-foreground/5 text-left flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                {item.icon}
                                {item.title}
                            </div>
                            <p className="text-xs text-muted-foreground">{item.type}</p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <TbClockHour4 className="w-4 h-4" />
                                    {item.time}
                                </span>
                                <Button size="sm" variant="outline" className="h-8 px-3 border-border/60">
                                    Ver ahora
                                </Button>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-8 flex flex-col justify-center items-center gap-4"
                >
                    <div className="max-w-3xl mx-auto space-y-3">
                        <h3 className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
                            <TbBook2 className="w-5 h-5 text-primary" />
                            Sé parte del cambio
                        </h3>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Aprende, comparte y aplica tus conocimientos en tu vida diaria.
                            Cada hábito suma y te acerca a una comunidad más consciente.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                        <Button
                            size="lg"
                            className="shadow-md font-semibold flex items-center gap-2"
                        >
                            <TbLeaf className="w-5 h-5" />
                            Iniciar un hábito
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-border/60 flex items-center gap-2"
                        >
                            <TbSparkles className="w-5 h-5" />
                            Descargar guía rápida
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
