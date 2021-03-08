import React from 'react';
import { render } from '@testing-library/react';
import Image from './';
import { ThemeProvider } from '@emotion/react';
import { matchers } from '@emotion/jest';
import { themeList } from '@ds-starter/theme';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);

test('shows custom text', () => {
  const testSrc = 'https://www.abc.com/123.jpg';
  const { container } = render(
    <ThemeProvider theme={themeList}>
      <Image src={testSrc} />
    </ThemeProvider>
  );

  expect(container.querySelector('img').src).not.toBeUndefined();
  expect(container.querySelector('img').src).toEqual(testSrc);
});

test('custom image styles', () => {
  const testSrc = 'https://www.abc.com/123.jpg';
  const { container } = render(
    <ThemeProvider theme={themeList}>
      <Image src={testSrc} />
    </ThemeProvider>
  );

  expect(container.querySelector('img')).toHaveStyleRule('max-width', '100%');
});
