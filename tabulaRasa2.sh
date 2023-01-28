#!/bin/bash

echo '*********************************************************'
touch garbage.txt
touch src/pages/index2.tsx
cat src/pages/index.tsx | grep -v -i 'HomePageExamples' >> src/pages/index2.tsx

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
    rm garbage.txt
    rm -- "$0"
    echo  'Welcome to the world'
    ;;
  n|N|no|NO)
    echo everything stays
    ;;
  *)
    esac