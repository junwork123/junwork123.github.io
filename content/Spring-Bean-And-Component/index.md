---
emoji: 🔮
title: 스프링 @Bean과 @Component의 차이점을 아시나요?
date: '2022-09-19 00:00:00'
author: 주녁
tags: 스프링 Spring Bean Component Configuration
categories: Spring
---

지적과 댓글은 언제나 환영합니다!

<br/><br/>

Spring으로 개발을 하다보면 @Bean과 @Component를 언제 써야할지 헷갈릴때가 있다.

둘다 Bean을 생성할때 사용하는 어노테이션인데 왜 2개로 나누어져있을까?

<br>

---

## @Bean의 정의와 용도

<br>

@Bean의 용도를 한줄로 요약하자면,

개발자가 컨트롤이 불가능한 `외부 라이브러리들을 Bean으로 등록`하고 싶은 경우에 사용된다. 

<br>

`Bean.java`의 documentation을 보면, 아래와 같은 문장이 가장 처음써있다.

    Indicates that a method produces a bean to be managed by the Spring container.

그렇다. 

스프링 컨테이너에 의해 관리되는 Bean들을 생성하는 `method`에 사용할 수 있는 어노테이션이다.

<br>

실제 정의를 살펴보면 다음과 같다.


```java
@Target({ElementType.METHOD, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Bean {
```

<br>

타겟에 `method`에만 적용할 수 있도록 명시되어 있다.

떄문에 직접 작성한 `class`에는 사용할 수 없는 것이다.

<br>

그렇기 때문에 외부 라이브러리를 bean으로 사용하고 싶을 때 `@Configuration` 클래스 안에 `@bean`을 사용하여 생성 메소드를 작성하는 것이다.

<br><br>

그렇다면 `class`에도 사용할 수 있는 어노테이션이 있지 않을까?

`@Component`가 바로 그렇다. 

<br>

---
## @Component

<br>

`@Component`는 `class`를 bean으로 사용할 수 있도록 해주는 어노테이션이다.

아래는 `Component.java`에 나오는 원문이다.

    Indicates that an annotated class is a "component". Such classes are considered as candidates for auto-detection when using annotation-based configuration and classpath scanning.
    Other class-level annotations may be considered as identifying a component as well, typically a special kind of component: e.g. the @Repository annotation or AspectJ's @Aspect annotation.


<br>

해석하자면, <u>어노테이션 기반의 configuration에 후보로 등록</u>되도록 해준다. 

또한 다른 클래스 레벨의 어노테이션(ex : `@Controller`, `@Repository`, `@Service`)도 그런 역할을 할 수 있도록 해준다. 

우리가 Spring을 공부하며 배운 내용 그대로가 적혀있다.

<br>

실제 정의를 살펴보면 다음과 같다.

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Indexed
public @interface Component {
```

<br>

class에 적용할 수 있도록 타겟이 `TYPE` 형태로 지정되어 있다. 

따라서 직접 만든 클래스에 사용이 가능하다.

<br>

다만, `@Bean`과 차이점으로 `@Indexed`라는 어노테이션이 설정되어 있는 것을 볼 수있다. 

<br>

`@Indexed`는 `@Component`어노테이션과 같이 사용되는데, 컴파일 시점에 `@Component` 어노테이션이 검색될 수 있도록 완전정규화된 이름을 부여해주는 역할을 한다. 

<details>
    <summary>원문 참조</summary>

    The CandidateComponentsIndex is an alternative to classpath scanning that uses a metadata file generated at compilation time. The index allows retrieving the candidate components (i.e. fully qualified name) based on a stereotype. This annotation instructs the generator to index the element on which the annotated element is present or if it implements or extends from the annotated element. The stereotype is the fully qualified name of the annotated element.

    Consider the default Component annotation that is meta-annotated with this annotation. If a component is annotated with Component, an entry for that component will be added to the index using the org.springframework.stereotype.Component stereotype.
</details>

<br>

---
## 마치며..

<br>

자, 이제 `@Bean`과 `@Component`의 차이점에 대해 설명할 수 있는가?

용도에 맞는 어노테이션 사용도 중요하지만, 

정의를 직접 찾아보고 해석해보는 것도 좋은 경험이 될 것이다.



<br/>

## **불변**

_출처_

_[jojoldu님 블로그](https://jojoldu.tistory.com/27)_

_[인프런 스프링 MVC 강의 1편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1#)_

_[인프런 스프링 핵심 원리 기본편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8/)_

<br/>

---

```toc

```
