import {lazy, LazyExoticComponent} from 'react';

/* Importaciones propias */
// import {LazyPage1, LazyPage2, LazyPage3} from '../01-LazyLoad/pages';
import {NoLazy} from '../01-LazyLoad/pages/NoLazy';

/* Tipo JSX */
type JSXComponent = () => JSX.Element;

/* Interfaz para las rutas */
interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-LazyLoad/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazy-load',
        Component: LazyLayout,
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy Loading'
    }
]