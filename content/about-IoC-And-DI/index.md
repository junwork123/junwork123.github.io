---
emoji: 🔮
title: IoC와 DIP를 아시나요?
date: '2022-09-21 00:00:00'
author: 주녁
tags: IoC DIP Inverse Of Control Dependency Inversion Principle Factory 
categories: knowledge
---

지적과 댓글은 언제나 환영합니다!

<br>

---
## **피자가게에서 시작하는 질문**

<br>

피자를 만드는 `직원`은 <u>고용주가 고용했지만</u>,

정작 <u>손님 명령에 따라 피자를 만든다.</u>

혹시, 위 사실이 이상하다는 생각을 해본 적 있는가?

전혀 이상하게 느끼지 못했을 것이다.

<br>

프로그래밍의 많은 부분은 현실세계를 모방하여 만들어진다.

<u>서비스를 제공하는 쪽이 사용하는 쪽에 의존한다.</u>

이를 `제어의 역전`(IoC, Inverse of Control)라고 부른다.

IoC도 피자가게와 같은 맥락을 가진다.

<br>

IoC는 의존관계를 최소화하기 위해 사용한다. 

그렇다면, <u>의존관계 최소화는 왜 필요할까?</u>

<br/>

---
## **피자와 의존관계**

<br/>

의존관계 설명에 앞서,

`피자를 만드는 직원` A와 

`서빙을 하는 직원` B가 있다고 해보자.

<br>

`A`는 누가 주문했는지 몰라도, 피자를 만들 수 있다.

`B`는 피자 레시피를 몰라도, 피자를 전달할 수 있다.

서로 하는 일은 알지만, 내용은 몰라도 되기 때문일 것이다.

<br>

<u>만약 A와 B가 동일인물(1명)이라면 어떻게 될까?</u>

<br>

`A`가 주문을 받을때, 피자를 만들 수 없다.

`A`가 피자를 만들때, 주문을 받을 수 없다.

<u>주문받기와 피자만들기 간에 강력한 의존이 생기는 것이다.</u>

<br>

위 사례를 다음과 같이 치환해보자.

<br/>

---
## **의존관계와 인터페이스**

<br>

`날씨 메시지를 생산하는 서비스` A와 

`요청에 메시지를 전달하는 컨트롤러` B가 있다고 해보자.

<br>

`A`는 누가 요청했는지는 몰라도 날씨 메시지(=피자)를 만들 수 있다.

`B`는 날씨 메시지 알고리즘은 몰라도 메시지(=피자)를 전달할 수 있다.

서로 하는 일은 알지만, 내용은 몰라도 되기 때문일 것이다.

<br>

이러한 역할을 하는 것이 `인터페이스(Interface)`이고,

서로 의존관계를 최소화한 경우라고 표현할 수 있을 것이다.

*_`인터페이스(Interface)`를 많이 애용하길 바란다!_

<br>

스프링과 같은 웹 프레임워크를 사용할 때를 생각해보자. 

Controller, Service 같은 객체들의 동작을 우리가 직접 구현하기는 하지만, 

<u>해당 객체들이 어느 시점에 호출될 지는 신경쓰지 않는다.</u>

<br>

단지 사용하는 쪽인 프레임워크가 <u>요구하는대로 객체를 생성하면,

프레임워크가 가져다가 사용한다.</u>

(해당 객체들을 가져다가 생성하고, 메서드를 호출하고, 소멸시킨다.)

프로그램의 제어권이 역전된 것이다.

<br/>

본론으로 돌아가서

IoC는 <u>역할과 관심을 분리해 변경에 유연한 코드를 작성할 수 있도록 해준다.</u>

(`응집도`를 높이고, `결합도`를 낮춘다.)

이러한 IoC에도 원칙이 있다.

<br/>

---
## **IoC의 원칙, DIP**

    1. 고차원 모듈은 저차원 모듈에 의존하면 안된다. 
    2. 이 모듈 모두 다른 추상화된 것에 의존해야 한다.
    3. 추상화 된 것은 구체적인 것에 의존하면 안 된다. 
    4. 구체적인 것이 추상화된 것에 의존해야 한다. 
                                    - Martin, Robert C. -

<br>

이러한 원칙을 `DIP`(Dependency Inversion Principle)이라고 한다.

겉보기엔 어려워보이지만, 해석하면 당연한 이야기이다.

위 원칙을 적용한 코드의 예시는 아래와 같다.

