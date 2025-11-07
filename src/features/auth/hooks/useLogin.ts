import { useAuth } from "@/contexts/AuthContext";
import { AuthService } from "../services/auth.service";
import type { LoginResponseDto } from "../dtos/login-response.dto";
import type { LoginRequestDto } from "../dtos/login-request.dto";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";

export function useLogin() {
    const { login } = useAuth();
    const navigate = useNavigate();

    return useMutation<LoginResponseDto, Error, LoginRequestDto>({
        mutationFn: AuthService.login,
        onSuccess: async (data) => {
            await login(data.accessToken);
            navigate(ROUTES.HOME);
        },
        onError: (error) => {
            console.error("Login error:", error);
        },
    });
}