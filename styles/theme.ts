import {makeStyles} from '@material-ui/styles';

// Screen breakpoint sizes used for media queries
const smMin = '600px';
const mdMin = '960px';
const lgMin = '1280px';
const xlMin = '1920px';
const xsMax = '599px';
const smMax = '959px';
const mdMax = '1279px';
const lgMax = '1919px';

export const theme = {
  /**
   * Used to do media queries within JSS syle objects.
   *
   * e.g.
   * makeStyles(theme = > ({
   *   [theme.breakpoints.sm]: {
   *     flexDirection: 'column',
   *   }
   * }));
   *
   */
  breakpoints: {
    xs: `@media screen and (max-width: ${xsMax})`,
    sm: `@media screen and (min-width: ${smMin}) and (max-width: ${smMax})`,
    md: `@media screen and (min-width: ${mdMin}) and (max-width: ${mdMax})`,
    lg: `@media screen and (min-width: ${lgMin}) and (max-width: ${lgMax})`,
    xl: `@media screen and (min-width: ${xlMin})`,
    ltSm: `@media screen and (max-width: ${xsMax})`,
    ltMd: `@media screen and (max-width: ${smMax})`,
    ltLg: `@media screen and (max-width: ${mdMax})`,
    ltXl: `@media screen and (max-width: ${lgMax})`,
    gtXs: `@media screen and (max-width: ${smMin})`,
    gtSm: `@media screen and (max-width: ${mdMin})`,
    gtMd: `@media screen and (max-width: ${lgMin})`,
    gtLg: `@media screen and (max-width: ${xlMin})`,
  },
  colors: {
    gray: '#343a40',
    white: '#ffffff',
    blue: '#0070f3',
  },
};

export type ThemeType = typeof theme;

// Global styles that can be used from any component
export const useGlobalStyles = makeStyles((theme: ThemeType) => ({
  '@global': {
    'html,body': {
      padding: '0px',
      margin: '0px',
      fontFamily: 'Play, sans-serif',
      fontSize: '18px',
      color: theme.colors.gray,
      maxHeight: 'none',
      minWidth: '350px',
    },
    '*': {
      boxSizing: 'border-box',
      '&:focus': {
        border: 'none',
        outline: 'none',
      },
    },
    a: {
      color: theme.colors.blue,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    img: {
      maxWidth: '100%',
      display: 'block',
    },
    h1: {
      fontSize: '4em',
      margin: '10px 0px',
      [theme.breakpoints.ltMd]: {
        fontSize: '3em',
      },
    },
    h2: {
      fontSize: '3em',
    },
    h3: {
      fontSize: '2.5em',
    },
    p: {
      maxWidth: '600px',
      textAlign: 'justify',
    },
  },
  fromAbove: {
    animation: '$slideInFromAbove 1s ease-out 0s',
  },
  fromBelow: {
    animation: '$slideInFromBelow 1s ease-out 0s',
  },
  '@keyframes slideInFromAbove': {
    from: {transform: 'translateY(-100%)'},
    to: {transform: 'translateY(0)'},
  },
  '@keyframes slideInFromBelow': {
    from: {transform: 'translateY(200%)'},
    to: {transform: 'translateY(0)'},
  },
  scale: {
    transform: 'scale(1.1)',
  },
  expand: {
    transition: 'all 0.2s ease-in-out',
  },
  'expand:hover': {
    extend: 'scale',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
  },
  gridContainerCol: {
    extend: 'gridContainer',
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceAround: {
    justifyContent: 'space-evenly',
  },
  navbar: {
    backgroundColor: '#343a40',
    minWidth: '350px',
    padding: '10px',
    [theme.breakpoints.ltMd]: {
      flexDirection: 'column',
    },
  },
  gridItem: {
    margin: 'auto',
  },
  textCenter: {
    textAlign: 'center',
  },
  navBar: {
    backgroundColor: theme.colors.gray,
    minWidth: '350px',
    padding: '10px',
    [theme.breakpoints.ltMd]: {
      flexDirection: 'column',
    },
  },
  navTitle: {
    extend: 'textCenter',
    color: '#f1f2f4',
    alignContent: 'center',
    justifyContent: 'center',
    margin: '0px 10px',
  },
  navIcon: {
    borderRadius: '50%',
    height: '65px',
    width: '65px',
  },
  carouselIcon: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    width: '3em',
    height: '3em',
    WebkitTransitionProperty: 'width, height',
    WebkitTransitionDuration: '1s',
    transitionProperty: 'width, height',
    transitionDuration: '1s',
    '&:hover': {
      height: '4em',
      width: '4em',
    },
  },
  carouselIconPrev: {
    extend: 'carouselIcon',
    left: 0,
  },
  carouselIconNext: {
    extend: 'carouselIcon',
    right: 0,
  },
  page: {
    maxWidth: '600px',
  },
  carousel: {
    margin: '10px auto 30px',
  },
  carouselIndicators: {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'center',
  },
  carouselIndicator: {
    margin: '0px 5px',
  },
  active: {
    extend: 'scale',
    fontWeight: 'bold',
  },
  btn: {
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    backgroundColor: theme.colors.gray,
    color: theme.colors.white,
    border: '1px solid transparent',
    borderRadius: '24px',
    padding: '6px 12px',
  },
  typewriterWrapper: {
    [theme.breakpoints.ltMd]: {
      height: '2.5em',
    },
  },
}));
