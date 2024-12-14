/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:37:58
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 20:42:48
 */
import type { Preview } from "@storybook/angular";
import '!style-loader!css-loader!../src/styles.scss';

import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByDataAttribute({
      themes: {
          // nameOfTheme: 'dataAttributeForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode'
  })]
};

export default preview;
