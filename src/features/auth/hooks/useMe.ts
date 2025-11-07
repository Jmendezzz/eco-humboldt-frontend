import { useQuery } from "@tanstack/react-query";
import type { MeResponseDto } from "../dtos/me-response.dto";
import { AuthService } from "../services/auth.service";

const FIVE_MINUTES =  1000 * 60 * 5;

export function useMe() {
    return useQuery<MeResponseDto>({
        queryKey: ["me"],
        queryFn: AuthService.getProfile,
        staleTime: FIVE_MINUTES
    });
}