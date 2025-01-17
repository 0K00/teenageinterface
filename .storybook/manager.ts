import { addons } from '@storybook/manager-api';
import theme from './theme';

const link = document.createElement('link');
link.rel = 'shortcut icon';
link.href = './public/favicon.svg';
document.head.appendChild(link);

addons.setConfig({
  theme: theme,
});
