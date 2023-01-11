import Cart from '../features/Cart';
import Home from '../features/Home';

const routes = {
  home: '/',
  cart: '/cart',
  //   profile: '/@:nickname',
  //   upload: '/upload',
  //   search: '/search',
  //   live: '/live',
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
];
export const privateRoutes = [];
