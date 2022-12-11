---
emoji: 🔮
title: TDD, Clean Code With Me
date: '2022-12-11 00:00:00'
author: 주녁
tags: TDD Test Driven Developement Clean Code
categories: how-to
---

지적과 댓글은 언제나 환영합니다!

이 글은 박재성님의 `자바 플레이그라운드 with TDD, 클린코드` 강의를 바탕으로 작성되었습니다.

<br/><br/>

# TDD

<br>

## TDD를 하는 이유

- 디버깅 시간을 줄여준다.

- 동작하는 문서 역할을 한다.

- 변화에 대한 두려움을 줄여준다.

<br>

---

## TDD 프로세스

- 실패하는 테스트를 구현한다.

- 테스트가 성공하도록 프로덕션 코드를 구현한다.

- 프로덕션 코드와 테스트 코드를 리팩토링한다.

(테스트 코드도 중복이 발생할 수 있기 때문)

<br>

---

## TDD 원칙

1. 실패하는 단위 테스트를 작성할 때까지 프로덕션 코드를 작성하지 않는다.

2. 컴파일은 실패하지 않으면서 실행이 실패하는 정도로만 단위 테스트를 작성한다.

3. 현재 실패하는 테스트를 통과할 정도로만 실제 코드를 작성한다(미래까지 걱정 X)

<br>

---

## TDD 방법론 (필수는 아님!)

<br>

### 큰 갈래에서

- 테스트 하기 어려운 부분을 분리하라 (랜덤, UI 등)

- 함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게 만들어라.

- 모든 로직에 단위 테스트를 구현한다. 단, UI(System.out, System.in) 로직은 제외

- 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.

<br>

### 작은 갈래에서

- 코드 컨벤션을 지키면서 프로그래밍한다.

- indent(인덴트, 들여쓰기) depth를 2가 넘지 않도록 구현한다. 1까지만 허용한다.

        예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
        depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.

- else 예약어를 쓰지 않는다.

        if 조건절에서 값을 return하는 방식으로 구현
        switch/case도 허용하지 않는다.

- 3항 연산자를 쓰지 않는다.

<br>

## 테스트 가능 구조

<br>

테스트는 언제 어디서든 실행하면, 성공해야 한다.

테스트 하기 어려운 구조(Random, Private Method 등)를 

어떻게하면 큰 변경없이 테스트를 성공할 수 있을까?

<br>

- 메소드가 접근자가 private인 경우, protected로 변경하면 테스트 가능 구조로 변경할 수 있다.

```java
// CarTest.java
@Test
public void MoveTest(){
        Car car = new Car(){
                @Override
                protected in gerRandomNo(){
                        // return new Random().nextInt(9);
                        // 랜덤값을 고정값으로 대체할 수 있다.
                        return 6;
                }
        }
        car.move();
        assertThat(car.getPosition()).isGreaterThan(0);
}

```

        기존 레거시 코드가 있을 때, 
        메소드 시그니처(이름, 매개변수 등)을 변경하지 않고
        테스트 가능하도록 만드는 과도기적인 단계에서 사용하는 방법이다.

        결과적으로는 public으로 테스트 가능하도록
        메소드, 클래스의 역할을 적절하게 분리하는 것이 필요하다.

---

<br>

- 인터페이스를 활용하여 분리하라

```java
@FunctionalInterface
public interface MovingStrategy {
    public boolean movable();
}

@Test
void move() {
        MovingStrategy strategy = new MovingStrategy() {
            @Override
            public boolean movable() {
                // return getRandomNo() >= OIL_THRESHOLD;
                // 랜덤값을 고정값으로 대체할 수 있다.
                return false;
            }
        }; }; // MovingStrategy strategy = () -> false 로 대체 가능
        assertThat(car.move(strategy)).isEqualTo(Car.DEFAULT_DISTANCE);
        assertThat(car.move(() -> true)).isEqualTo(Car.DEFAULT_DISTANCE + 1);
}
```

        Spring이 아니여도 DI를 사용할 수 있다.
        Interface를 통해 동작을 분리하고 
        외부에서 주입받도록 하라.

<br>

# Clean Code

## 클린코드 가이드 (필수는 아님!)

<br>

### 1. 의미 있는 이름

<br>

