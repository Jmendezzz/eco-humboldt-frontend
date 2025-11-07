import type { MeResponseDto } from "@/features/auth/dtos/me-response.dto";
import { AuthService } from "@/features/auth/services/auth.service";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";


interface AuthContextType {
    user: MeResponseDto | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (token: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<MeResponseDto | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            setIsLoading(false);
            return;
        }

        AuthService.getProfile()
            .then((me) => setUser(me))
            .catch(() => {
                localStorage.removeItem("accessToken");
            })
            .finally(() => setIsLoading(false));

        const handleLogout = () => logout();
        window.addEventListener("auth-logout", handleLogout);
        return () => window.removeEventListener("auth-logout", handleLogout);
    }, []);

    const login = async (token: string) => {
        localStorage.setItem("accessToken", token);
        const me = await AuthService.getProfile();
        setUser(me);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
}
