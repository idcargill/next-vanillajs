#!/bin/bash

echo '*********************************************************'
touch garbage.txt

echo DELETE WARNING!
echo Running this command will delete the following exmple directories

echo - src/sections
echo - src/styles

echo ''

echo Would you like to start fresh?  y/n?
read -p '--> ' userInput

case $userInput in
  y|Y|yes|Yes)
    echo Deleting files
    rm garbage.txt
    echo  'Welcome to the world'
    ;;
  n|N|no|NO)
    echo everything stays
    ;;
  *)
    esac