export const ROUTES = {
    HOME: "/",
    EDUCATION: "/education",
    LEADERBOARD: "/leaderboard",
    PROFILE: "/profile",
} as const;

export type RouteKey = keyof typeof ROUTES;