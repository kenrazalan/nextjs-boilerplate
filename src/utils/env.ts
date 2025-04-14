const requiredEnvVars = [
  "NEXT_PUBLIC_API_URL",
  // Add other required environment variables here
] as const;

type RequiredEnvVar = (typeof requiredEnvVars)[number];

function getEnvVar(key: RequiredEnvVar): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  apiUrl: getEnvVar("NEXT_PUBLIC_API_URL"),
  // Add other environment variables here
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
} as const;

export function validateEnv(): void {
  if (process.env.NODE_ENV === "development") {
    requiredEnvVars.forEach((key) => {
      try {
        getEnvVar(key);
      } catch (error) {
        console.error(`Environment validation failed:`, error);
      }
    });
  }
}
