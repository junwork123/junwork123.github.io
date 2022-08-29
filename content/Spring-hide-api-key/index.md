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

내용은 `변수명=Key값` 형태로 적으면 되는데,

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

이제 안전하게 보관한 Key값을 꺼내서 써보도록 하자

필자는 아래와 같은 형태로 Key값을 사용했었다.

이 방법의 문제점은 Git에 올렸을 때 Key값이 그대로 노출된다는 점이다.

```java
public class ConstUtils {
    private ConstUtils() {}
    public static final String DISCORD_TOKEN_ID = "키값";
}

```

<br/>

따라서, 아래와 같이 `어노테이션`으로 

아까 설정파일에서 정의했던 `환경변수명을 호출`하는 방식으로 변경하였다.

<br>

```java
import org.springframework.beans.factory.annotation.Value;
@Component
public class DiscordChatBotFactory {
    @Value("${DISCORD_TOKEN_ID}")
    private String DISCORD_TOKEN_ID;
```
<br/>

이 때 사용하는 `@Value` 어노테이션은 

<u>`lombok`이 아니라 `스프링`임에 주의하자.</u>


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

정리하는 방법은 3가지가 있다.

`1. API Key 재발급`

Git Guardian 공식문서에서도 

히스토리 정리는 굉장히 조심할 것을 강조하고 있다.

`API Key 재발급이 가장 안전하고 빠른 방법이다.`

<br><br>

`2. git filter-branch`

[Git 자체에서 지원하는 기능](https://git-scm.com/docs/git-filter-branch)으로 

`히스토리를 전체 필터링하여 해당 파일을 제거한다.`

(로컬 저장소도 포함되므로 주의가 필요하다)

<br>

다만, 필자의 경우

처음부터 Key가 포함되어 있거나,

파일명이 변경된 경우였고

잘 작동하지 않았다.

(만약 아신다면 댓글에 첨부 부탁!)

<br>

```bash
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch 파일명' --prune-empty --all
```

3. BFG repo-cleaner 

    2번 방법보다 속도가 더 빠른 방법이다.

    오픈소스로 제공된 프로젝트로

    `프로젝트를 clone한 뒤` 
    
    히스토리 상에서 

    해당 파일, 문자열을 전부 삭제한 뒤 
    
    `재커밋하는 방식을 취한다.`

    사용법은 [여기서](https://rtyley.github.io/bfg-repo-cleaner/) 참고하자

    (JAVA 8버전 이상의 JRE가 필요하다)



```bash
#1. 프로젝트를 빈 폴더에 새로 clone한다.
git clone https:/저장소 주소.git

#2. bfg 파일과 삭제할 문자열을 clone 위치에 넣고 
#   아래 명령어 실행
java -jar bfg.jar -rt delete.txt .

#3 처리가 끝났다면 아래 명령어 실행
git reflog expire --expire=now --all && git gc --prune=now --aggressive

```

<br/><br/>

_출처_

_[sv002님 블로그](https://velog.io/@sv002/git-filter-branch-%ED%9E%88%EC%8A%A4%ED%86%A0%EB%A6%AC-%ED%95%84%ED%84%B0%EB%A7%81)_

_[nato님 블로그](https://nato-blog.tistory.com/127)_

<br/>

---

```toc

```
