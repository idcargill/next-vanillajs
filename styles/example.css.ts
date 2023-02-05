import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  boxSizing: 'border-box',
});

export const PageContainer = style({ 
  border: '5px solid green', 
  height: '300px', 
  width: '300px', 
});