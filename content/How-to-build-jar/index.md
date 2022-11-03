---
emoji: 🔮
title: Jar 파일 빌드하는 법 N가지 정리
date: '2022-11-04 00:00:00'
author: 주녁
tags: IntelliJ Java Achive Jar 
categories: how-to
---

지적과 댓글은 언제나 환영합니다!

<br/><br/>

## 들어가기에 앞서

이 글은 jar 파일을 빌드하는 N가지 방법에 대해 다루고 있습니다.

IntelliJ 환경을 권장하며, 터미널과 콘솔 빌드하는 방법도 추가했습니다.

(만약, 빠진 부분이나 추가로 알고 계시는 방법이 있다면 댓글로 부탁드립니다!)

<br>

---

## Jar 파일이란?

<br>

JAR(Java Archive)는 여러개의 자바 클래스 파일과,

클래스들이 이용하는 관련 리소스(텍스트, 그림 등) 및 메타데이터를 하나의 파일로 모아서 

자바 플랫폼에 응용 소프트웨어나 라이브러리를 배포하기 위한 소프트웨어 패키지 파일 포맷이다.

<br>

---

### **1. 빌드도구가 `Maven`인 경우**

<br>

IntelliJ에서 아래 화면과 같이 

`Maven` → `Lifecycle` → `package` 명령어를 실행(더블클릭)하면 

![메이븐 빌드 화면](maven.png)

빌드 결과물이 \build\libs 경로 jar파일로 생성된다.

<br>

---

### **2. 빌드도구가 `Gradle`인 경우**

IntelliJ에서 아래 화면과 같이 

`Gradle` → `Tasks` → `build` → `jar` 명령어를 실행(더블클릭)하면 

![메이븐 빌드 화면](gradle.png)

빌드 결과물이 \build\libs 경로 jar파일로 생성된다.

<br>

---

### **3. 나는 통일된 방법을 사용하고 싶어요!(Artifacts 사용)**

<br>

상단 메뉴에서

`File` → `Project Structure` → `Artifacts` → `+` → `JAR` → `From modules with dependencies`를 선택한다.

실행할 메인 클래스를 지정해주고

`extract to the target JAR` 버튼을 선택하고 OK를 눌러 적용하자.

![아티팩트 빌드 화면](artifacts.png)

<br>

상단 메뉴에서

`Build` → `Build Artifacts` → `자신의 Artifacts 설정`

→ `Build`를 누르면 된다.

<br>

![아티팩트 빌드 화면2](artifacts2.png)

<br>

---

### **4. IntelliJ가 아니에요!(Terminal 사용)**

<br>

단순 Java 어플리케이션인 경우

```bash
# 프로젝트 경로로 이동
cd ${프로젝트 경로}

# 빌드 결과물 폴더 생성
mkdir out/

# 클래스파일 생성
javac -d ${결과물 위치} ${메인클래스 경로+파일명}.java
javac -d ./out Main.java

# jar 파일 생성하기
jar cvf ${생성할 jar 이름}.jar ${메인클래스 파일명}.class
jar cvf ./out/Main.jar ./out/Main.class

```

<br>

라이브러리 의존성이 필요한 경우(Spring)

```bash
# Gradle
./gradlew build
./gradlew demo-0.0.1-SNAPSHOT.jar
java -jar demo-0.0.1-SNAPSHOT.jar

# Maven
./mvnw compile
./mvnw package
java -jar demo-0.0.1-SNAPSHOT.jar
```

<br>

추가로 알면 좋은 명령어

```bash
# 클래스파일 실행하기 
# -cp : 클래스 파일 경로(위와 똑같은 경로)
java -cp ./out ${메인클래스 경로+파일명}.java

# jar 파일 실행하기
java -jar ${생성한 jar 이름}.jar

# jar 파일 실행 종료하기
ps -ef | grep jar
> (jar 프로세스 id 출력됨)

kill ${프로세스 id}

```


_출처_

_[leeminee님 블로그](https://mynameisleeminee.tistory.com/6)_

_[ksr930님 블로그](https://ksr930.tistory.com/204)_


<br/>

---

```toc

```
