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
    # cp -r src src
    # cp -r styles styles2

    cat src/pages/index.tsx | grep -v -i 'HomePageExamples' > src/pages/index.tsx
    rm -r src/sections/*
    rm -r styles/StyleSheets/*
    rm styles/index.ts
    touch styles/index.ts
    echo "// import { style, keyframes } from '@vanilla-extract/css'" >> styles/index.ts
    mv examples.env.local .env.local
    rm $0
    echo  'Welcome to the world'
    tree src
    ;;
  n|N|no|NO)
    echo everything stays
    ;;
  *)
    esac