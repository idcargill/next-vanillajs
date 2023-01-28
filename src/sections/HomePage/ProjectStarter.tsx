import React from 'react';

import {
  ProjectContainer,
  listContainer,
  listStyle,
  tabulaRasa,
} from '../../../styles';

const ProjectStarter = () => (
  <>
    <div className={ProjectContainer}>
      <h1>Project Starter</h1>
      <div className={listContainer}>
        <ul className={listStyle}>
          <li>nextjs 13</li>
          <li>typescript</li>
          <li>vanilla extract CSS</li>
          <li>jest</li>
        </ul>
      </div>
      <div className={tabulaRasa}>
        <p>To clear example files run:</p>
        <p
          style={{ backgroundColor: '#0b0909', color: 'white', padding: '5px' }}
        >
          yarn tabulaRasa
        </p>
      </div>
    </div>
  </>
);

export default ProjectStarter;
