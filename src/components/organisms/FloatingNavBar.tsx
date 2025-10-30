import { NavLink } from "react-router-dom";
import {
    MdHome,
    MdSchool,
    MdLeaderboard,
    MdPerson,
} from "react-icons/md";
import { ROUTES } from "@/routes";

export function FloatingNavBar() {
    return (
        <nav
            className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        flex justify-around items-center
        bg-muted/70 backdrop-blur-md
        border border-border
        rounded-2xl shadow-lg
        px-6 py-3
        w-[95%] max-w-sm
        text-sm text-foreground
        transition-all z-50
      "
        >
            {[
                { to: ROUTES.HOME, label: "Inicio", icon: <MdHome size={22} /> },
                { to: ROUTES.EDUCATION, label: "Aprender", icon: <MdSchool size={22} /> },
                { to: ROUTES.LEADERBOARD, label: "Ranking", icon: <MdLeaderboard size={22} /> },
                { to: ROUTES.PROFILE, label: "Perfil", icon: <MdPerson size={22} /> },
            ].map(({ to, label, icon }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `
            flex flex-col items-center justify-center gap-1 transition-colors
            ${isActive
                            ? "text-primary"
                            : "text-foreground hover:text-primary/80"
                        }
          `
                    }
                >
                    {icon}
                    <span className="text-[0.75rem]">{label}</span>
                </NavLink>
            ))}
        </nav>
    );
}
