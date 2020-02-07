import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

addDecorator(themeDecorator);

configure(
  require.context('../packages/', true, /\.stories\.(tsx|mdx)$/),
  module
);
