import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/routes";
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
                alt="Naturaleza abstracta"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/90 backdrop-blur-sm" />

            <div
                className="
          relative z-10 w-[90%] max-w-xl p-8 rounded-3xl 
          bg-background/60 border border-border/50 backdrop-blur-2xl 
          shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-colors duration-300
          text-foreground
        "
            >
                <h1 className="text-7xl md:text-8xl font-extrabold text-primary drop-shadow-sm">
                    404
                </h1>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                    ¡Ups! Página no encontrada
                </h2>
                <p className="mt-4 text-muted-foreground text-base md:text-lg">
                    Parece que te perdiste en el camino 🌱<br />
                    La página que buscas no existe o fue movida.
                </p>

                <div className="mt-8 flex justify-center">
                    <Button
                        size="lg"
                        className="font-semibold shadow-md"
                        onClick={() => navigate(ROUTES.HOME)}
                    >
                        Volver al inicio
                    </Button>
                </div>
            </div>

            <div className="absolute top-16 left-10 w-40 h-40 bg-primary/25 blur-3xl rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-secondary/30 blur-3xl rounded-full animate-pulse" />
        </section>
    );
}
