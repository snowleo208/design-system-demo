/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';

interface Image extends React.ImgHTMLAttributes<HTMLElement> {
  src: string;
}

const Image: React.SFC<Image> = props => {
  const { children, src, ...rest } = props;

  const styles = {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%'
  };

  return <img css={styles} alt={props.alt || ""} {...rest} src={src} />;
};

export default Image;
