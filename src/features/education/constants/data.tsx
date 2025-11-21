import { TbRecycle, TbLeaf, TbBook2, TbShieldCheck, TbBulb, TbCircleCheck } from "react-icons/tb";
import type { ReactNode } from "react";

type EducationItem = {
    title: string;
    description: string;
    icon: ReactNode;
};

export const educationContent: EducationItem[] = [
    {
        title: "¿Por qué reducir el plástico?",
        description:
            "Cada año, más de 8 millones de toneladas de plástico terminan en los océanos. Reducir su uso es esencial para proteger la vida marina y mantener ecosistemas saludables.",
        icon: <TbRecycle className="w-8 h-8 text-emerald-500" />,
    },
    {
        title: "Beneficios de un consumo responsable",
        description:
            "Pequeñas acciones diarias como llevar tu propia botella o bolsa reutilizable generan un impacto positivo en el planeta y reducen tu huella de carbono.",
        icon: <TbLeaf className="w-8 h-8 text-green-600" />,
    },
    {
        title: "Educación para el cambio",
        description:
            "El cambio comienza por entender el problema. Aprender y compartir información sobre sostenibilidad empodera a las comunidades.",
        icon: <TbBook2 className="w-8 h-8 text-primary" />,
    },
    {
        title: "Circularidad en casa",
        description:
            "Reutilizar frascos, compostar restos orgánicos y reparar antes de reemplazar reduce residuos y extiende la vida útil de tus objetos.",
        icon: <TbShieldCheck className="w-8 h-8 text-sky-500" />,
    },
    {
        title: "Compra inteligente",
        description:
            "Prefiere productos locales y a granel. Así disminuyes empaques, fomentas economías cercanas y reduces emisiones de transporte.",
        icon: <TbBulb className="w-8 h-8 text-amber-500" />,
    },
    {
        title: "Impacto medible",
        description:
            "Registrar tus acciones ecológicas te ayuda a ver resultados reales, motivar a otros y mantener tus hábitos en el tiempo.",
        icon: <TbCircleCheck className="w-8 h-8 text-indigo-500" />,
    },
];
