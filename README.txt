//If adding something to website
git init
git remote add origin https:// gitlab.com/unc-app-lab/clone.git
git pull
git add .
git commit -m "git message name"
git push -u origin master

//If downloading the entire project
get fetch --all
git reset --hard origin/master
git status
git log