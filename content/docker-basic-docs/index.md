---
emoji: 🔮
title: Let’s Go Docker(번외편) - Docker 공식문서 같이읽기
date: '2022-11-17 00:00:00'
author: 주녁
tags: 도커 Docker IntelliJ SpringBoot Docker VM Container 도커 Docs Documentation
categories: infra
---

지적과 댓글은 언제나 환영합니다!

<br>

# Docker 공식문서 같이읽기

[도커 공식문서](https://docs.docker.com/engine/reference/builder/)를 번역 및 요약해보았다!

최대한 신중히 번역하려고 노력했지만 실수가 있다면 너그럽게 댓글로 지적해주시길 바란다!

<br>

P.S 

추가로 원문을 직접 읽어보셔도 큰 도움이 될 것이라고 생각한다.

<br>

---

## Format

- 명령어(Instruction)
  - 명령어는 대문자로 작성한다.
  - 도커 명령어는 대소문자 구분이 없지만, arguments와 쉽게 구분하기 위해서 권장한다.
- 주석

  - 주석은 ‘#’으로 작성
  - 주석과 공백은 실행 전에 제거되어 실행된다.
  - 하지만 공백이 명령어의 arguments라면 유지된다.
    ```docker
    # 실행 전
    				# this is a comment-line
        RUN echo hello
    RUN echo "\
         hello\
         world"

    # 실행 후
    # this is a comment-line
    RUN echo hello
    RUN echo "\
         hello\
         world"
    ```

- 파서 지시문(Parse Directive)
  - Parse Directive는 특별한 종류의 주석으로 이 지시어 아랫줄부터 영향을 준다. (필수 X)
  - Parse Directive에는 `syntax` 와 `escape` 2가지 용법이 있다.
    - `syntax` 는 사용하고자 하는 특정 Dockerfile 이미지를 지정할 때 쓴다. ([BuildKit](https://docs.docker.com/build/buildkit/) 필요)
    ```docker
    # syntax=docker/dockerfile:1
    # syntax=docker.io/docker/dockerfile:1
    # syntax=example.com/user/repo:tag@sha256:abcdef...
    ```
    - `escape` 는 Dockerfile의 개행문자를 지정할때 사용한다.
    ```docker
    # escape=`

    FROM microsoft/nanoserver
    COPY testfile.txt c:\
    RUN dir c:\
    ```
  - Parse Directive는 Build 단계에서 레이어를 추가하거나 보여지지는 않는다.
  - Parse Directive는 이후 빈 라인이 나타나거나 명령어가 실행되면, 나머지 Parse Directive는 주석으로 간주된다.
    _(Once a comment, empty line or builder instruction has been processed, Docker no longer looks for parser directives)_
    ```docker
    # 이 주석으로 아래 Parse Directive가 무효가 됨. (잘못된 예시)
    # directive=value
    FROM ImageName
    ```
    ```docker
    # unknowndirective=value
    # knowndirective=value
    # 인식되지 못한 Parse Directive는 주석으로 처리되어
    # 다음 줄 'knowndirective=value'까지 무효 처리가 된다. (잘못된 예시)
    ```
  - 때문에, Dockerfile 최상단에 위치해야하며 Parse Directive끼리 공백없이 붙여서 작성한 이후에 공백 라인을 주는 것을 원칙으로 한다.
  - 단일 지시문은 한번만 사용할 수 있다.(같은 지시문 두번 사용 X)
  - 소문자로 작성하는 것이 권장된다.
- Environment replacement
  - 환경 변수는 `ENV` 키워드와 함께 쓰인다.
  - 사용 형태는 2가지를 허용한다. `$variable_name`, `${variable_name}`
    ```docker
    FROM busybox
    ENV FOO=/bar
    WORKDIR ${FOO}   # WORKDIR /bar
    ADD . $FOO       # ADD . /bar
    COPY \$FOO /quux # COPY $FOO /quux
    ```
  - `${variable:-word}` : variable이 정의되어 있다면 variable, 그렇지 않다면 word를 사용한다.
  - `${variable:+word}` : variable이 정의되어 있다면 word, 그렇지 않다면 empty string를 반환.
  - `\${foo}` 처럼 `\` 가 앞에 붙는 경우는 문자 그대로 번역되므로 주의가 필요하다
  - 환경변수 값을 확인하고 변경하기
    ```bash
    # 환경변수 확인하기
    $ docker inspect

    # 환경변수 변경하기
    docker run --env <key>=<value>
    ```
  - **이러한 환경 변수에는 이미지가 변경되지 않도록 주의가 필요하다.**
    ```bash
    # 잘못된 예시(이미지가 중간에 변경되어 혼동을 줄 수 있다)
    RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y ...
    ```
- dockerignore file
  - 도커 데몬이 동작하는 과정에서 제외/포함할 파일의 규칙을 정한다.
  - root 디렉토리에 `.dockerignore` 파일이 있다면 동작하는 내용이다.
    ```docker
    ***/temp***
    # root의 서브 디렉토리 중
    # temp로 시작하는 파일과 디렉토리 둘다 제외한다.
    # ignore /somedir/temporary.txt
    # ignore /somedir/temp

    ***/*/temp***
    # root의 2레벨 이하의 서브 디렉토리 중
    # temp로 시작하는 파일과 디렉토리 둘다 제외한다.
    # ignore /somedir/subdir/temporary.txt

    **temp?**
    # root 디렉토리에서
    # temp로 시작하는 파일과 디렉토리 둘다 제외한다.
    # ignore /tempa
    # ignore /tempb

    ***.md
    !README*.md
    README-secret.md**
    # 모든 md파일을 제외(exclude)하되
    # README*.md 형식은 예외로 include한다.
    # 그 중에서도 README-secret.md는 제외(exclude)로 한다.
    	#	유의할 점 :	형식 -> case 순으로 와야한다.
    	# 아래의 경우 가운데 줄은 무효가 된다.
    	*.md
    	**README-secret.md**
    	!README*.md
    ```

<br>

---
## FROM

- Dockerfile 명령어의 시작은 `FROM`으로 시작해야 한다.
- `ARG` 키워드로 FROM 시작전에 변수를 만들어 사용할 수 있다.
- 대신 FROM 명령어가 끝나면 해당 변수는 빌드 과정에서 사용할 수 없다.
  ```docker
  # usage
  # FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
  ARG CODE_VERSION=latest
  FROM base:${CODE_VERSION} AS baseApp
  CMD  /code/run-app
  ```

<br>

---

## RUN

- `RUN` 명령어는 항상 현재 이미지의 최신상태에서 동작한다.
- `RUN` 명령어의 결과로 변경된 이미지는 다음 단계에 동작할 Dockerfile의 이미지에 그대로 반영된다.
  ```docker
  # 한줄로 쓸때
  RUN /bin/bash -c 'source $HOME/.bashrc; echo $HOME'

  # 여러줄로 쓸때
  RUN /bin/bash -c 'source $HOME/.bashrc; \
  echo $HOME'

  # JSON 형식
  RUN ["c:\\windows\\system32\\tasklist.exe"]
  ```
- `RUN` 명령어는 cache를 사용하기 때문에 실행결과가 다음 빌드에서 재사용될 수 있다.
  ```docker
  # 캐시로 이 명령어의 결과가 재사용될 수 있다.
  RUN apt-get dist-upgrade -y

  # 캐시를 무시하고 매번 실행하려면
  docker build --no-cache
  ```
- `--mount` 옵션은 아래 4가지 경우 build 과정에서 생산성을 높이는 방법이 될 수 있다
  - `bind` : Default 옵션, 기존에 있던 파일을 재사용할 때
  - `cache` : 빌드 시 컴파일러, 패키지매니저에서 캐시 디렉토리를 활용하고 싶을때
    ```docker
    # syntax=docker/dockerfile:1

    #cache apt packages
    FROM ubuntu
    RUN rm -f /etc/apt/apt.conf.d/docker-clean; echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache
    RUN **--mount=type=cache**,target=/var/cache/apt,sharing=locked \
      --mount=type=cache,target=/var/lib/apt,sharing=locked \
      apt update && apt-get --no-install-recommends install -y gcc
    ```
  - `secret` : 빌드 시 secret 파일에 접근하고 복사할 때
    ```docker
    # syntax=docker/dockerfile:1

    # access to S3
    FROM python:3
    RUN pip install awscli
    RUN **--mount=type=secret**,id=aws,target=/root/.aws/credentials \
      aws s3 cp s3://... ...
    ```
    ```bash
    # bash
    $ docker buildx build --secret id=aws,src=$HOME/.aws/credentials .
    ```
  - `ssh` : 빌드 시 ssh 파일에 접근하고 복사할 때
    ```docker
    # syntax=docker/dockerfile:1

    # access to Gitlab
    FROM alpine
    RUN apk add --no-cache openssh-client
    RUN mkdir -p -m 0700 ~/.ssh && ssh-keyscan gitlab.com >> ~/.ssh/known_hosts
    RUN **--mount=type=ssh** \
      ssh -q -T git@gitlab.com 2>&1 | tee /hello
    # "Welcome to GitLab, @GITLAB_USERNAME_ASSOCIATED_WITH_SSHKEY" should be printed here
    # with the type of build progress is defined as `plain`.
    ```
    ```bash
    # bash
    $ eval $(ssh-agent)
    $ ssh-add ~/.ssh/id_rsa
    (Input your passphrase here)
    $ docker buildx build --ssh default=$SSH_AUTH_SOCK .
    ```
- `--network` 옵션은 커맨드가 동작하고 있는 네트워크 환경을 컨트롤할 수 있게 해준다.
  ```docker
  # syntax=docker/dockerfile:1

  # isolating external effects
  FROM python:3.6
  ADD mypackage.tgz wheels/
  RUN **--network=none** pip install --find-links wheels mypackage
  ```

<br>

---

## CMD

- CMD 명령어의 주 목적은 실행중인 컨테이너에게 기본값들을 제공하기 위해서이다.
- CMD 명령어를 여러개 작성했다면 가장 마지막 CMD명령만 효력을 발생시킨다.
- 총 3가지 형태로 사용할 수 있다.
  - `CMD ["executable","param1","param2"]` (exec 형식, 권장하는 형식)
    ```docker
    # exec 형식을 사용하면서 쉘을 직접 실행하는 경우,
    # 도커가 아닌 환경 변수 확장을 수행하는 쉘입니다.
    FROM ubuntu
    CMD [ "sh", "-c", "echo $HOME"]
    ```
  - `CMD ["param1","param2"]` (EntryPoint 형식)
    ```docker
    # Shell 없이 실행하고 싶을 때
    # JSON 형식 + 실행가능한 프로그램의 경로
    FROM ubuntu
    CMD ["/usr/bin/wc","--help"]
    ```
  - `CMD command param1 param2` (Shell 형식)
    ```docker
    # Shell에서 실행하고 싶을때
    FROM ubuntu
    CMD echo "This is a test." | wc -
    ```

<br>

---

## LABEL

- `LABEL` 명령어는 이미지에 metadata를 추가하는 Key-Value 쌍이다.
- 부모, 베이스 이미지의 값도 포함하고 있으며, Key값이 같은 경우 최신값으로 덮어씌워진다.
  ```docker
  LABEL multi.label1="value1" multi.label2="value2" other="value3"

  LABEL "com.example.vendor"="ACME Incorporated" \
        version="1.0" \
        description="This text illustrates"
  ```
- 특정 이미지의 라벨을 보고싶을때
  ```bash
  $ docker image inspect --format='' myimage

  {
    "com.example.vendor": "ACME Incorporated",
    "com.example.label-with-value": "foo",
    "version": "1.0",
    "description": "This text illustrates that label-values can span multiple lines.",
    "multi.label1": "value1",
    "multi.label2": "value2",
    "other": "value3"
  }
  ```
- `MAINTAINER` 명령어의 경우 **deprecated**되었기 때문에 **LABEL의 author 필드로 대체**한다.
  ```docker
  LABEL org.opencontainers.image.authors="SvenDowideit@home.org.au"
  ```

<br>

---
## EXPOSE

- `EXPOSE` 명령어는 컨테이너가 동작하는 동안 수신할 Port와 Protocol(TCP, UDP)을 설정한다.
  ```docker
  EXPOSE 80/tcp
  EXPOSE 80/udp
  ```
- 하지만 이 명령어는 실제로 Port를 열어두는게 아니라 포트의 형식을 정하는 것이다.
- 실제 Port가 동작하도록 하려면, 아래와 같이 `docker run -p` 플래그로 포트를 지정해줘야 한다.
  ```bash
  # Format
  # 1. ip:hostPort:containerPort
  # 2. ip::containerPort
  # 3. hostPort:containerPort
  # 4. containerPort

  # 컨테이너의 특정 포트를 개방한다.
  $ docker run -p 80:80/tcp -p 80:80/udp

  # 특정 범위의 컨테이너 포트를 개방한다.
  $ docker run -p 1234-1236:1234-1236/tcp

  # expose된 모든 포트를 개방한다
  $ docker run -P

  # expose된 모든 포트를 개방하고,
  # 다른 컨테이너가 클라이언트가 되도록 bridge network를 형성한다.
  $ docker run -P --link=${another-container-id}
  ```

<br>

(작성중입니다 ㅠㅠ)

---

## ADD

<br>

---

## COPY

<br>

---

## ENTRYPOINT

<br>

---

## VOLUME

<br>

---

## USER

<br>

---

## WORKDIR

<br>

---

## ARG

<br>

---

<br>

_출처_

_[도커 공식문서](https://docs.docker.com/engine/reference/builder/)_

<br/>

---

```toc

```
