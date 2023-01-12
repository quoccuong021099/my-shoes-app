import NotFoundPage from '../components/NotFoundPage';
import Cart from '../features/Cart';
import Home from '../features/Home';
import DetailProduct from '../features/DetailProduct';

export const lishHash = ['#adidas', '#nike', '#jordan', '#other'];

export const routes = {
  home: '/home',
  cart: '/cart',
  notFound: '*',
  detail: '/product/:id',
};

export const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.cart,
    component: Cart,
  },
  {
    path: routes.detail,
    component: DetailProduct,
  },
  {
    path: routes.notFound,
    component: NotFoundPage,
  },
];
export const privateRoutes = [];
