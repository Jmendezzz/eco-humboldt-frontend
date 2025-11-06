export const ROUTES = {
    HOME: "/",
    EDUCATION: "/education",
    LEADERBOARD: "/leaderboard",
    PROFILE: "/profile",
    AUTH:{
        LOGIN:"/login",
        REGISTER: "/register"
    }
} as const;

export type RouteKey = keyof typeof ROUTES;