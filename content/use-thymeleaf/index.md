---
emoji: 🔮
title: 타임리프(thymeleaf) 문법 정리
date: '2022-08-21 00:00:00'
author: 주녁
tags: 스프링 Spring thymeleaf 템플릿엔진 template
categories: how-to
---

지적과 댓글은 언제나 환영합니다!

## thymeleaf 사용법 정리

```javascript
// 간단한 표현
◦ 변수 표현식: ${...}

◦ 선택 변수 표현식: *{...}

◦ 메시지 표현식: #{...}

◦ 링크 URL 표현식: @{...}

◦ 조각 표현식: ~{...}

// 리터럴
◦ 텍스트: 'one text', 'Another one!',…

◦ 숫자: 0, 34, 3.0, 12.3,…

◦ 불린: true, false

◦ 널: null

◦ 리터럴 토큰: one, sometext, main,…

// 문자 연산:
◦ 문자 합치기: +

◦ 리터럴 대체: |The name is ${name}|

// 산술 연산:
◦ Binary operators: +, -, *, /, %

◦ Minus sign (unary operator): -

// 불린 연산:
◦ Binary operators: and, or

◦ Boolean negation (unary operator): !, not

// 비교와 동등:
◦ 비교: >, <, >=, <= (gt, lt, ge, le)

◦ 동등 연산: ==, != (eq, ne)

// 조건 연산:
◦ If-then: (if) ? (then)

◦ If-then-else: (if) ? (then) : (else)

◦ Default: (value) ?: (defaultvalue)

// 특별한 토큰:
◦ No-Operation: _

```

_출처_

_[인프런 스프링 MVC 강의 1편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1#)_

_[인프런 스프링 핵심 원리 기본편](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8/)_

<br/>

---

```toc

```
