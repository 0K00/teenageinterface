/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:37:58
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:12:07
 */
import type { Preview } from "@storybook/angular";
import '!style-loader!css-loader!../src/styles.scss';

import { withThemeByDataAttribute, withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'configure',
        includeName: true,
        order: [
          'Getting Started',
          [
            'Installation',
            'Dark Mode',
            'CLI',
            'About'
          ],
          'Components'
        ]
      }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      values: [],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
          // nameOfTheme: 'dataAttributeForTheme',
          light: 'light',
          dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode'
    }),
    withThemeByClassName({
      themes: {
        light: "bg-neutral-50",
        dark: "bg-neutral-950"
      },
      defaultTheme: "light"
    })
  ]
};

export default preview;
