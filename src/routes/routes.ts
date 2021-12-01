import {lazy, LazyExoticComponent} from 'react';

/* Importaciones propias */
// import {LazyPage1, LazyPage2, LazyPage3} from '../01-LazyLoad/pages';

/* Tipo JSX */
type JSXComponent = () => JSX.Element;

/* Interfaz para las rutas */
interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}

const LazyPage1 = lazy(() => import('../01-LazyLoad/pages/LazyPage1'));
const LazyPage2 = lazy(() => import('../01-LazyLoad/pages/LazyPage2'));
const LazyPage3 = lazy(() => import('../01-LazyLoad/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazy1',
        Component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        Component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/lazy3',
        Component: LazyPage3,
        name: 'LazyPage-3'
    }
]