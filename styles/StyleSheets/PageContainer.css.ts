import { style } from '@vanilla-extract/css';

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

const listContainer = style({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
});

const listStyle = style({
  listStyle: 'url(/heart.svg)',
  textAlign: 'left',
  fontSize: '24px',
});

const ProjectContainer = style({
  margin: 'auto',
  padding: '5px',
  border: '1px solid green',
  backgroundColor: '#4dbd4d',
  textAlign: 'center',
});

export { PageContainer, ProjectContainer, listStyle, listContainer };
