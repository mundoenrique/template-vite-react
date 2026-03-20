import { createBrowserRouter } from 'react-router';

import { MainLayout } from '@/layouts/MainLayout';
import { DocsPage } from '@/pages/DocsPage';
import { SocialPage } from '@/pages/SocialPage';

export const Approuter = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: DocsPage,
      },
      {
        path: '/social',
        Component: SocialPage,
      },
    ],
  },
]);
