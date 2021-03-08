import React from 'react';
import { render } from '@testing-library/react';
import Button from './';
import { ThemeProvider } from '@emotion/react';
import { matchers } from '@emotion/jest';
import { themeList } from '@ds-starter/theme';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);

test('shows custom text', () => {
  const testMessage = 'Test Message';
  const { queryByText } = render(
    <ThemeProvider theme={themeList}>
      <Button variant="primary">{testMessage}</Button>
    </ThemeProvider>
  );

  expect(queryByText(testMessage)).not.toBeUndefined();
});

test('shows primary button', () => {
  const testMessage = 'Test Message';
  const { getByText } = render(
    <ThemeProvider theme={themeList}>
      <Button variant="primary">{testMessage}</Button>
    </ThemeProvider>
  );

  expect(getByText(testMessage)).toHaveStyleRule(
    'background-color',
    themeList.colors.accent.default
  );

  expect(getByText(testMessage)).toHaveStyleRule('color', 'white');
});

test('shows secondary button', () => {
  const testMessage = 'Test Message';
  const { getByText } = render(
    <ThemeProvider theme={themeList}>
      <Button variant="secondary">{testMessage}</Button>
    </ThemeProvider>
  );

  expect(getByText(testMessage)).not.toHaveStyleRule(
    'background-color',
    themeList.colors.accent.default
  );
  expect(getByText(testMessage)).toHaveStyleRule(
    'color',
    themeList.colors.accent.default
  );
});
