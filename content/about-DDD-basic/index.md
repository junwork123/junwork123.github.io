---
emoji: 🔮
title: DDD(Domain Driven Design)란 무엇일까? - (1)
date: '2022-10-22 00:00:00'
author: 주녁
tags: DDD Domain Driven Design Hexagonal Architecture Layered
categories: knowledge
---

지적과 댓글은 언제나 환영합니다!

<br/><br/>

# DDD(Domain Driven Design)란?

[Hexagonal Architecture](hexagonal.png)

<br>

[Hexagonal Architecture2](hexagonal2.png)

<br>

위 그림은 헥사고날 아키텍쳐(Hexagonal Architecture)로

DDD를 적용한 아키텍쳐의 예시이다.

역할과 책임을 아주 잘 분리한 깔끔한 설계라고 할 수 있다.

<br>

우리는 이러한 깔끔한 아키텍쳐 설계를 위한 도메인 주도 설계

즉, DDD를 공부해볼 것이다.

<br>

크게 두 편으로 나누어 `개념` -> `예시` 순으로 진행할 것이다.

DDD를 이야기하려면 Domain의 정의를 먼저 내려야 할 것이다.

<br/>

---

## **DDD의 개념**

<br>

- DDD란 비즈니스 도메인 별로 나눠서 설계하는 방식이다.

- 비즈니스 도메인이란 유사한 업무의 집합을 말한다. (구매, 결제, 마케팅 등)

- DDD는 기존 IT 중심의 설계 → 현업과 쌍방향 설계를 추구하고자 생긴 개념이다.

<br>

자, 아직까지는 DDD라는 개념이 크게 와닿지 않을 것이다.

DDD를 쓰면 어떤 점이 좋길래 그렇게 권장하는 걸까?

<br>

---

## **DDD가 해결할 수 있는 문제들**

<br>

기존의 DB를 중심으로 아키텍쳐를 만드는 방식은 대부분 계층형 아키텍처이다.

이러한 아키텍쳐는 DB가 속한 `영속성 계층`과 실제 서비스가 있는 `도메인 계층`에 강한 결합을 유도한다.

즉, 특정 도메인에서만 쓸 수 있는 방법으로 DB를 조작하게 될 가능성이 높다.

쉽게 말해, DB의 종류를 바꾸거나, 도메인을 Node.js에서 Spring으로 바꾼다면,

프로젝트를 통째로 갈아엎어야 한다는 것이다.

<br>

엥? 그러면 안바꾸면 되는거 아니야?

당장 내일 Node.js의 개발이 중단되어 망한 프로젝트가 된다면?

DB를 추가할 때 다른 종류의 DB를 쓴다면?

같은 코드를 처음부터 또 작성해야 한다.

(<u>물론 항상 그렇다는 것은 아니다! 추상화를 잘하면 해결가능하다!</u>)

<br>

또한, 성능 측면에서 성능을 데이터베이스에 의존하게 된다.

그리고 서비스는 단순히 속성값을 순서에 맞춰 저장해주는 스크립트 덩어리처럼 되어버린다.

각각 상황별로 코드의 중복이 발생하고, 테스트도 중복되고 어려워진다.

<br>

DDD는 도메인의 비즈니스 로직을 기준으로 적절하게 응집시켜 놓았기 때문에

거대한 서비스 클래스 대신 각각 단순한 역할만 하는 여러 클래스로 분산된다.

따라서, 코드와 테스트의 중복을 최소화하고 재사용성을 높일 수 있다.

<br>

자, 이제 정의와 장점은 충분히 알았다.

DDD의 


- DDD는 Strategic Design과 Tactical Design라는 두가지 단계로 나눌 수 있다.

- Strategic Design
    - 사용자의 상황에 맞게 설계하는 단계이다. 
    - 때문에 단순 앱이나 사이트 그 이상, 제품 전체 경험을 중점으로 설계한다.

