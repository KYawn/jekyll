#!/bin/bash
# add changed files to commit
git add .
# commit the chages
git commit -m "commit automatically"
# Attention!! pull before push!!
git pull origin master
# push the local master branch to remote repo
git push origin master 
