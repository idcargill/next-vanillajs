import React from 'react';

// array
const arr = ['a', 'b', 'c'];

// object
const obj = {
  name: 'hi',
  job: 'pizza guy',
};


// arrow function ()
export const ComponentExample1 = () => (
  <h1>Some Text</h1>
);

// arrow function with return
export const ComponentExample2 = () => {
  const text = "Component 2 arrow func";
  return (
    <p>{text}</p>
  );
};


// typescript react class
type exampleProps = {
  name: string;
}

export class ComponentExample3 extends React.Component<exampleProps> {
  name: string;

  constructor(props:exampleProps) {
    super(props);
    this.name = this.props.name;
  }

  render() {
    const name = this.props.name;
    return (
      <p>{name}</p>
    );
  }
}