(Java 문법을 기준으로 작성하였고, 엄격한 예시가 아닐 수 있다!)

<br/>

1. `고차원 모듈`(=피자 가게)는 `저차원 모듈`(=직원)에 의존하면 안된다.

    직원이 Senior `A` → Junior `C`로 변경되어도, 수행하는 역할은 같아야 한다.

    ```java
    public class PizzaStore {
        KitchenStaff kitchenStaff;
        public runStore(){
            ...
            kitchenStaff.makePizza(...);
            ...
        }
    }
    ```
    ```java
    public class SeniorKitchenStaff implements KitchenStaff {
        @Override
        public void move(Point from, Point to){...};
        public Pizza makePizza(Bread bread, Topping topping){...빨리 만든다..};
    }
    ```

    ```java
    public class JuniorKitchenStaff implements KitchenStaff {
        @Override
        public void move(Point from, Point to){...};
        public Pizza makePizza(Bread bread, Topping topping){...느리게 만든다...};
    }
    ```

    <br>

2. 이 `모듈` 모두 다른 `추상화된 것`에 의존해야 한다.

    피자가게는 가게라고 뭉뚱그려 말할 수 있고(추상화), 
    
    직원 또한 일할 수 있는 무언가(인간, 로봇, 똑똑한 강아지..)라고 뭉뚱그려 말할 수 있다. 
    
    → 모든 개념을 점점 세세하게 분해해야 한다는 의미이다.

    ```java
    public abstract class Staff implements Movable{
        // 직원은 움직일 수 있어야 한다.
    }
    ```
    
    ```java
    public interface Movable{
        // 움직이는 행동이 가능한 인터페이스
        public void move(Point from, Point to);
    }
    ```

    ```java
    public class KitchenStaff extends Staff {
        // 움직일 수 있고, 피자를 만들 수 있는 직원!
        @Override
        public void move(Point from, Point to){...walk...};
        public Pizza makePizza(Bread bread, Topping topping){...피자를 만든다...};
    }
    ```

    <br>

3. `추상화 된 것`(=피자)은 `구체적인 것`(=레시피)에 의존하면 안 된다. 

    페퍼로니 피자와 포테이토 피자는 레시피가 달라도 피자라는 개념은 동일하다. 
    
    피자의 내용물에 따라 피자의 역할을 벗어나는 경우가 없어야한다.

    (못먹는 피자가 되거나, 피자가 직원 대신 일을 한다던가!)

    
    ```java
    public abstract Class Pizza {
        public Bread bread;
        public Topping topping;
        public int size;
        abstract public Taste taste(); // 피자는 맛을 낸다!
    }
    ```

    ```java
    public Class WeirdPizza extends Pizza{
        // 이 이상한 피자는 직원을 가지고 있다!
        public Staff staff; 
        @Override
        public Taste taste() {
            return new Taste("Weird Taste");
        }
        public void work(){...이 이상한 피자는 일도 할 수 있다!...};
    }
    ```
    <br>

4. `구체적인 것`(=레시피)이 `추상화된 것`(=피자)에 의존해야 한다.

    모든 피자는 도우 위에 토핑이 들어가고, 오븐에 굽는다.

    피자의 도우 크기, 토핑 종류, 얼마나 굽는지 구체적인 요소는
    
    피자를 정의하는데 전혀 영향을 미치지 않는다.

    <br>

    ```java
    public Class PotatoPizza extends Pizza{
        public PotatoPizza(Bread bread){
            this.bread = bread;
            this.topping = new Topping("Potato");
            this.size = 15;
        }
        @Override
        public Taste taste() {
            return new Taste("Potato Taste");
        }
    }

    // example
    Pizza pizza = new PotatoPizza(bread);
    pizza.taste(); // 어떤 피자던 먹으면 맛이 난다.
    ```
<br>

---
## **마치며**

<br>

자, 이제 IoC와 DIP를 설명할 수 있는가?

<br>

이렇게 IoC를 사용하고, DIP를 지킨다면, 

확장에 유연하게 대응할 수 있는 

튼튼한 구조를 설계할 수 있을 것이다.

<br/><br/>

_출처_

_[develogs님 블로그](https://develogs.tistory.com/19)_

_[깍돌이님 블로그](https://ipex.tistory.com/entry/3-Spring-개요-2-IOC-및-DI)_

_[10분 테코톡 오찌, 야호의 DI와 IoC](https://www.youtube.com/watch?v=8lp_nHicYd4&list=WL&index=20)_

<br/>

---

```toc

```
