import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home/HomePage"));

export const PublicRoutes = [{ path: "/", Element: <HomePage /> }];
