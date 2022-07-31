---
emoji: 🔮
title: 스프링 의존성 주입(Dependency Injection)이란?
date: '2022-07-31 00:00:00'
author: 주녘씨
tags: 스프링 Spring DI 의존성 주입 Dependency Injection
categories: Spring
---

지적과 댓글은 언제나 환영합니다!

<br/><br/>

# 의존성 주입이란?

<br/>

스프링에서 지원하는 핵심 프로그래밍 모델 중 하나로

말 그대로 **의존관계를 외부에서 결정**해주는 디자인 패턴이다.


<br/><br/>

## 의존관계?

<br/>

의존관계는 쉽게 이야기하자면

`한 쪽이 변경되면 다른 한쪽도 변경되는 관계`로 말할 수 있다.

```java
    public class Customer{
        private final int id; // 고유 ID
        private final String grade; // 회원 등급
        private final DiscountPolicy discountPolicy; // 할인정책
    }

    public class Customer{
        private final int id;
        private final String grade;
        private final VipDiscountPolicy vipPolicy; // VIP 할인정책으로 변경
    }
```

고객 클래스마다 할인정책을 정의해준 초기 모델에서

할인 정책 클래스를 VIP 전용으로 <u>변경하고 싶다면</u>

<u>생성자, Getter, Setter 등을 모두 변경해야 한다.</u>

(이미 다른 서비스에서 할인율을 사용하고 있다면 더 많은 수정이 필요하다)

<br/>

이러한 관계를 Customer와 DiscountPolicy는 <u>의존관계에 있다</u>고 할 수 있다.

<br/>

하지만, `회원 등급은 처음부터 VIP가 아닐텐데, 나중에 결정할 수는 없는걸까?`

= 의존성을 최대한 나중에 결정할 순 없을까?

<br/><br/>

## 외부에서 결정하는 의존성

<br/>

할인 정책의 행동은 이미 알고있다. 할인해주는 행동이다.

VIP 할인 정책의 행동은 무엇일까? 역시 할인이다.

```java
    discountPolicy.discount();

    vipPolicy.discount();
```

<br/><br/>

각 할인 정책은 `같은 행동을 하기 때문에 interface로 묶을 수 있다.`

```java 
    public interface discountPolicy{ // 할인 정책 인터페이스는
        public double discount(); // 할인을 한다.
    }

    public class normalPolicy implementation discountPolicy{
        public double discount(){ return 0.15; } // 할인율 15
    }

    public class vipPolicy implementation discountPolicy{
        public double discount(){ return 0.30; } // 할인율 30
    }
```

<br/><br/>

이런 식으로 interface를 통해 정의하게 되면

아래와 같이 의존관계를 설정할 수 있다.

이를 `생성자 주입 방식`이라고 하며, `Spring에서 권장하는 방법`이다.

다른 방법들도 있지만 공식적으로 권장하지 않는다.

```java
    public class Customer{
        ...
        private final discountPolicy discountPolicy;

        Customer(discountPolicy policy){
            this.discountPolicy = policy;
        }
    }

    public static void main(){
        ...
        Customer normal = new Customer(normalDiscountPolicy);
        Customer vip = new Customer(VipDiscountPolicy);
    }
```

<br/><br/>

`생성자를 호출할 때 할인 정책`을 설정할 수 있게 되므로

Customer가 생성될 때(로그인 시, 비로그인 주문 시 등등)

할인 정책을 `결정`할 수 있게 된다.

이게 바로 `의존성을 외부에서 주입한다`는 의미이다.

<br/>

## 스프링과 DI

실제로 스프링에서는 아래와 같이 

@Autowired 태그를 통해서 

DB 작업을 위한 repository 설정이나, Service 설정 등

`Bean 객체들을 의존성을 주입으로 사용하도록 권장`하고 있다.

```java
@Service
public class UserService {

    private UserRepository userRepository;
    private MemberService memberService;

    @Autowired
    public UserService(UserRepository userRepository, MemberService memberService) {
        this.userRepository = userRepository;
        this.memberService = memberService;
    }
    
}
```
<br/>

때문에 `변경이 필요한 부분은` 적절하게 의존성 주입이 가능하도록

`interface를 활용하여 설계하여야 한다.`





<br/> 





*출처*

*[mangkyu님 블로그](https://mangkyu.tistory.com/125)*

*[인프런 스프링 MVC 강의 1편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1#)*

*[인프런 스프링 핵심 원리 기본편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8/)*

<br/>

---


```toc

```