import { useQuery } from "@tanstack/react-query";
import type { UserTodayEcologicalActionsResponseDto } from "../dtos/user-today-ecological-actions-response.dto";
import { UserEcologicalActionService } from "../services/user-ecological-action.service";

export function useTodayUserEcologicalActions() {
  return useQuery<UserTodayEcologicalActionsResponseDto>({
    queryKey: ["user-today-actions"],
    queryFn: UserEcologicalActionService.getTodayUserEcologicalActions,
  });
}