npm run build
rm -rf dist-repo/out
mv out dist-repo
cd dist-repo
git add .
git commit -m "prod build"
git push
