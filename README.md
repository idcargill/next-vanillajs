## NEXT-js Project Starter 

A nextjs configured environement for starting new projects. 
After forking and installing the repo you can test and edit linter settings before running a script to reset the project. 

After setting up the project the environment will be set with the following configurations:

- [nextjs 13](https://nextjs.org/docs) w/ [rust compiler](https://nextjs.org/docs/advanced-features/compiler) (no babel)
- [React18](https://reactjs.org/blog/2022/03/29/react-v18.html) with [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- CSS with typescript using [vanilla extract](https://vanilla-extract.style/)
- Testing with [jest](https://jestjs.io/)
- Linting for React with typescript


### Start New Project

- fork this repo
- name it something cool

install dependencies:
```bash
yarn
```

To inspect the setup and test linting settings start the server
```bash
yarn dev
```
View examples on your local server
> localhost:3000

To test lint settings:
> src/sections/LintTest.tsx

To remove the custom examples run:

> yarn tabulaRasa

This will remove:

- src/sections
- src/styles/*
- reset src/pages/index.tsx
- ./tabulaRasa.sh

### Testing

> yarn test --watch


