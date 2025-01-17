import { create } from '@storybook/theming';
import logo from './public/logotype_small_white.svg';

export default create({
  base: 'dark',
  brandTitle: 'Teenage Interface - Storybook',
  brandImage: logo,
  brandTarget: '_self',
});
