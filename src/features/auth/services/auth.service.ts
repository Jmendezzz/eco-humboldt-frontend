
import { axiosClient } from "@/config/axiosClient";
import type { RegisterResponseDto } from "../dtos/register-response.dto";
import type { RegisterRequestDto } from "../dtos/register-request.dto";
import type { LoginResponseDto } from "../dtos/login-response.dto";
import type { LoginRequestDto } from "../dtos/login-request.dto";
import type { MeResponseDto } from "../dtos/me-response.dto";

const BASE_PATH = "/auth";

export const AuthService = {
    async register(data: RegisterRequestDto): Promise<RegisterResponseDto> {
        const response = await axiosClient.post<RegisterResponseDto>(
            `${BASE_PATH}/register`,
            data
        );
        return response.data;
    },

    async login(data: LoginRequestDto): Promise<LoginResponseDto> {
        const response = await axiosClient.post<LoginResponseDto>(
            `${BASE_PATH}/login`,
            data
        );
        return response.data;
    },

    async getProfile(): Promise<MeResponseDto> {
        const response = await axiosClient.get<MeResponseDto>(`${BASE_PATH}/me`);
        return response.data;
    },
};