- 의도를 분명히 밝혀라

        좋은 이름을 지으려면 시간이 걸리지만,
        좋은 이름으로 절약하는 시간 이 훨씬 더 많다.

- 그릇된 정보를 피하라

        서로 흡사한 이름을 사용하지 않도록 주의한다.
        유사한 개념은 유사한 표기법을 사용한다.

- 의미 있게 구분하라

        이름이 다르면 의미도 달라져야 한다.
        숫자를 붙이거나(a1, b2...), 불용어를 추가하는 방식(__Info, __Data...)은 적절하지 않다.

- 인터페이스와 구현 클래스

        인터페이스의 접두어 'I'를 붙이는 것(IShape -> Shape)보다
        ShapeFactory처럼 구현체의 의도를 드러낼 수 있는 것이 좋다.

- 클래스 이름

        클래스 이름과 객체 이름은 명사나 명사구가 좋다.
        (ex : Customer, WikiPage, AddressParser)
        Manager, Processor, Data, Info 등과 같은 단어는 피한다.
        동사는 사용하지 않는다.

- 메소드 이름

        메소드 이름은 동사나 동사구가 적합하다.
        (ex : postPayment, deletePage, save)
        접근자, 변경자, 조건자는 자바 빈 표준에 따라 get, set, is를 붙인다.
        생성자를 중복해 정의할 때는 정적 팩토리 메소드를 사용한다.

- 개념 하나에 단어 하나를 사용하라

        추상적인 개념 하나에 단어 하나를 선택하고 고수하라.
        일관성 있는 어휘는 코드를 사용할 프로그래머가 반갑게 여길 선물이다.

- 줄여쓰지 않는다(축약 금지)

<br>

## 2. 경계

- 외부 코드 사용하기

        Map, List와 같은 Collection을 외부에 노출하는 경우
        사용자는 너무 많은 인터페이스에 노출된다.

        경계에서 사용할 클래스를 만들어 인터페이스를 숨긴다면,
        경계 클래스 내부 구조가 바뀌더라도 외부 인터페이스에 변경사항이 발생하지 않는다.

- 도메인 객체에는 Setter/Getter 메소드를 가능한 사용하지 마라.

        DTO에서는 Setter/Getter를 사용하되 
        도메인 객체는 가능한 사용하지 않도록 노력하라.
        대신, 직접 객체를 조작하는 대신
        메시지를 보낼 수 있도록 동작을 이관하자.

        객체를 비교할 때, 
        equals() Override로 객체 == 객체가 되도록 비교하라.
        객체지향적인 프로그래밍의 기본이다.

        값을 증감 등 연산할 때, 
        메시지를 보낼 수 있도록 해라.


- 모든 원시값과 문자열을 포장한다.

        primitive값을 직접 조작하는 대신 Class로 포장하자.
        이 때도 역시, Setter/Getter를 피해야 한다.

        final 키워드로 멤버변수를 불변(immutable) 상태를 만드는 것은 좋은 전략이다.
        다만, 값의 증감 등 연산할 때 인스턴스가 만들어질 수 있기 때문에
        적절한 타협이 필요하다.

```java
public Position move(int toMove){
        // 조작할 일이 많이 없거나, 안정성(불변 상태) 우선인 경우
        // return new Position(position + toMove);

        // 성능(인스턴스 Garbage Collection 최소) 우선인 경우
        this.distance = this.distance + toMove;
        return this;
}
```
        
- 역할 분리를 위해 클래스를 분리하는 것은 긍정적이다.

        클래스 분리는 성능에 미치는 부정적 영향보다,
        유지보수와 테스트를 쉽게 하는 긍정적 영향이 더 크다.        

- 다양한 생성자를 지원하는 것은 좋은 방법 중 하나이다.

```java
// Position.java
public static final int DEFAULT_DISTANCE = 1;
public Position(){
        this(DEFAULT_DISTANCE);
}
public Position(int position) {
        if(position < 0){
                throw new IllegalArgumentException("position은 음수 값을 가질 수 없습니다");
        }
        this.position = position;
}
```

<br/>

---

<br>

_참고자료_

_[최범균님의 테스트 가능 구조](https://www.youtube.com/watch?v=WBVjBwKx47I&list=WL&index=53)_

```toc

```
