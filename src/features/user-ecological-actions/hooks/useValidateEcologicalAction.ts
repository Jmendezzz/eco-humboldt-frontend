import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserEcologicalActionService } from "../services/user-ecological-action.service";
import type { ValidateEcologicalActionRequest } from "@/features/ecological-action/dtos/validate-ecological-action-request.dto";

export function useValidateEcologicalAction() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (request: ValidateEcologicalActionRequest) =>
            UserEcologicalActionService.validateEcologicalAction(request),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-today-actions"] });
        },
    });
}