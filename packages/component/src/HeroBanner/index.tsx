/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { themeList } from '@ds-starter/theme';
import { Image, Title, Button } from '@ds-starter/element';

interface HeroBanner extends React.AnchorHTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  btn1Text: string;
  btn2Text: string;
  btn1Action?: Function | string;
  btn2Action?: Function | string;
}

const HeroBanner: React.SFC<HeroBanner> = props => {
  const { children, title, subtitle, btn1Text, btn2Text, ...rest } = props;
  const themeData: typeof themeList = useTheme();

  const subTextStyles = {
    color: themeData.colors.light.greyDark
  };

  const outerStyles = {
    fontFamily: 'inherit',
    display: 'flex',
    flexFlow: 'column wrap',
    h1: {
      margin: `0 0 ${themeData.spacing[4]} 0`
    },
    p: {
      margin: `0 0 56px 0`
    },
    padding: `${themeData.spacing[2]} ${themeData.spacing[2]}`,
    '@media only screen and (min-width: 768px)': {
      flexFlow: 'row wrap'
    }
  };

  const bannerTextGridStyles = {
    padding: '30px 15px',
    '@media only screen and (min-width: 768px)': {
      width: `50%`,
      padding: '30px'
    }
  };

  const btnGridStyles = {
    display: 'flex',
    flexFlow: 'row wrap',
    a: {
      margin: `0 ${themeData.spacing[3]} ${themeData.spacing[3]} 0`,
      '@media only screen and (min-width: 768px)': {
        margin: `0 ${themeData.spacing[3]} 0 0`
      }
    }
  };

  return (
    <section css={outerStyles} {...rest}>
      <Image src="https://dummyimage.com/540x440/ccc/fff" alt="Hero Image" />
      <div css={bannerTextGridStyles}>
        <Title type="h1" size={2} theme="primary">
          {title}
        </Title>
        <p css={subTextStyles}>{subtitle}</p>
        <div css={btnGridStyles}>
          <Button variant="primary">{btn1Text}</Button>
          <Button variant="secondary">{btn2Text}</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
