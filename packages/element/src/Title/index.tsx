/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Theme } from '@ds-starter/theme';

interface Title extends React.HTMLAttributes<HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  theme: 'primary' | 'secondary';
}

const Title = (props: Title) => {
  const { children, type, size, theme, ...rest } = props;
  const themeData: Theme = useTheme();

  const styles = {
    fontFamily: 'inherit',
    fontSize: size
      ? themeData.title[size]
      : themeData.title[type.replace('h', '')],
    color:
      theme === 'primary'
        ? themeData.colors.light.black
        : themeData.colors.light.greyDark,
    lineHeight: themeData.lineHeight.title,
    margin: 0
  };

  return jsx(
    props.type || 'h1',
    {
      css: styles,
      ...rest
    },
    children
  );
};

export default Title;
