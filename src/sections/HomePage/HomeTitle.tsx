import React from 'react';
import { Title, centerText } from '../../../styles/StyleSheets/appStyles.css';

type titleProps = {
  title: string;
};

const titleClass = `${Title} ${centerText}`;

const HomeTitle = ({ title }: titleProps) => (
  <h1 className={titleClass}>{title}</h1>
);


export default HomeTitle;
