/** @jsx jsx */

import React from 'react';
import { jsx, css, useTheme } from '@emotion/react';
import { Theme } from '@ds-starter/theme';

interface Button extends React.AnchorHTMLAttributes<HTMLElement> {
  variant: 'primary' | 'secondary';
}

const Button: React.SFC<Button> = props => {
  const { children, variant, ...rest } = props;
  const themeData = useTheme() as Theme;
  const isPrimary = variant === 'primary';

  const styles = {
    display: 'inline-block',
    fontFamily: 'inherit',
    fontSize: '0.9rem',
    backgroundColor: isPrimary ? themeData.colors.accent.default : null,
    color: isPrimary ? 'white' : themeData.colors.accent.default,
    border: isPrimary
      ? 'solid 1px transparent'
      : `solid 1px ${themeData.colors.accent.default}`,
    padding: `${themeData.spacing[1]}px ${themeData.spacing[2]}px`,
    textDecoration: 'none',
    transition: `ease ${themeData.ease[1]}ms`,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: isPrimary ? 'white' : themeData.colors.accent.default,
      color: isPrimary ? themeData.colors.accent.default : 'white',
      border: isPrimary
        ? `solid 1px ${themeData.colors.accent.default}`
        : 'solid 1px transparent'
    }
  };

  return (
    <a css={styles} {...rest}>
      {children}
    </a>
  );
};

export default Button;
