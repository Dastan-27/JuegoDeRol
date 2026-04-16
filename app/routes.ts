import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
    route("game", "routes/game.tsx"),
    route("map", "routes/map.tsx")
] satisfies RouteConfig;
