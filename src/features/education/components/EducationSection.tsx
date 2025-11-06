import { educationContent } from "../constants/data";
import { EducationCard } from "./EducationCard";

export function EducationSection() {
    return (
        <section className="relative py-20 px-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/50 to-background/90 backdrop-blur-md" />

            <div className="absolute top-20 left-10 w-52 h-52 bg-primary/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 blur-3xl rounded-full animate-pulse" />

            <div className="relative z-10 max-w-5xl mx-auto space-y-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary drop-shadow-sm">
                        Educación y Conciencia Ambiental
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Aprender sobre sostenibilidad es el primer paso para construir un futuro más verde.
                        Descubre cómo pequeños cambios pueden transformar nuestro entorno.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {educationContent.map((item, index) => (
                        <EducationCard key={item.title} index={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
