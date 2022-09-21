---
emoji: 🔮
title: 스프링 IoC와 DI를 아시나요?
date: '2022-09-20 00:00:00'
author: 주녁
tags: 스프링 Spring 싱글톤 Singleton 컨테이너 Container
categories: Spring
---

지적과 댓글은 언제나 환영합니다!


<br/>

---
## **IoC(Inverse of Control)**

<br/>

스프링과 같은 프레임워크를 사용할 때를 생각해보자. 

Controller, Service 같은 객체들의 동작을 우리가 직접 구현하기는 하지만, 

해당 객체들이 어느 시점에 호출될 지는 신경쓰지 않는다. 

단지 프레임워크가 요구하는대로 객체를 생성하면, 

프레임워크가 해당 객체들을 가져다가 생성하고, 메서드를 호출하고, 소멸시킨다. 

프로그램의 제어권이 역전된 것이다.

이를 IoC(Inverse of Control)라고 부른다.

<br/>

이러한 싱글톤 패턴은 내부 설계를 변경하거나 초기화하기가 어렵다.

또한, private 생성자를 사용하기 때문에 자식 클래스를 만들기 어렵다.

즉, 많이 사용할수록 유연하지 않은 설계가 된다.

<br/>

---
## **스프링 컨테이너**

<br/>

이를 해결하기 위해 등장한 것이 스프링 컨테이너이다.

싱글톤 패턴을 적용하지 않아도, 객체 인스턴스를 싱글톤으로 관리한다.

<br/>

그래서 스프링 컨테이너는 싱글톤 패턴의 문제점을 해결하면서, 

객체 인스턴스를 싱글톤(1개만 생성)으로 관리한다.

<br/>

---
## **싱글톤 패턴의 주의점**

<br/>

싱글톤 패턴 또는 싱글톤 컨테이너든 

객체 인스턴스를 하나만 생성해서 사용하는 방식의 경우 

여러 클라이언트가 하나의 객체를 공유하기 때문에 

해당 객체를 상태를 유지시키는 구조로 설계해서는 안된다.

```java
public class StatefulService {
	private int price; //상태를 유지하는 필드
	public void order(String name, int price) { 
        System.out.println("name = " + name + " price = " + price); 
        this.price = price; //여기가 문제!
    }
      public int getPrice() {
          return price;
    } 
}
```

## 마치며..

<br/><br/>

_출처_

_[hongchangsub님 블로그](https://hongchangsub.com/springcore5/)_

_[인프런 스프링 MVC 강의 1편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1#)_

_[인프런 스프링 핵심 원리 기본편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8/)_

<br/>

---

```toc

```
