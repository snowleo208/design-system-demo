const themes = {
  title: ['0', '3.2rem', '2.75rem', '2rem', '1rem', '0.8rem', '0.7rem'],
  lineHeight: {
    title: 1.25,
    text: 1.37
  },
  colors: {
    default: '#3C64B1',
    primary: 'rgb(60,100,177)',
    primaryLight: 'rgba(60,100,177, 0.06)',
    lightBlack: '#373F41',
    greyDark: '#737B7D',
    lightGrey: 'rgba(60, 100, 177, 0.06)'
  },
  ease: [200, 400, 600],
  spacing: ['0', '0.5rem', '1rem', '1.5rem', '2rem', '3rem', '4rem', '5rem']
};

export type Theme = typeof themes;

export default themes;
