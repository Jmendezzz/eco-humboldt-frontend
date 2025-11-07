import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/auth.service";
import type { RegisterResponseDto } from "../dtos/register-response.dto";
import type { RegisterRequestDto } from "../dtos/register-request.dto";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";

export function useRegister() {
    const navigate = useNavigate();

    return useMutation<RegisterResponseDto, Error, RegisterRequestDto>({
        mutationFn: AuthService.register,
        onSuccess: () => {
            navigate(ROUTES.AUTH.LOGIN);
        }
    });
}
