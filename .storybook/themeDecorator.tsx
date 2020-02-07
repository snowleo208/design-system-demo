import React from 'react';
import themes from '../packages/theme/src/Theme';
import { ThemeProvider } from 'emotion-theming';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={themes}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
