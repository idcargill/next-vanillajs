import { style, keyframes } from '@vanilla-extract/css';

const spinnerRotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': {
    transform: 'rotate(360deg)',
    backgroundImage: 'linear-gradient(-180deg, orange, yellow)',
  },
});

export const SpinnerCSS = style({
  marginTop: '10px',
  textAlign: 'center',
  width: '200px',
  height: '200px',
  backgroundImage: 'linear-gradient(180deg, orange, yellow)',
  borderRadius: '100%',
  overflow: 'hidden',
  cursor: 'pointer',
  ':hover': {
    animationName: spinnerRotate,
    animationDuration: '3s',
    animationIterationCount: 1,
  },
});
