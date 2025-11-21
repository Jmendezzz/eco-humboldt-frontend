import { useQuery } from "@tanstack/react-query";
import type { LeaderBoardResponseDto } from "../dtos/leader-board-response.dto";
import { LeaderBoardService } from "../services/leader-board.service";

const FIVE_MINUTES = 1000 * 60 * 5;

export function useLeaderBoardTop(limit?: number) {
    return useQuery<LeaderBoardResponseDto>({
        queryKey: ["leader-board", "top", limit ?? "all"],
        queryFn: () => LeaderBoardService.getTop(limit),
        staleTime: FIVE_MINUTES,
    });
}
