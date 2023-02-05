import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  boxSizing: 'border-box',
  fontSize: 16,
});

export const PageContainer = style({ 
  border: '5px solid green',
  height: '95vh', 
  margin: 8,
});