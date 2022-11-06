---
emoji: 🔮
title: Let’s Go Docker(실습편) - 어플리케이션을 Docker로 배포하기
date: '2022-11-06 00:00:00'
author: 주녁
tags: 도커 Docker IntelliJ SpringBoot Docker VM Container 도커
categories: infra
---

지적과 댓글은 언제나 환영합니다!

<br/>

# 어플리케이션을 Docker로 배포하기


이번 실습편에서는

아래 3가지 단계를 통해 도커를 찍먹해볼 것이다.

- Docker 이미지 만들기

- 만든 이미지를 실행해보기

- 변경사항을 자동으로 배포하기(심화편)

<br>

---

## 1. Docker 이미지 만들기

<br>

Docker 컨테이너는 Docker 이미지를 기반으로 실행된다.

우리가 만든 어플리케이션을 Docker 이미지로 직접 만들어보자.

<br>

우선, 어플리케이션을 빌드한 결과물을 가지고 있어야한다.

필자는 `IntelliJ`에서 `Spring Boot` 어플리케이션을 `Jar파일`로 만들것이다.

만드는 방법은 [필자가 정리한 글](https://www.junwork.net/How-to-build-jar/)에서 확인할 수 있다.

<br>

(만약, 다른 언어나 플랫폼이라면

자신의 프로젝트에 맞게 빌드 결과물을 얻고 다음 단계를 진행하자.)

<br>

## 2. 만든 이미지를 실행해보기

프로젝트 최상위 디렉토리에

`dockerfile`을 아래와 같은 내용으로생성하자.

<br>

```bash
FROM adoptopenjdk/openjdk11
CMD ["./mvnw", "clean", "package"]
ARG JAR_FILE_PATH=target/*.jar
COPY ${JAR_FILE_PATH} app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

<br>

그리고 빌드해보자.

<br>

```bash
docker build -t docker-example:0.0.1 .
```

<br>

images 명령어로 docker이미지가 제대로 만들어 졌는지 확인한다.

```bash
docker images
```

<br>

드디어 Docker 이미지를 실행하는 순간이다.

```bash
 docker run docker-example:0.0.1
```

<br>

Dokcer가 잘 동작하는지 확인했다면,

어플리케이션이 잘 동작하는지 확인도 해보자.

(아래 방법은 예시일 뿐이니 각자 방법으로 자신의 앱에 테스트해보자!)

```bash
$ curl localhost:8080/
```

<br>

---

<br>

지금까지 어플리케이션을 Dockerfile을 통해 

Docker 이미지로 생성해보았다.

<br>

하지만, 소스코드의 내용이 변경되면, 다시 위 과정을 거쳐야한다.

변경사항을 자동으로 배포할 수는 없을까?

다음 실습편을 통해 배워보도록 하자

<br>

_출처_

_[[Docker] 도커 시작하기 - 2. 도커 기본 명령어 (tistory.com)](https://da2uns2.tistory.com/entry/Docker-%EB%8F%84%EC%BB%A4-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-2-%EB%8F%84%EC%BB%A4-%EA%B8%B0%EB%B3%B8-%EB%AA%85%EB%A0%B9%EC%96%B4)_

_[초보를 위한 도커 안내서 - 설치하고 컨테이너 실행하기 (subicura.com)](https://subicura.com/2017/01/19/docker-guide-for-beginners-2.html)_

_[초보를 위한 도커 안내서 - 이미지 만들고 배포하기 (subicura.com)](https://subicura.com/2017/02/10/docker-guide-for-beginners-create-image-and-deploy.html)_

_[Spring Boot, Dockerfile로 이미지 생성, 배포하기 | 개발 저장소 (umanking.github.io)](https://umanking.github.io/2021/07/11/spring-boot-docker-starter/)_

_[Topical Guide | Spring Boot Docker](https://spring.io/guides/topicals/spring-boot-docker)_

_[Dockerfile reference | Docker Documentation](https://docs.docker.com/engine/reference/builder/)_

<br/>

---

```toc

```
