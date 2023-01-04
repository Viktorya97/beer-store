import Home from '../views/home/index'
import SingleBeer from '../views/singleBeer'
import Cart from '../views/cart'

const routesData: Routes[] = [
  {
    id: 1,
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    path: '/beers/:id',
    element: <SingleBeer />,
  },
  {
    id: 3,
    path: '/cart',
    element: <Cart />,
  },
]

export default routesData
