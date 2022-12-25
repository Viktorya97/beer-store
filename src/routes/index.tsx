import {ReactElement} from 'react';
import Home from '../views/home/index';
import SingleBeer from '../views/singleBeer';
import Cart from '../views/cart';

interface Routes {
    id: number;
    path: string;
    element: ReactElement;
}

const routes: Routes[] = [
    {
        id: 1,
        path: '/',
        element: <Home />,
    },
    {
        id: 2,
        path: '/beers/:id',
        element: <SingleBeer />
    },
    {
        id: 3,
        path: '/cart',
        element: <Cart />
    }
]

export default routes;