import { Outlet } from "react-router-dom";
import { FloatingNavBar } from "../organisms/FloatingNavBar";
import { HeaderNavBar } from "../organisms/HeaderNavBar";

export function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors">
            <HeaderNavBar />

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="text-center py-4 text-sm text-muted-foreground border-t border-border">
                © {new Date().getFullYear()} Menos Plástico, Más Vida 🌿
            </footer>

            <FloatingNavBar />
        </div>
    );
}
