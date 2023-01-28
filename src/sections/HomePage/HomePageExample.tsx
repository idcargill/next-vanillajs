import React from 'react';

import HomeTitle from './HomeTitle';
import ProjectStarter from './ProjectStarter';
import JestExamples from '../JestExample/JestExamples';
import RouterExample from './RouterExample';

import { SpinnerCSS, centerText } from 'styles';

const Spinner = () => (
  <div className={`${SpinnerCSS} ${centerText}`}>
    <p>Hover here</p>
  </div>
);

const HomePageExamples = () => (
  <>
    <HomeTitle title="Home Page Example" />
    <ProjectStarter />
    <Spinner />
    <RouterExample className={centerText} />
    <JestExamples />
  </>
);

export default HomePageExamples;
