---
emoji: 🔮
title: Let’s Go Docker(심화편) - 변경사항을 Docker로 자동 배포하기
date: '2022-11-16 00:00:00'
author: 주녁
tags: 도커 Docker IntelliJ SpringBoot Docker VM Container 도커
categories: infra
---

지적과 댓글은 언제나 환영합니다!

<br/>

# 변경사항을 Docker로 자동 배포하기

변경사항을 감지하고 배포하려면

CI/CD 파이프라인 구축을 먼저 알아야한다.

<br>

CI/CD 파이프라인을 구축하는 방법은 

버전 관리 플랫폼별로 다르다.

<br>

대표적으로 Github Action, Gitlab, Terraform 등이 있으나

Github Action으로 진행해보도록 하겠다.

<br>

---

## Github Action을 이용한 CI/CD

<br>

Github는 사용자가 CI/CD 도구를 직접 통합해야 한다.

선택지로 Jenkins, CircleCI, TravisCI 등이 있다

<br>

필자는 현재 이 블로그도 Github Action으로 자동 배포하고 있다.

그 때의 [빌드 스크립트](https://www.junwork.net/blog-build-deploy-2/)를 재활용해보자.

자세한 설명은 주석을 참고하자.

<br>

    # 알아두기
    중간중간 보이는 secret들은 저장소 내 환경변수로,
    Repository 상단 Settings > Secrets에서 설정할 수 있다.

```yaml
name: App Deployment # 이 스크립트의 제목

# 어떤 행동을 할때마다 실행할지
on:
  # master, release/v*라는 이름의 브랜치에 push가 발생할 때마다
  # ex) release/v0.1, release/v2.1.5
  push:
    branches:
      - master
      - release/v*

  # feature, fix 브랜치에 pull_request가 발생할 때마다
  pull_request:
    branches:
      - feature-*
      - fix-*

# 실행할 작업을 순서대로 정의함
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    
    # 체크아웃
    - name: checkout
      uses: actions/checkout@v3

    # JDK 설치
    - name: Set up JDK 11
      uses: actions/setup-java@v3
      with:
        java-version: '11'
        distribution: 'temurin'

    # DB 설정 파일 생성
    # 중요 정보는 Github Secret에서 복사해온다.
    - name: make application-database.yaml
      run: |
        # create application-database.yaml
        cd ./src/main/resources

        # application-database.yaml 파일 생성
        touch ./application-database.yaml

        # GitHub-Actions 에서 설정한 값을 application-database.yaml 파일에 쓰기
        echo "${{ secrets.DATABASE }}" >> ./application-database.yaml
      shell: bash

    # gradle 빌드
    # maven 빌드 : mvn package
    - name: Build with Gradle
      run: ./gradlew bootJar


    # 웹 이미지 빌드 및 도커허브에 push
    - name: web docker build and push
      run: |
        docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }}
        docker build -t ${{ secrets.DOCKER_REPO }}/second-eyes-web .
        docker push ${{ secrets.DOCKER_REPO }}/second-eyes-web
```

위 스크립트를 Github Action을 통해 동작시키면

`빌드` -> `배포` -> `도커 이미지화`까지 한번에 처리할 수 있다.

추가적으로 실행까지 하려면 아래 Docker Compose 스크립트를 추가하면 된다.

Docker Compose의 개념이 생소할 수 있겠지만,

실행 정보까지 추가해주는 것으로 생각하면 좋다.

```yaml
    ## docker compose up
    - name: executing remote ssh commands using password
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ubuntu
        key: ${{ secrets.KEY }}
        script: |
          sudo docker rm -f $(docker ps -qa)
          sudo docker pull ${{ secrets.DOCKER_REPO }}/second-eyes-web
          sudo docker pull ${{ secrets.DOCKER_REPO }}/second-eyes-nginx
          docker-compose up -d
          docker image prune -f
```


<br>

<br>

---

_출처_

_[wjdrbs96님 블로그](https://devlog-wjdrbs96.tistory.com/361)_

_[stalker5217님 블로그](https://stalker5217.netlify.app/devops/github-action-aws-ci-cd-1/)_

_[rmswjdtn님 블로그](https://velog.io/@rmswjdtn/Spring-Docker-Github-Action-Spring-Boot-%EC%9E%90%EB%8F%99%EB%B0%B0%ED%8F%AC%ED%99%98%EA%B2%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0)_

<br/>

---

```toc

```
