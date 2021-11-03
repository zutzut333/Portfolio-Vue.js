#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:LAPTOP-Q7K5V2TM/jean-bosch.git master:gh-pages

cd -