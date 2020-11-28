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
      color: theme.colors.gray,
      maxHeight: 'none',
      minWidth: '350px',
      fontSize: '20px',
    },
    'input,button,submit': {
      border: 'none',
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
      fontSize: '4rem',
      margin: '10px 0px',
      textAlign: 'center',
      zIndex: '1',
      [theme.breakpoints.ltMd]: {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3rem',
      margin: '10px 0px',
      textAlign: 'center',
      [theme.breakpoints.ltMd]: {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      margin: '10px 0px',
    },
    p: {
      maxWidth: '700px',
      textAlign: 'justify',
      marginTop: '10px',
      marginBottom: '10px',
    },
    '.rec.rec-slider-container': {
      margin: '0px',
    },
  },
  zoom: {
    animation: '$zoom 1s ease-out 0s',
  },
  '@keyframes zoom': {
    from: {transform: 'scale(0.25)'},
    to: {transform: 'scale(1.0)'},
  },
  scale: {
    transform: 'scale(1.1)',
  },
  expand: {
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      extend: 'scale',
    },
  },
  bright: {
    '&:hover': {
      filter: 'brightness(110%)',
    },
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
  },
  gridContainerMd: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    [theme.breakpoints.ltMd]: {
      flexDirection: 'column',
    },
  },
  gridContainerCol: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  centerLtMd: {
    [theme.breakpoints.ltMd]: {
      textAlign: 'center',
    },
  },
  flex: {
    display: 'flex',
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
    [theme.breakpoints.ltMd]: {
      margin: 'auto',
    },
  },
  auto: {
    margin: 'auto',
  },
  autoY: {
    margin: 'auto 0px',
    [theme.breakpoints.ltMd]: {
      margin: 'auto',
    },
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
  carousel: {
    margin: '10px auto 60px',
  },
  carouselIndicators: {
    position: 'fixed',
    bottom: '0px',
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'center',
    padding: '10px 0px',
    backgroundColor: 'white',
  },
  carouselIndicator: {
    margin: '0px 8px',
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
    fontSize: '1rem',
  },
  typewriterWrapper: {
    [theme.breakpoints.ltMd]: {
      height: '2.5em',
      maxWidth: 'fit-content',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  shadow: {
    boxShadow: '10px -5px 8px 1px #888888',
    borderRadius: '50%',
  },
  projectPicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
  },
  m1: {
    margin: '10px 10px 10px 0px',
  },
  my1: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  mt5: {
    marginTop: '50px',
  },
  p1: {
    padding: '10px',
  },
  hideLtMd: {
    [theme.breakpoints.ltMd]: {
      display: 'none',
    },
  },
  fitContent: {
    maxWidth: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
