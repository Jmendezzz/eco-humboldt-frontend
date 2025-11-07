
import { axiosClient } from "@/config/axiosClient";
import type { UserTodayEcologicalActionsResponseDto } from "../dtos/user-today-ecological-actions-response.dto";
import type { ValidateEcologicalActionRequest } from "@/features/ecological-action/dtos/validate-ecological-action-request.dto";
import type { ValidateEcologicalActionResponseDto } from "../dtos/validate-ecological-action-response.dto";

const BASE_PATH = "/user-ecological-actions";

export const UserEcologicalActionService = {
    async validateEcologicalAction(request: ValidateEcologicalActionRequest): Promise<ValidateEcologicalActionResponseDto> {
        const response = await axiosClient.post<ValidateEcologicalActionResponseDto>(
            `${BASE_PATH}/validate`,
            request
        );
        return response.data;
    },

    async getTodayUserEcologicalActions(): Promise<UserTodayEcologicalActionsResponseDto> {
        const response = await axiosClient.get<UserTodayEcologicalActionsResponseDto>(
            `${BASE_PATH}/user/today`
        );
        return response.data;
    }

};
