import Loadable from 'react-loadable';
import Loader from './component/Loader/Loader';

const AsyncHomePage = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loader,
});

const AsyncAboutPage = Loadable({
  loader: () => import('./pages/About'),
  loading: Loader,
});

const AsyncPetsPage = Loadable({
  loader: () => import('./pages/Pets'),
  loading: Loader,
});

const AsyncPetPage = Loadable({
  loader: () => import('./pages/Pet'),
  loading: Loader,
});

export default [
  {
    path: '/',
    exact: true,
    component: AsyncHomePage,
  },
  {
    path: '/about',
    exact: false,
    component: AsyncAboutPage,
  },
  {
    path: '/pets/:id',
    exact: false,
    component: AsyncPetPage,
  },
  {
    path: '/pets',
    exact: false,
    component: AsyncPetsPage,
  },
];
