import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const userTheme = localStorage.theme;
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const activeDark = userTheme === "dark" || (!userTheme && systemPrefersDark);

        setIsDark(activeDark);
        document.documentElement.classList.toggle("dark", activeDark);
    }, []);

    const toggleTheme = () => {
        const nextTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        localStorage.theme = nextTheme;
        document.documentElement.classList.toggle("dark", !isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-border bg-muted hover:bg-muted/70 transition-colors shadow-sm"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.span
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-yellow-400"
                    >
                        <MdDarkMode size={22} />
                    </motion.span>
                ) : (
                    <motion.span
                        key="sun"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-primary"
                    >
                        <MdLightMode size={22} />
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}
