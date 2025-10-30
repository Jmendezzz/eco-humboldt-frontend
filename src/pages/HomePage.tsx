import { Button } from "@/components/ui/Button";

export function HomePage() {
    return (
        <section className="relative min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
                alt="Naturaleza abstracta"
                className="absolute inset-0 w-full h-full object-cover opacity-80 select-none"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/60 to-background/90 backdrop-blur-sm" />

            <div
                className="
          relative z-10 w-[90%] max-w-xl p-8 rounded-3xl 
          bg-background/60 border border-border/50 backdrop-blur-2xl 
          shadow-[0_8px_30px_rgba(0,0,0,0.3)] 
          transition-colors duration-300 text-foreground
        "
            >
                <h2 className="text-4xl md:text-5xl font-bold text-primary drop-shadow-sm">
                    ¡Bienvenido!
                </h2>

                <p className="mt-4 text-base md:text-lg text-muted-foreground">
                    Registra tus hábitos sostenibles y gana puntos ecológicos.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="font-semibold shadow-md">
                        Comienza tu aporte
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="border-border/50 hover:bg-foreground/5"
                    >
                        Aprende más
                    </Button>
                </div>
            </div>

            <div className="absolute top-10 left-10 w-40 h-40 bg-primary/25 blur-3xl rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-secondary/30 blur-3xl rounded-full animate-pulse" />
        </section>
    );
}
