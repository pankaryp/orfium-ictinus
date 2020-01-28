// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
import { withInfo } from '@storybook/addon-info';
// Add prop tables to components (based on component type interfaces)
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import ThemeProvider from 'src/components/ThemeProvider';
import defaultTheme from 'src/theme/globals';
import { addReadme } from 'storybook-readme';

const viewPorts = [
  {
    name: 'Laptop Large',
    styles: {
      width: '1440px',
      height: '1073px',
    },
    type: 'desktop',
  },
  {
    name: 'Laptop Small',
    styles: {
      width: '1200px',
      height: '859px',
    },
    type: 'desktop',
  },

  {
    name: 'Tablet',
    styles: {
      width: '750px',
      height: '859px',
    },
    type: 'tablet',
  },
];

// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
// Add prop tables to components (based on component type interfaces)
addDecorator(withInfo);

// wrap all components with theme provider by default
addDecorator(storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>);
addParameters({
  viewport: {
    viewports: viewPorts,
    defaultViewport: 'someDefault',
  },
  options: { showPanel: true },
});
addDecorator(addReadme);