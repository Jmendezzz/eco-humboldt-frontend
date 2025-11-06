import { motion } from "framer-motion";

type EducationCardProps = {
    title: string;
    description: string;
    icon: string;
    index: number;
};

export function EducationCard({ title, description, icon, index }: EducationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
        flex flex-col items-center text-center p-6 rounded-2xl
        bg-background/40 border border-border/40 backdrop-blur-md
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        transition-all duration-300 hover:-translate-y-2
        max-w-sm mx-auto
      "
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </motion.div>
    );
}
