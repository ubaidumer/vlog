import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import LoadingScreen from 'src/components/LoadingScreen';
import AuthGuard from 'src/components/AuthGuard';
import GuestGuard from 'src/components/GuestGuard';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={props => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/errors/NotFoundView'))
  },
  {
    exact: true,
    path: '/under-construction',
    component: lazy(() => import('src/views/maintenance/UnderConstructionView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('src/views/auth/LoginView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/forgot-password',
    component: lazy(() => import('src/views/auth/ForgotPasswordView'))
  },
  {
    guard: GuestGuard,
    path: '/reset-password',
    component: lazy(() => import('src/views/auth/ResetPasswordView'))
  },
  {
    path: '/admin',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/admin/account',
        component: lazy(() => import('src/views/account/AccountView'))
      },
      {
        exact: true,
        path: '/admin/dashboard',
        component: lazy(() => import('src/views/reports/DashboardView'))
      },
      {
        exact: true,
        path: '/admin',
        component: () => <Redirect to="/admin/dashboard" />
      },
      {
        exact: true,
        path: '/admin/huizen',
        component: lazy(() => import('src/views/house/HouseListView'))
      },
      {
        exact: true,
        path: '/admin/huizen/create',
        component: lazy(() => import('src/views/house/AddHouse'))
      },
      {
        exact: true,
        path: '/admin/huizen/edit/:id',
        component: lazy(() => import('src/views/house/EditHouse'))
      },
      {
        exact: true,
        path: '/admin/aanvragen',
        component: lazy(() =>
          import('src/views/applications/ApplicationListView')
        )
      },
      {
        exact: true,
        path: '/admin/aanvragen/create',
        component: lazy(() =>
          import('src/views/applications/AddEditApplications')
        )
      },
      {
        exact: true,
        path: '/admin/aanvragen/edit/:id',
        component: lazy(() =>
          import('src/views/applications/AddEditApplications')
        )
      },
      {
        exact: true,
        path: '/admin/facturen',
        component: lazy(() => import('src/views/invoice'))
      },
      {
        exact: true,
        path: '/admin/facturen/download/:id',
        component: lazy(() => import('src/views/invoice/DownloadInvoice'))
      },
      {
        exact: true,
        path: '/admin/klanten',
        component: lazy(() => import('src/views/clients/ClientListView'))
      },
      {
        exact: true,
        path: '/admin/klanten/create',
        component: lazy(() => import('src/views/clients/AddClient'))
      },
      {
        exact: true,
        path: '/admin/klanten/edit/:id',
        component: lazy(() => import('src/views/clients/EditClient'))
      },
      {
        exact: true,
        path: '/admin/gebruikers',
        component: lazy(() => import('src/views/users/UserListView'))
      },
      {
        exact: true,
        path: '/admin/gebruikers/create',
        component: lazy(() => import('src/views/users/AddUser'))
      },
      {
        exact: true,
        path: '/admin/gebruikers/edit/:id',
        component: lazy(() => import('src/views/users/EditUser'))
      },
      {
        exact: true,
        path: '/admin/instellingen',
        component: lazy(() => import('src/views/settings'))
      },
      {
        exact: true,
        path: '/admin/email',
        component: lazy(() => import('src/views/settings/email/addEmail'))
      },
      {
        exact: true,
        path: '/admin/CMS',
        component: lazy(() => import('src/views/settings/cms/CMSListView'))
      },
      {
        exact: true,
        path: '/admin/CMS/create',
        component: lazy(() => import('src/views/settings/cms/AddCMS'))
      },
      {
        exact: true,
        path: '/admin/CMS/edit/:id',
        component: lazy(() => import('src/views/settings/cms/EditCMS'))
      },
    ]
  },
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/',
        component: lazy(() => import('src/views/auth/LoginView'))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }
];

export default routes;
