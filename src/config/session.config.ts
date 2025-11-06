

export const SessionConfig = {
    password: process.env.SESSION_SECRET!,
    cookieName: "app-session", // CRITICAL: Must match your login route
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week (Used for creating the session, destroy() ignores this)
    },
};