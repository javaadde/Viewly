

export interface SessionData {
    user?: {
        id: string;
        username: string;
        email: string;
        role: "admin" | "user";
    };
}