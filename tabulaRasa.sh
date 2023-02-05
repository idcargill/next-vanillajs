#!/bin/bash

echo '*********************************************************'

echo DELETE WARNING!
echo Running this file will reset the following exmple files and directories
echo ''
echo - src/pages/index.tsx
echo - src/sections
echo - src/styles
echo ''

echo Would you like to start fresh?  y/n?
read -p '--> ' userInput

case $userInput in
  y|Y|yes|Yes)
    echo Deleting files

    # reset index.tsx and remove example files
    cp src/pages/index.tsx indexCopy.tsx
    cat indexCopy.tsx | grep -v -i 'HomePageExamples' > src/pages/index.tsx
    rm indexCopy.tsx
    rm -r src/sections/*
    rm -r styles/StyleSheets/*
    rm styles/index.ts
    
    # reset style sheets
    rm styles/index.css.ts
    mv styles/example.css.ts styles/index.css.ts
    
    # set .env.local
    mv examples.env.local .env.local
    
    # remove tabulaRasa (self)
    rm $0
    echo  'Welcome to the world'
    tree src
    
    echo ''
    echo "run 'yarn dev' to start server"
    ;;
  n|N|no|NO)
    echo everything stays
    ;;
  *)
    esac