---
emoji: 🔮
title: 블로그 빌드 및 배포 자동화 - 2
date: '2022-06-20 00:00:00'
author: 주녘씨
tags: 블로그 React 빌드 배포 자동화
categories: featured
---
## **GitHub Action을 활용한 커밋 후 자동 배포**

GitHub Action은 main.yml에서 설정가능하다.

yml은 아래 코드로 이루어지는데

각 키워드마다 의미는 다음과 같다.

    name: blog deploy

    on:
    push:
        branches: [master]

    jobs:
    deploy:
        name: deploy
        runs-on: ubuntu-latest

        steps:
        - name: checkout master
            uses: actions/checkout@master

        - name: npm install
            run: actions/

        - name: gatsby build
            run: yarn build
            env:
            GH_API_KEY: ${{ secrets.API_KEY }}

            - name: set domain
            run: cp CNAME public/

        - name: deploy
            uses: maxheld83/ghpages@v0.2.1
            env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
            GH_PAT: ${{ secrets.API_KEY }}
            BUILD_DIR: 'public/'



더 자세한 내용은 공식 문서를 참조하자

https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows


*배포 자동화 과정 및 개인 도메인 설정은 [다음 2편]()에 계속..*


```toc

```