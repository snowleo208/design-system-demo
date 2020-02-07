import React from 'react';
import { render } from '@testing-library/react';
import Title from './';
import { ThemeProvider } from 'emotion-theming';
import { matchers } from 'jest-emotion';
import { themeList } from '@ds-starter/theme';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);

test('shows custom text', () => {
  const testMessage = 'Test Message';
  const { queryByText, getByText } = render(
    <ThemeProvider theme={themeList}>
      <Title type="h1" theme="primary">
        {testMessage}
      </Title>
    </ThemeProvider>
  );

  expect(queryByText(testMessage)).not.toBeUndefined();

  expect(getByText(testMessage)).toHaveStyleRule(
    'color',
    themeList.colors.light.black
  );
});

test('shows secondary Title', () => {
  const testMessage = 'Test Message';
  const { getByText } = render(
    <ThemeProvider theme={themeList}>
      <Title type="h1" theme="secondary">
        {testMessage}
      </Title>
    </ThemeProvider>
  );

  expect(getByText(testMessage)).toHaveStyleRule(
    'color',
    themeList.colors.light.greyDark
  );
});

test('shows Title in different size', () => {
  const testMessage = 'Test Message';
  const { getByText } = render(
    <ThemeProvider theme={themeList}>
      <Title type="h1" size={2} theme="secondary">
        {testMessage}
      </Title>
    </ThemeProvider>
  );

  expect(getByText(testMessage)).toHaveStyleRule(
    'font-size',
    themeList.title[2]
  );
});
