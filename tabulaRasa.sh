#!/bin/bash

echo '*********************************************************'
# touch src/pages/index2.tsx
# cat src/pages/index.tsx | grep -v -i 'HomePageExamples' >> src/pages/index2.tsx

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
    cp -r src src2
    cp -r styles styles2
    rm -r src2/sections
    rm -r styles2/StyleSheets/*
    rm styles2/index.ts
    touch styles2/index.ts
    echo "// import { style, keyframes } from '@vanilla-extract/css'" >> styles2/index.ts
    # mv examples.env.local .env.local
    echo  'Welcome to the world'
    ;;
  n|N|no|NO)
    echo everything stays
    ;;
  *)
    esac