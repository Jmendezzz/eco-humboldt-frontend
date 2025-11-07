import { useQuery } from "@tanstack/react-query";
import { EcologicalActionService } from "../services/ecological-action.service";
import type { EcologicalActionResponseDto } from "../dtos/ecological-action-response.dto";

const FIVE_MINUTES = 1000 * 60 * 5;

export function useAllEcologicalActions() {
    return useQuery<EcologicalActionResponseDto[]>({
        queryKey: ["ecological-actions/all"],
        queryFn: EcologicalActionService.getAll,
        staleTime: FIVE_MINUTES
    });
}