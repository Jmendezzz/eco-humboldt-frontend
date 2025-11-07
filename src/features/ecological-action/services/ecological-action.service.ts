
import { axiosClient } from "@/config/axiosClient";
import type { EcologicalActionResponseDto } from "../dtos/ecological-action-response.dto";

const BASE_PATH = "/ecological-actions";

export const EcologicalActionService = {
    async getAll(): Promise<EcologicalActionResponseDto[]> {
        const response = await axiosClient.get<EcologicalActionResponseDto[]>(
            `${BASE_PATH}/all`,
        );
        return response.data;
    },
};
