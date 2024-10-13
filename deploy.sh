# 发生错误时终止
set -e

# 构建 生成静态文件
npm run generate

# 进入构建文件夹
cd .output/public

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

# 初始化 git 仓库并提交所有文件
git init
git add -A
git commit -m "Deploy to GitHub Pages"


# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wytgm/Amuse-Blog.git main:gh-pages

cd -
