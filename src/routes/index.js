import NotFoundPage from '../components/NotFoundPage';
import Cart from '../features/Cart';
import Home from '../features/Home';
import DetailProduct from '../features/DetailProduct';
import Order from '../components/Order';

export const lishHash = ['#adidas', '#nike', '#jordan', '#other'];

export const routes = {
  home: '/home',
  cart: '/cart',
  profile: '/profile',
  order: '/order',
  notFound: '*',
  detail: '/product/:id',
};

export const publicRoutes = [
  {
    path: routes.home,
    component: Home,
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
export const privateRoutes = [
  {
    path: routes.cart,
    component: Cart,
  },
  {
    path: routes.profile,
    component: Cart,
  },
  {
    path: routes.order,
    component: Order,
  },
];
