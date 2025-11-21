import { useQuery } from "@tanstack/react-query";
import { LeaderBoardService } from "../services/leader-board.service";
import type { LeaderBoardSummaryResponseDto } from "../dtos/leader-board-summary-response.dto";

export function useMyLeaderBoardSummary(enabled: boolean) {
    return useQuery<LeaderBoardSummaryResponseDto>({
        queryKey: ["leader-board", "summary"],
        queryFn: LeaderBoardService.getMySummary,
        enabled,
        staleTime: 1000 * 60 * 2,
    });
}
