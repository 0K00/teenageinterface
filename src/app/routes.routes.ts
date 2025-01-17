/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-28 09:05:54                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2025-01-05 15:18:51                               *
 *****************************************************************************/

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
import DarkmodePage from './pages/documentation/darkmode/darkmode.page';
import AboutPage from './pages/documentation/about/about.page';
import NotfoundPage from './pages/utils/notfound/notfound.page';
import { RedirectGuard } from './guards/redirect.guards';
import RedirectPage from './pages/utils/redirect/redirect.page';
import ShowcasePage from './pages/showcase/showcase.page';
import CliPage from './pages/documentation/cli/cli.page';

export const routes: Routes = [

  { path: '', component: ShowcasePage, title: "Teenage Interface" },

  { path: 'components', component: ComponentsPage, title: "Teenage Interface: Components", children: [
      { path: '', redirectTo: 'avatar', pathMatch: 'full' },
      { path: 'avatar', title: "Teenage Interface: Components / Avatar", component: AvatarPage, data: { title: 'Components / Avatar', order: 1, soon: undefined, alpha: undefined } },
      { path: 'badge', title: "Teenage Interface: Components / Badge", component: BadgePage, data: { title: 'Components / Badge', order: 2, soon: undefined, alpha: undefined } },
      { path: 'button', title: "Teenage Interface: Components / Button", component: ButtonPage, data: { title: 'Components / Button', order: 3, soon: undefined, alpha: undefined } },
      { path: 'callout', title: "Teenage Interface: Components / Callout", component: CalloutPage, data: { title: 'Components / Callout', order: 4, soon: undefined, alpha: undefined } },
      { path: 'card', title: "Teenage Interface: Components / Card", component: CardPage, data: { title: 'Components / Card', order: 5, soon: undefined, alpha: undefined } },
      { path: 'carousel', title: "Teenage Interface: Components / Carousel", component: CarouselPage, data: { title: 'Components / Carousel', order: 6, soon: undefined, alpha: true } },
      { path: 'checkbox', title: "Teenage Interface: Components / Checkbox", component: CheckboxPage, data: { title: 'Components / Checkbox', order: 7, soon: undefined, alpha: undefined } },
      { path: 'icons', title: "Teenage Interface: Components / Icons", component: IconsPage, data: { title: 'Components / Icons', order: 8, soon: undefined, alpha: undefined } },
      { path: 'input', title: "Teenage Interface: Components / Input", component: InputPage, data: { title: 'Components / Input', order: 9, soon: undefined, alpha: undefined } },
      { path: 'progress', title: "Teenage Interface: Components / Progress", component: ProgressPage, data: { title: 'Components / Progress', order: 10, soon: undefined, alpha: undefined } },
      { path: 'radio', title: "Teenage Interface: Components / Radio", component: RadioPage, data: { title: 'Components / Radio', order: 11, soon: undefined, alpha: undefined } },
      { path: 'select', title: "Teenage Interface: Components / Select", component: SelectPage, data: { title: 'Components / Select', order: 12, soon: undefined, alpha: undefined } },
      { path: 'separator', title: "Teenage Interface: Components / Separator", component: SeparatorPage, data: { title: 'Components / Separator', order: 13, soon: undefined, alpha: undefined } },
      { path: 'switch', title: "Teenage Interface: Components / Switch", component: SwitchPage, data: { title: 'Components / Switch', order: 14, soon: undefined, alpha: undefined } },
      { path: 'tabs', title: "Teenage Interface: Components / Tabs", component: TabsPage, data: { title: 'Components / Tabs', order: 15, soon: undefined, alpha: undefined } }
    ]
  },

  { path: 'documentation', component: ComponentsPage, children: [
      { path: '', redirectTo: 'installation', pathMatch: 'full' },
      { path: 'installation', title: 'Teenage Interface: Getting Started / Installation', component: InstallationPage, data: { title: 'Getting Started / Installation', order: 1, soon: undefined, alpha: undefined } },
      { path: 'darkmode', title: 'Teenage Interface: Getting Started / Dark Mode',  component: DarkmodePage, data: { title: 'Getting Started / Dark Mode', order: 2, soon: undefined, alpha: undefined } },
      { path: 'about', title: 'Teenage Interface: Getting Started / About & Credits',  component: AboutPage, data: { title: 'Getting Started / About & Credits', order: 3, soon: undefined, alpha: undefined } },
      { path: 'cli', title: 'Teenage Interface: Getting Started / CLI',  component: CliPage, data: { title: 'Getting Started / CLI', order: 4, soon: undefined, alpha: undefined } },
      { path: 'figma', title: 'Teenage Interface: Getting Started / Figma',  canActivate: [RedirectGuard], component: RedirectPage, data: { title: 'Getting Started / Figma', order: 5, soon: undefined, alpha: undefined, external: true, externalUrl: 'https://www.figma.com/community/file/1460950311029212213/teenage-interface-design-system' } },
      { path: 'storybook', title: 'Teenage Interface: Getting Started / Storybook',  canActivate: [RedirectGuard], component: RedirectPage, data: { title: 'Getting Started / Storybook', order: 6, soon: undefined, alpha: undefined, external: true, externalUrl: 'https://www.youtube.com/' } }
    ]
  },

  { path: '**', pathMatch: 'full', title: 'Teenage Interface: Not Found', component: NotfoundPage }
];
