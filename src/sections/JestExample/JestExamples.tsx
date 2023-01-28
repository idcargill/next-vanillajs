import React from 'react';
import { getName } from './examples';

const obj = {
  name: 'Frank',
};

const JestExamples = () => (
  <>
    <h2>Jest Examples</h2>
    <p>run yarn jest</p>
    <p>{getName(obj)}</p>
  </>
);



export default JestExamples;
