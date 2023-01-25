import React from 'react';

type titleProps = {
  title: string;
}

const HomeTitle = ({title}:titleProps): JSX.Element => (
  <h1>{title}</h1>
);

export default HomeTitle;
