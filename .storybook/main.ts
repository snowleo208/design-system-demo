module.exports = {
    stories: ['../packages/**/*.stories.@(tsx|js)'],
    addons: [
      '@storybook/addon-a11y',
        {
        name: '@storybook/addon-docs',
        options: { configureJSX: true },
      },
    ],
  };