#!/bin/bash

commit=$*

echo $commit
git add .
git commit -m "$commit"
git push
