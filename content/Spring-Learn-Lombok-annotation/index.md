---
emoji: 🔮
title: 스프링 롬복 어노테이션 정리(Lombok annotation)
date: '2022-07-30 00:00:00'
author: 주녘씨
tags: 스프링 Spring 롬복 어노테이션 Lombok annotation
categories: Spring
---

지적과 댓글은 언제나 환영합니다!

## **롬복(Lombok) 이란?**

Lombok이란 어노테이션으로 코드 의존성을 줄여주는 라이브러리이다. 

쉽게 말해서, 변수명을 변경하면 getter/setter 등을 바꾸어줘야 한다.

Lombok을 이용하면 생성자 등을 자동완성 시킬 수 있어서 쉽게 변경이 가능하다.

<br/><br/>

- 다양한 어노테이션이 있지만 기본적인 어노테이션을 먼저 알아보자

```java
@Setter(value = AccessLeve.private // 접근 제한 속성
		, onMethod = @Annotation, // setter 메소드 생성시 메소드에 어노테이션 지정
		, onParam = @Annotation) // setter 메소드 생성시 파라미터에 어노테이션 지정
```

@Data

- @Tostring, @EqulasAndHashCode, @Getter/ @Setter, @RequiredArgsConstructor 모두 생성

- 다만 생성자가 없어야 하는 경우(외부 조작 불가능) 등이 있어서 <u>**잘 사용하지 않는다.**</u>

@Component

- 해당 클래스가 스프링에서 객체로 만들어 관리하는 대상임을 명시
- @ComponentScan을 통해 패키지의 클래스들을 검색하고,
	
	@Component가 존재하는 클래스들을 빈으로 관리

@Autowired

- 스프링 내부에서 자신이 특정한 객체에 의존적이므로, 

	해당되는 타입의 빈을 주입해주라는 표시


- 생성자가 하나면 @Autowired 생략 가능

```java
@Component
@ToString
@Getter
public class SampleHotel
{
	private Chef chef;

	public SampleHotel(Chef chef){
		this.chef = chef;
	}
}
```

- 생성자 자동주입 + LOMBOK

```java
@Component
@ToString
@Getter
@RequiredArgsConstructor
public class sampleHotel
{
	private final name;
  @NonNull
	private Chef chef;
}

```

@RequiredArgsConstructor : 필수로 지정된 변수만 생성자로 작성한다 → final 키워드, @NonNull

@AllArgsConstructor : 모든 멤버변수를 파라미터로 받는 생성자를 작성한다.

*출처*

*[mangkyu님 블로그](https://mangkyu.tistory.com/125)*

*[인프런 스프링 MVC 강의 1편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1#)*

*[인프런 스프링 핵심 원리 기본편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8/)*

<br/>

---


```toc

```