#!/bin/sh
rm -rfv ../angular-composite-component-gh-pages/*
cp -av app/. ../angular-composite-component-gh-pages/
git add -A
git commit -m "gh-pages"
git push origin gh-pages