- Tactical Design
    - Strategic Design에서 도출된 설계를 바탕으로 실행가능하도록 설계한다.
    - 실제 앱과 사이트를 실행하는 프로세스에 맞춰 설계한다.
    - 도메인을 서브도메인으로 쪼개서 정의한다.
    - 때문에 서브도메인도 문제로 재정의될 수 있다.(반복적이다)

<br>



추상적인 이야기를 조금 더 구체화해서 소개하도록 하겠다.



DDD는 어떻게 구성되는지 알아보자.

---
## **Strategic Design 단계**

<br>

Strategic Design는 문제 영역(Problem Space)과 비즈니스 도메인을 분리하여 생각한다.

Problem Space는 3가지로 구성된다.

    . Core Sub-Domain: 비즈니스 목적 달성을 위한 핵심 도메인

    . Supporting Sub-Domain: 핵심 도메인을 지원하는 도메인

    . Generic Subdomains:  공통 기능(메일, SSO 등) 도메인

<br>

---
## **Tactical Design 단계**

<br>

Presentation, application, domain, infrastructure 계층으로 구분되어 있다.

DDD의 핵심 목표는 모듈간의 의존성을 최소화하고 응집성은 최대화하는 것이다.
하위 계층으로만 의존함으로서 구조가 복잡하여 발생할 수 있는 순환참조를 막을 수 있다.

presentation → application → domain → infrastructure
단방향으로 구성되어있기에 각 계층별 로직을 쉽게 이해할 수 있다.

infrastructure는 domain의 추상화를 구현하는 계층으로 DIP의 활용을 극대화할 수 있다.

## **DDD의 예시**


<br/><br/>

## **DDD는 꼭 써야할까?**

DDD 개념이 세간에 널리 알려지면서

항상 정답인 것처럼 들릴 수 있겠지만,

DDD는 어디에나 맞는 설계는 아니다.

<br>

그 이유는 비즈니스의 형태와 규모에 있다.

내부용 서비스, 개인 블로그, 단순 조회성 서비스 등을 떠올려보라.

그리고 다음 질문을 생각해보라.

<br>

- 개발자가 기획자가 서로 도메인 지식을 알아야 할만큼 복잡한가?

- 핵심 비즈니스 행위를 나누기 어려울만큼 비즈니스 로직이 단순한가?

- 비즈니스를 확장하거나, 변경되지 않을 가능성이 높은가?

<br>

블로그에 다양한 포트와 DB가 필요할까?

1,000명 이하의 인원이 사용하는 내부용 ERP에서 도메인을 나눌만큼 복잡한 일이 있을까?



<br>

기존 Spring MVC 패턴에서 자주 보이는 다층 구조(Layered Architecture)도

충분히 괜찮은 설계가 될 수 있다.

결국, 상황에 맞는 적절한 패러다임을 선택하는 것이 중요하다.

<br>

다음 편에서는 실제 예시를 통해 DDD를 좀 더 자세하게 들여다보도록 하자.


_출처_

_[DDD Part 1: Strategic Domain-Driven Design](https://vaadin.com/blog/ddd-part-1-strategic-domain-driven-design)

_[What is Strategic Design ?](https://thedomaindrivendesign.io/what-is-strategic-design/)

_[koreapy님 블로그](https://koreapy.tistory.com/1227)

_[kadensungbincho님 블로그](https://kadensungbincho.tistory.com/73)_

_[happycloud-lee님 블로그](https://happycloud-lee.tistory.com/94)_

_[베스핀글로벌 기술블로그 - Domain Driven Design – 1부 (Strategic Design)](https://blog.bespinglobal.com/post/domain-driven-design-1%EB%B6%80-strategic-design/)_

_[베스핀글로벌 기술블로그 - Domain Driven Design – 2부 (Tactical Design)](https://blog.bespinglobal.com/post/domain-driven-design-2%eb%b6%80-tactical-design/)_

_[yoonbing9님 블로그](https://yoonbing9.tistory.com/121)_

<br/>

---

```toc

```
