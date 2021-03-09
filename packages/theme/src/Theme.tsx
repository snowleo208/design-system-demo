const themes = {
  title: [0, 56, 44, 32, 26, 20, 18],
  lineHeight: {
    title: 1.25,
    text: 1.37
  },
  colors: {
    light: {
      black: '#373F41',
      greyDark: '#757575',
      grey: '#C3CBCD',
      divider: '#E2E5E6',
      greyLightest: '#F4F5F4',
      white: '#FFFFFF'
    },
    accent: {
      default: '#3C64B1',
      dark: '#1E4693',
      light: '#5A82CF'
    },
    error: '#FB4E4E'
  },
  ease: [200, 400, 600],
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 40]
};

export type Theme = typeof themes;

export default themes;
