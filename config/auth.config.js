/**
 * Authentication configuration
 */

export const authConfig = {
  // Auth providers configuration
  providers: [
    // Example email provider
    {
      id: "email",
      name: "Email",
      type: "email",
    },
    // Example OAuth providers
    {
      id: "google",
      name: "Google",
      type: "oauth",
    },
    {
      id: "github",
      name: "GitHub",
      type: "oauth",
    },
  ],
  
  // Auth pages configuration
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
    verifyRequest: "/auth/verify",
  },
  
  // Session configuration
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  // Callbacks
  callbacks: {
    // Define callback functions here
  },
  
  // Events
  events: {
    // Define event handlers here
  },
  
  // Debug mode (enable in development only)
  debug: process.env.NODE_ENV === "development",
};

export default authConfig;