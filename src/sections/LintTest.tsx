import React from 'react';

/*
LINT TESTING
Test formatting here for linter settings.

.eslintrc.js
.prettierrc.js
.vscode/settings.json
.editorConfig
*/

// short array
const arr = ['a', 'b', 'c'];

// long array
const longArr = [
  "kitten",
  "fish",
  "dragon",
  "bat",
  "sharky",
  "magic", 
  "lion",
  "long word and stuff",
  "lasagna"
];

// object one line
const obj = { name: 'hi', job: 'pizza guy'};

// Multi line
const largObj = {
  name: 'jo',
  pet: 'kitten',
  job: 'big broom pusher',
  car: 'ugly one',
  snacks: 'yes have some',
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
