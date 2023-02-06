import React from 'react';

import HomeTitle from '../HomeTitle';

describe('Home Title', () => {
  it('should contain props text', () => {

    const PageTest = (): JSX.Element => (
          <HomeTitle title='Hello'/>
    );

  expect(PageTest()).toHaveTextContent('Hello');

  });
});