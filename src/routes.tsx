import { createBrowserRouter, RouteObject } from "react-router-dom";

import MenuPlanner from "./modules/menuPlanner/MenuPlanner";
import Recipes from "./modules/recipes/Recipes";
import MainLayout from "./shared/components/structures/MainLayout";
import PageNotFound from "./modules/pageNotFound/PageNotFound";

export type RoutePath = ''
    | 'menu-planner'
    | 'menu-planner/lol'
    | 'menu-planner/:comp'
    | 'recipes';

export const breadcrumbNameMap: Map<string, string> = new Map([
    ['menu-planner', 'Menu planner'],
    ['lol', 'Lol'],
    ['recipes', 'Recipes'],
]);

export const computeDynamicRoute = (routes: RoutePath, args: string[]): RoutePath => {
    let argsUsed = 0;
    return routes.split('/').reduce((finalRoute, route) => {
        finalRoute += '/';
        if (route.startsWith(':')) {
            finalRoute += args[argsUsed];
            argsUsed++;
        } else {
            finalRoute += route;
        }
        return finalRoute;
    }, '') as RoutePath;
};

type CustomRouteObject = Omit<RouteObject, 'path' | 'children'> & {
    path?: RoutePath,
    children?: CustomRouteObject[],
};

const routes: CustomRouteObject[] = [
    {
        path: '',
        element: <MainLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: 'menu-planner',
                element: <MenuPlanner />,
            },
            {
                path: 'menu-planner/lol',
                element: <Recipes />,
            },
            {
                path: 'menu-planner/:comp',
                element: <Recipes />,
            },
            {
                path: 'recipes',
                element: <Recipes />,
            },
        ]    
    },
]

const router = createBrowserRouter(
    routes as RouteObject[],
    {
        future: {
            v7_fetcherPersist: true,
            v7_relativeSplatPath: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
          },
    }
);

export default router;