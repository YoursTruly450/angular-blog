#!/usr/bin/env sh

set -e

npm run build

cd dist

cd angular-blog

git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:YoursTruly450/angular-blog.git main:gh-pages

cd -