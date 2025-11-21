import { axiosClient } from "@/config/axiosClient";
import type { LeaderBoardResponseDto } from "../dtos/leader-board-response.dto";
import type { LeaderBoardSummaryResponseDto } from "../dtos/leader-board-summary-response.dto";

const BASE_PATH = "/leader-board";

export const LeaderBoardService = {
    async getTop(limit?: number): Promise<LeaderBoardResponseDto> {
        const response = await axiosClient.get<LeaderBoardResponseDto>(
            `${BASE_PATH}/top`,
            {
                params: limit ? { limit } : undefined,
            }
        );
        return response.data;
    },

    async getMySummary(): Promise<LeaderBoardSummaryResponseDto> {
        const response = await axiosClient.get<LeaderBoardSummaryResponseDto>(
            `${BASE_PATH}/me/summary`,
        );
        return response.data;
    },
};
