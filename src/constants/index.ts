export const APP_NAME = "Your App";
export const APP_DESCRIPTION = "A modern web application built with Next.js";
export const APP_VERSION = "1.0.0";

export const API_ENDPOINTS = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
  },
  USER: {
    PROFILE: "/user/profile",
    SETTINGS: "/user/settings",
  },
};

export const ROUTES = {
  HOME: "/",
  FEATURES: "/features",
  PRICING: "/pricing",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",
};

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};
