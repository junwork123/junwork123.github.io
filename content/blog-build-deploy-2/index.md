---
emoji: ๐ฎ
title: ๋ธ๋ก๊ทธ ๋น๋ ๋ฐ ๋ฐฐํฌ ์๋ํ - 2
date: '2022-06-23 00:00:00'
author: ์ฃผ๋์จ
tags: ๋ธ๋ก๊ทธ ๋น๋ ๋ฐฐํฌ ์๋ํ github-acition ci/cd
categories: ๋ธ๋ก๊ทธ-๋ฐ์ ๊ธฐ
---
## **์๋ ๋ฐฐํฌ ๊ถํ์ ์ป๊ธฐ ์ํ ํ ํฐ ์์ฑ**

๋จผ์  GitHub ๊ณ์ ์ [Developer settings](https://github.com/settings/apps) ๋ฉ๋ด์์ ํ ํฐ(Personal access tokens)์ ๋ง๋ค์ด์ผ ํ๋ค.

![๋ฉ๋ด ์ง์ ํ๋ฉด](setting.png)

<br/><br/>

`Generate new token` ๋ฒํผ์ ๋๋ฅด๊ฒ ๋๋ฉด,

์๋์ ๊ฐ์ ํ๋ฉด์ด ๋ํ๋์ง๋ง ์ด๋ ค์ธ ๊ฒ ํ๋์๋ค!

![๋ฉ๋ด ์ง์ ํ๋ฉด2](setting2.png)

- Note : ์ด ํ ํฐ์ ๋ชฉ์ (์ค๋ช)

- Expiration : ํ ํฐ์ ๋ง๋ฃ๊ธฐ๊ฐ(์ต์ 7์ผ / Custom - ๋๋์ง์  / No Expiration - ๋ฌด์ ํ)

- Select scopes : ์ด ํ ํฐ์ผ๋ก ํ  ์ ์๋ ํ๋๋ค(์ฐ๋ฆฌ๋ `repo`๋ง ์ฒดํฌํด๋ ๋๋ค.)

<br/><br/>

๊ทธ๋ฆฌ๊ณ  ๋์ ์ฐ๋ฆฌ๋ ๋ฐ๊ธ๋ฐ์ ํ ํฐ์ ํด๋น ํ๋ก์ ํธ์ ๋ฑ๋กํ๋ฌ ๊ฐ ๊ฒ์ด๋ค.

์คํฌ๋ฆฐ์ท์ ๋ฐ๋ผ ๋ฑ๋กํด๋ณด์

![๋ฉ๋ด ์ง์ ํ๋ฉด4](setting4.png)

![๋ฉ๋ด ์ง์ ํ๋ฉด5](setting5.png)

<br/><br/>

---

## **GitHub Action์์ yml ์คํฌ๋ฆฝํธ ์์ฑํ๊ธฐ**

<br/>

์ด์  ๋ฐฐํฌํ  `repogitory์ actions ๋ฉ๋ด`๋ก ๊ฐ๋ณด์.

![๋ฉ๋ด ์ง์ ํ๋ฉด3-0](setting3-0.png)

![๋ฉ๋ด ์ง์ ํ๋ฉด3](setting3.png)



์คํฌ๋ฆฐ์ท ์ฒ๋ผ `set up a workflow yourself` ๋ฉ๋ด๋ฅผ ๋๋ฅด๋ฉด

๋๋์ด ์ต์ข์ฅ์ ๋์ํ๊ฒ ๋๋ค. ~~ํ์๋ ์ด ๋ฉ๋ด ์ฐพ๋๋ฐ 10๋ถ์ด๋ ๊ฑธ๋ ธ๋ค~~

๊ฒฐ๋ก ์ ์ผ๋ก GitHub Action์ ํตํ ์๋ ๋ฐฐํฌ๋

yml ์คํฌ๋ฆฝํธ๋ฅผ `.github/workflows/` ์์น์ ์์ฑํด์ผ ํ๋ค.

> ๋ฐฐ์ธ๊ฒ ๋ ๋์ด๋? ๐ต

์ถ๊ฒ ์ง๋ง(~~์ซ๊ฒ ์ง๋ง~~) ์๊ฐ์ธ๋ก ๊ฐ๋จํ๋ ์กฐ๊ธ๋ง ๋ ์ฝ์ด๋ณด์.

(๋ฐ๋ก ์ ์ฉํ๊ณ  ์ถ๋ค๋ฉด ์ค๋ช์ ๊ฑด๋๋ฐ๊ณ  [์ค์  ๋ฐ์ ์ฝ๋](#code) ์์ฃผ๋ก ๋ณด์๋ ์ข๋ค)

์์๋ฅผ ํตํด ๊ฐ ํค์๋๋ง๋ค ์๋ฏธ๋ฅผ ๋น ๋ฅด๊ฒ ํ์ํ๊ณ  ์์ฉํ์.

```yml
    name: Blog Deployment # ์ด ์คํฌ๋ฆฝํธ์ ์ ๋ชฉ

    # ์ด๋ค ํ๋์ ํ ๋๋ง๋ค ์คํํ ์ง
    on: 
        # master, release/v*๋ผ๋ ์ด๋ฆ์ ๋ธ๋์น์ push๊ฐ ๋ฐ์ํ  ๋๋ง๋ค
        # ex) release/v0.1, release/v2.1.5
        push:
            branches: 
                - master
                - release/v*
        
        # gh-pages ๋ธ๋์น์ pull_request๊ฐ ๋ฐ์ํ  ๋๋ง๋ค
        pull_request:
            branches: 
                - gh-pages

        # cron ํํ์์ผ๋ก `UTC ๊ธฐ์ค ๋งค์ผ ์~๊ธ ์ค์ 2์์ ์คํ`
        schedule: 
            - cron: "0 0 2 ? * MON-FRI *"

        # ์ง์  "Run workflow"๋ฒํผ์ ๋๋ฅผ๋๋ง ์คํ
        workflow_dispatch: 

    # ์คํํ  ์์์ ์ ์
    jobs:
        # 'build'๋ผ๋ ์ด๋ฆ์ job์ (job์ด๋ฆ์ ๋ง๋๋ก ์ ์ด๋ ๋จ)
        # 'Checkout, Install, Build'๋ผ๋ ์ด๋ฆ์ ์์์
        # ์ฐ๋ถํฌ ์ต์ ๋ฒ์ ์์ ๋์์ํจ๋ค.
        # ๋์๋ด์ฉ์ 
        # [๋ธ๋์น ์ฒดํฌ์์ 
        #   > ํจํค์ง ์ค์น 
        #   > ๋น๋ 
        #   > ๋ฉ์์ง ์ถ๋ ฅ
        #   > ๋๋ฉ์ธ ๋ณต์ฌ
        #   > ๋ฐฐํฌ] ์์ผ๋ก ์งํ๋๋ค.

        deploy: 
            runs-on: ubuntu-latest

            name: Checkout, Install, Build

            # ๋ค์ ๋์์ ์์๋๋ก ์คํ
            steps:
                # 'uses' == ๋๊ตฐ๊ฐ ๋ฏธ๋ฆฌ ์ ์๋ workflow@version ์ฌ์ฉ
                # 'master' ๋ธ๋์น๋ฅผ ์ฒดํฌ์์()
                - name: Checkout branche
                  uses: actions/checkout@master
                
                # ํจํค์ง ์ค์น ๋์ 
                # [node ์ค์น 
                #   > ์์กด์ฑ ์บ์๊ฒ์ฌ 
                #   > (๋ณํ๊ฐ ์๋ค๋ฉด) npm์ค์น] ์์ผ๋ก ๋์
                - name: Use Node.js
                  uses: actions/setup-node@master
                  with:
                      node-version: 16.x

                - name: Cache node modules
                  uses: actions/cache@v2
                  id: cache
                  with:
                      path: node_modules
                      key: npm-packages-${{ hashFiles('**/package-lock.json') }}

                - name: Install Dependencies
                  if: steps.cache.outputs.cache-hit != 'true'
                  run: npm install

                # ๋น๋ ์คํ
                - name: Build
                  run: npm run build
                    
                # ๋๋ฉ์ธ ์ค์ ํ์ผ์ ๋น๋๊ฒฐ๊ณผ๋ฌผ์ ๋ณต์ฌ
                - name: copy Cname
                  run: cp CNAME public/ 

                # ํน์  ์ ์ ์ ๋ฐฐํฌ ์ก์์ ์ด์ฉํ์ฌ
                # ๋น๋ ๊ฒฐ๊ณผ๋ฌผ์ ๋ฐฐํฌ ๊ฒฝ๋ก์ ๋ณต์ฌํ๋ค.
                - name: Deploy changes
                  uses: peaceiris/actions-gh-pages@v3 
                  with:
                      github_token: ${{ secrets.GITHUB_TOKEN }}
                      publish_dir: ./public
                      publish_branch: gh-pages # default: gh-pages
```

<br/>

## ๋ฐ์๋ ์ค์  YML ์ฝ๋ <span id="code"></span> 

<br/>

```yml
name: Blog Deployment
on: 
    push:
        branches: 
            - master

jobs:
    deploy: 
        runs-on: ubuntu-latest
        name: Checkout, Install, Build
        steps:
            - name: Checkout branche
              uses: actions/checkout@master
            
            - name: Use Node.js
              uses: actions/setup-node@master
              with:
                  node-version: 16.x

            - name: Install Dependencies
              run: npm install --force

            - name: Build
              run: npm run build
                
            - name: copy Cname
              run: cp CNAME public/ 

            - name: Deploy changes
              uses: peaceiris/actions-gh-pages@v3
              with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./public
                  publish_branch: gh-pages
```

cache ์ต์์ ์ฌ์ฉํ์ง ์์์ ๋ ๋น๋&๋ฐฐํฌ ์๊ฐ : 5๋ถ

cache ์ต์์ ์ฌ์ฉํ์ ๋ ๋น๋&๋ฐฐํฌ ์๊ฐ : 2๋ถ

`์บ์์ต์์ ์ฑ๋ฅ์ ์์ฒญ๋ฌ๋ค!`

<br/><br/>

๋ง์ฝ ์๋์ ๊ฐ์ ์๋ฌ๊ฐ ๋ฐ์ํ๋ค๋ฉด

npm install `--force` ๋ช๋ น์ด๋ก ๊ฐ์  ์ค์น ์ต์์ ์ฃผ๋ฉด ๋ฌธ์ ์์ด ์งํ๋๋ค.

```YML
Run npm install
  npm ERR! code ERESOLVE
  npm ERR! ERESOLVE could not resolve
  npm ERR! 
  npm ERR! While resolving: gatsby-plugin-advanced-sitemap@2.0.0
...
```




<br/><br/>

๋ ์์ธํ ๋ด์ฉ์ ์๋๋ฅผ ์ฐธ์กฐํ์

> [๋ง์ ๋์์ด ๋ ๋ธ๋ก๊ทธ](https://dailyco.tech/share/gatsby-blog-auto-deploy/)

> [์นด์นด์ค์นํฐ์ GitHub Actions๋ฅผ ์ด๋ป๊ฒ ์ฌ์ฉํ๊ณ  ์์๊น?](https://fe-developers.kakaoent.com/2022/220106-github-actions/)

> [Actions์ ํํ์](https://docs.github.com/en/actions/learn-github-actions/expressions)

> [Actions์ ์ด๋ฒคํธ](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

> [cron ํํ์](cron.png) // ์ด๊ฑด ์ฌ๋ฌ๊ตฐ๋ฐ์ ์ฐ์ด๋ ์์๋๋ฉด ์ข์๊ฑฐ์ผ!


```toc

```