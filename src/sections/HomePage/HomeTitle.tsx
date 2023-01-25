import React from 'react';
import { Title, centerText } from '../../../styles/appStyles.css';

type titleProps = {
  title: string;
}

var x = 'fish';

const titleClass = `${Title} ${centerText}`;

const HomeTitle = ({ title }: titleProps): JSX.Element => (
  // <h1 className={`${Title} ${centerText}`}>{title}</h1>
  <h1 className={titleClass}>{title}</h1>
);

export default HomeTitle;
