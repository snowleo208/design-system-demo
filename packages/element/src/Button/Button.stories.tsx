import React from 'react';
import Button from './';

export default {
  component: Button,
  title: 'Elements/Button'
};

export const Primary = () => <Button variant="primary">Primary button</Button>;
export const Secondary = () => (
  <Button variant="secondary">Secondary button</Button>
);
export const WithLink = () => (
  <Button variant="secondary" href="https://www.google.com">
    Go to Google
  </Button>
);
