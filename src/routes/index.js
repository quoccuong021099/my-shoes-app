import Home from '../features/Home';

const routes = {
  home: '/',
  //   following: '/following',
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
];
export const privateRoutes = [];
