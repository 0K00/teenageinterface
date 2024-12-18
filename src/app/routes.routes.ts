import { Routes } from '@angular/router';
import { ComponentsPage } from './pages/components/components.page';
import ButtonPage from './pages/components/button/button.page';
import CalloutPage from './pages/components/callout/callout.page';
import InputPage from './pages/components/input/input.page';
import InstallationPage from './pages/documentation/installation/installation.page';

export const routes: Routes = [

  { path: 'components', component: ComponentsPage, children: [
      { path: '', redirectTo: 'button', pathMatch: 'full' },
      { path: 'button', component: ButtonPage, data: { title: 'Components / Button', order: 1 } },
      { path: 'callout', component: CalloutPage, data: { title: 'Components / Callout', order: 2 } },
      { path: 'input', component: InputPage, data: { title: 'Components / Input', order: 2 } }
    ]
  },

  { path: 'documentation', component: ComponentsPage, children: [
      { path: '', redirectTo: 'installation', pathMatch: 'full' },
      { path: 'installation', component: InstallationPage, data: { title: 'Getting Started / Installation', order: 1 } }
    ]
  }
];
