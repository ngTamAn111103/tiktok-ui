// Layouts
import { HeaderOnly } from '../components/Layout';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];
export const privateRoutes = [];
