import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../molecules/ThemeToggle";
import { ROUTES } from "@/routes";
import { useAuth } from "@/contexts/AuthContext";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { LogOut, User } from "lucide-react";
import { Button } from "../ui/Button";

export function HeaderNavBar() {
    const [scrolled, setScrolled] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 
        flex items-center justify-center 
        px-6 py-4 transition-all duration-300 backdrop-blur-md
        border-b 
        ${scrolled
                    ? "bg-muted/80 border-border shadow-md"
                    : "bg-transparent border-transparent"
                }`}
        >
            <nav className="container flex items-center justify-between">
                <Link to={ROUTES.HOME}>
                    <img className="w-12 h-18" src="logo-eco-humboldt.png" alt="Logo Eco Humboldt"  />
                </Link>


                <div className="ml-4 flex gap-4 items-center">
                    <ThemeToggle />

                    {!isAuthenticated ? (
                        <>
                            <Link to={ROUTES.AUTH.LOGIN}>
                                <Button variant="outline" size="sm">
                                    Iniciar sesión
                                </Button>
                            </Link>
                            <Link to={ROUTES.AUTH.REGISTER}>
                                <Button size="sm">Registrarse</Button>
                            </Link>
                        </>
                    ) : (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="focus:outline-none">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/placeholder-avatar.png" alt={user?.firstName} />
                                    <AvatarFallback>
                                        {user?.firstName?.[0]}
                                        {user?.lastName?.[0]}
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="w-56 bg-background/95 backdrop-blur-md border-border/70"
                            >
                                <DropdownMenuLabel>
                                    <div className="flex flex-col">
                                        <span className="font-medium">
                                            {user?.firstName} {user?.lastName}
                                        </span>
                                        <span className="text-xs text-muted-foreground truncate">
                                            {user?.email}
                                        </span>
                                    </div>
                                </DropdownMenuLabel>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <Link
                                        to={ROUTES.PROFILE ?? "#"}
                                        className="flex items-center gap-2 w-full"
                                    >
                                        <User className="h-4 w-4" />
                                        Ver perfil
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem
                                    onClick={logout}
                                    className="text-destructive focus:text-white flex items-center gap-2 cursor-pointer focus:bg-destructive"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Cerrar sesión
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </nav>
        </header>
    );
}
