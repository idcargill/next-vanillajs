import { style, keyframes } from '@vanilla-extract/css';

const PageContainer = style({
  margin: 'auto',
  padding: '15px',
  border: '2px solid red',
  borderRadius: '5px',
  minHeight: '100vh',
  backgroundColor: '#a6f382',
  '@media': {
    'screen and (min-width: 760px)': {
      backgroundColor: '#dd9999',
    },
    'screen and (min-width: 1000px)': {
      backgroundColor: 'salmon',
    },
  },
});

const spinnerRotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const SpinnerCSS = style({
  width: '200px',
  height: '200px',
  backgroundColor: 'orange',
  overflow: 'hidden',
  cursor: 'pointer',
  ':hover': {
    animationName: spinnerRotate,
    animationDuration: '3s',
    animationIterationCount: 1,
  },
});

export { PageContainer, SpinnerCSS };
