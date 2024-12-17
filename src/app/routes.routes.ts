import { Routes } from '@angular/router';
import ButtonPage from './pages/components/button/button.page';
import InstallationPage from './pages/documentation/installation/installation.page';
import InputPage from './pages/components/input/input.page';

export const routes: Routes = [
  { path: 'components/button', component: ButtonPage, data: { title: 'Components / Button', order: 1 } },
  { path: 'documentation/installation', component: InstallationPage, data: { title: 'Getting Started / Installation', order: 1 } },
  { path: 'components/input', component: InputPage, data: { title: 'Components / Input', order: 2 } }
];