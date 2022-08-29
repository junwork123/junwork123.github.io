---
emoji: 🔮
title: 스프링 API Key를 숨겨보자
date: '2022-08-29 00:00:00'
author: 주녁
tags: 스프링 Spring API Key properties
categories: Spring
---

지적과 댓글은 언제나 환영합니다!

<br/><br/>

# 스프링 API Key를 숨겨보자

Git을 활용해 개발을 하다보면 API Key값이 노출되는 경우가 종종 있다.

(_[Git Guardian](https://www.gitguardian.com/)을 통해 무료 진단해보는 것을 추천한다)_

오늘은 Spring 설정으로 안전하게 이 값을 숨기고 가져오는 작업을 진행해보자.



<br/><br/>

---
## **Application Property 등록**

<br/>

`application.properties`에 아래 내용을 추가해주자

```yml
#API-KEY 위치 설정
spring.profiles.include=파일명
```

여기서 파일명은 `application-파일명.properties`가 된다.

<br/><br/>

필자의 파일명은 `API-KEY`이므로 

`application-API-KEY.properties` 라는 파일을 생성했고

위치는 `application.properties와 같은 위치`에 두었다.

<br/>

![newfile.PNG](newfile.PNG)

<br/><br/>

파일을 생성했으면

내용은 변수명=Key값 형태로 적으면 되는데,

이 때, 따옴표 없이 작성하면 된다.

<br/>

```yml
# 예시
TOKEN_ID=값1
NAVER_API_KEY=값2
...
```


<br/><br/>

---
## **API Key값 안전하게 꺼내오기**

<br/>

이제 안전하게 보관한 Key 값을 꺼내서 써보도록 하자

필자는 아래와 같은 형태로 Key값을 사용했었다.

이 방법의 문제점은 Git에 올렸을 때 Key값이 그대로 노출된다는 점이다.

```java
public class ConstUtils {
    private ConstUtils() {}
    public static final String DISCORD_TOKEN_ID = "키값";
}

```

<br/>

따라서, 아래와 같이 수정하였다.

```java
import org.springframework.beans.factory.annotation.Value;
@Component
public class DiscordChatBotFactory {
    @Value("${DISCORD_TOKEN_ID}")
    private String DISCORD_TOKEN_ID;
```
<br/>

이 때 사용하는 @Value 어노테이션은 

<u>lombok이 아니라 스프링임에 주의하자.</u>


<br/><br/>

## ★ 마무리 ★

<br/>

이 마무리 작업을 하지않는다면

위에서 한 노룍은 아무 효과가 없는 것과 마찬가지다.

<br/>

`.gitignore`에 아까 만든 설정파일을 등록해서

저장소에 올라가지 않도록 해주자

```yml
# API KEY 파일 위치
resources/application-API-KEY.properties
```

<br/>

또한 Git history에서 Key값이 노출된 내역이 있다면 

[Git Guardian](https://www.gitguardian.com/)을 통해 확인한 후 정리해주도록 하자.

<br/><br/>

_출처_

_[nam-ki-bok님 블로그](https://nam-ki-bok.github.io/spring/HideAPI/)_


_[miinsun님 블로그](https://miinsun.tistory.com/148)_


<br/>

---

```toc

```
