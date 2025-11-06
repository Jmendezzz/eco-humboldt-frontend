import { LoginForm } from "@/features/auth/components/LoginForm";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";

export function LoginPage() {
    const backgroundAltText = "Abstract nature background of a calm ocean or lake at sunset, providing a tranquil atmosphere.";

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-4">

            <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
                alt={backgroundAltText}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.85] dark:brightness-[0.45]"
                loading="lazy"
                aria-hidden="true"
            />

            <div
                className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/95 dark:from-background/80 dark:via-background/90 dark:to-background/100 backdrop-blur-sm"
                aria-hidden="true"
            />

            <div
                className="
                    relative z-10 w-full max-w-md p-8 rounded-3xl 
                    bg-white dark:bg-black/30 
                    border border-gray-200 dark:border-white/10 
                    shadow-2xl dark:shadow-none 
                "
                role="region"
                aria-label="Formulario de inicio de sesión"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                    ¡Bienvenido de nuevo!
                </h1>
                <p className="mt-2 text-muted-foreground text-sm mb-8">
                    Ingresa tus credenciales para continuar
                </p>

                <LoginForm />

                <p className="mt-6 text-sm text-center text-muted-foreground">
                    ¿No tienes cuenta?{" "}
                    <Link to={ROUTES.AUTH.REGISTER} className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        Regístrate aquí
                    </Link>
                </p>
            </div>

            <div
                className="absolute top-10 left-10 w-40 h-40 bg-primary/20 dark:bg-primary/10 blur-3xl rounded-full animate-pulse"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-20 right-10 w-52 h-52 bg-secondary/25 dark:bg-secondary/10 blur-3xl rounded-full animate-pulse"
                aria-hidden="true"
            />
        </main>
    );
}