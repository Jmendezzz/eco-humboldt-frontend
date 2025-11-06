import { useEffect, useState } from "react";
import { ThemeToggle } from "../molecules/ThemeToggle";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes";

export function HeaderNavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
        sticky top-0 z-50 
        flex items-center justify-center 
        px-6 py-4 transition-all duration-300 backdrop-blur-md
        border-b 
        ${scrolled
                    ? "bg-muted/80 border-border shadow-md"
                    : "bg-transparent border-transparent"}
      `}
        >
            <nav className="container flex items-center justify-between ">
                <h1 className={`text-xl font-bold transition-colors ${scrolled ? "text-primary" : "text-primary"}`}>
                    Menos Plástico, Más Vida
                </h1>

                <div className="ml-4 flex gap-6 items-center">
                    <ThemeToggle />
                    <Link to={ROUTES.AUTH.LOGIN}>
                        <Button>Iniciar Sesión</Button>
                    </Link>
                </div>
            </nav>

        </header>
    );
}
