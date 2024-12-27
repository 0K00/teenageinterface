import { Routes } from '@angular/router';
import { ComponentsPage } from './pages/components/components.page';
import AvatarPage from './pages/components/avatar/avatar.page';
import BadgePage from './pages/components/badge/badge.page';
import ButtonPage from './pages/components/button/button.page';
import CalloutPage from './pages/components/callout/callout.page';
import CardPage from './pages/components/card/card.page';
import CarouselPage from './pages/components/carousel/carousel.page';
import CheckboxPage from './pages/components/checkbox/checkbox.page';
import IconsPage from './pages/components/icons/icons.page';
import InputPage from './pages/components/input/input.page';
import ProgressPage from './pages/components/progress/progress.page';
import RadioPage from './pages/components/radio/radio.page';
import SelectPage from './pages/components/select/select.page';
import SeparatorPage from './pages/components/separator/separator.page';
import SwitchPage from './pages/components/switch/switch.page';
import TabsPage from './pages/components/tabs/tabs.page';
import InstallationPage from './pages/documentation/installation/installation.page';

export const routes: Routes = [

  { path: 'components', component: ComponentsPage, children: [
      { path: '', redirectTo: 'avatar', pathMatch: 'full' },
      { path: 'avatar', component: AvatarPage, data: { title: 'Components / Avatar', order: 1, soon: undefined, alpha: undefined } },
      { path: 'badge', component: BadgePage, data: { title: 'Components / Badge', order: 2, soon: undefined, alpha: undefined } },
      { path: 'button', component: ButtonPage, data: { title: 'Components / Button', order: 3, soon: undefined, alpha: undefined } },
      { path: 'callout', component: CalloutPage, data: { title: 'Components / Callout', order: 4, soon: undefined, alpha: undefined } },
      { path: 'card', component: CardPage, data: { title: 'Components / Card', order: 5, soon: undefined, alpha: undefined } },
      { path: 'carousel', component: CarouselPage, data: { title: 'Components / Carousel', order: 6, soon: undefined, alpha: true } },
      { path: 'checkbox', component: CheckboxPage, data: { title: 'Components / Checkbox', order: 7, soon: undefined, alpha: undefined } },
      { path: 'icons', component: IconsPage, data: { title: 'Components / Icons', order: 8, soon: undefined, alpha: undefined } },
      { path: 'input', component: InputPage, data: { title: 'Components / Input', order: 9, soon: undefined, alpha: undefined } },
      { path: 'progress', component: ProgressPage, data: { title: 'Components / Progress', order: 10, soon: undefined, alpha: undefined } },
      { path: 'radio', component: RadioPage, data: { title: 'Components / Radio', order: 11, soon: undefined, alpha: undefined } },
      { path: 'select', component: SelectPage, data: { title: 'Components / Select', order: 12, soon: undefined, alpha: undefined } },
      { path: 'separator', component: SeparatorPage, data: { title: 'Components / Separator', order: 13, soon: undefined, alpha: undefined } },
      { path: 'switch', component: SwitchPage, data: { title: 'Components / Switch', order: 14, soon: undefined, alpha: undefined } },
      { path: 'tabs', component: TabsPage, data: { title: 'Components / Tabs', order: 15, soon: undefined, alpha: undefined } }
    ]
  },

  { path: 'documentation', component: ComponentsPage, children: [
      { path: '', redirectTo: 'installation', pathMatch: 'full' },
      { path: 'installation', component: InstallationPage, data: { title: 'Getting Started / Installation', order: 1, soon: undefined, alpha: undefined } }
    ]
  }
];
