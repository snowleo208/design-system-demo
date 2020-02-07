import React from 'react';
import Title from './';

export default {
  component: Title,
  title: 'Elements/Title'
};

export const Primary = () => (
  <Title type="h1" theme="primary">
    Title
  </Title>
);
export const Secondary = () => (
  <Title type="h2" theme="secondary">
    Title
  </Title>
);

export const DifferentSize = () => (
  <>
    <Title type="h2" theme="secondary">
      Title 2
    </Title>
    <Title type="h2" size={4} theme="secondary">
      Title 4
    </Title>
  </>
);
