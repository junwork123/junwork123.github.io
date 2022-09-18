---
emoji: 🔮
title: Java 문법 정리
date: '2022-09-16 00:00:00'
author: 주녁
tags: JAVA java algorithm 알고리즘 문법 syntax
categories: how-to
---

지적과 댓글은 언제나 환영합니다!

## INDEX

[1. 문자열 관련](#string)

[2. Collection 관련](#collection)

[3. 형 변환 관련](#cast)

[4. 정규표현식 관련](#regex)

[5. 유용한 함수](#useful)

<br/><br/>

---
## 문자열 관련<span id="string"></span>
```java
// 분자열 분리
StringTokenizer st= new StringTokenizer("문자열 입니다", " ");
String str = st.nextToken(); // "문자열"
String[] arr = str.split(""); // ["문", "자", "열"]
``` 
<br>

---
## Collection 관련<span id="collection"></span>
```java
/* Header Library */
import java.util.Collection;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

import java.util.*; // 급할떄만 쓰자

/* Array */
    // 선언
    int[] arr = new int[] {1,2,3};
    int[] _arr = { 1, 2, 3, 4, 5 };  
    int[][] arr2 = {{1,2,3,4,5},{5,4,3,2,1}};

    // 합계
    Arrays.stream(arr).sum(); 

    // 출력
    Arrays.toString(arr);
    Arrays.deepToString(arr2);

    // 복사
    Arrays.copyOfRange(arr, start, end);

    // 중복제거
    Arrays.stream(A).distinct().toArray();

/* List */
    // 중복제거
    list.stream().distinct().collect(Collectors.toList());

    // 정렬        
    Collections.sort(list); // 오름차순        
    Collections.sort(list, Collections.reverseOrder()); // 내림차순    
    Collections.sort(list, String.CASE_INSENSITIVE_ORDER); // 오름차순 (대소문자 구분X)

    // 최대, 최소
    Collections.max(list);
    Collections.min(list);

/* HashMap */
    // 순회
    hashMap.forEach((k,v) -> {...});
```
<br>

---
## 형 변환 관련<span id="cast"></span>
```java
/* 기본형 변환 */
    int a = Integer.parseInt("10"); // 문자 → 숫자(10진수)
    int b = Integer.parseInt("10", 16); // 문자 → 숫자(16진수)
    int c = Character.getNumericValue('10'); // char → 숫자

    String s = String.valueOf(10); // 숫자 → 문자(10진수)
    
    char[] charArr = "hello".toCharArray(); // 문자열 → 배열

/* 리스트 → 배열 */
    String arr[] = list.toArray(new String[list.size()]); 
        // new String[0] : 같은 크기, 
        // new String[list.size()+1] : null로 채워서 append

/* String 배열 → 리스트 */
    List<String> list = new ArrayList<>(Arrays.asList(arr)); // 새로운 객체를 생성
    List<String> list2 = Stream.of(arr).collect(Collectors.toList()); // 스트림 사용
        // Arrays.asList(arr) : 원본 배열을 참조하는 리스트 반환(같이 변경됨)

/* int 배열 → 리스트 ★★★ */
    int[] arr = { 1, 2, 3 };

    // 반복문 사용
    List<Integer> intList = new ArrayList<>();        
    for (int item : arr) {
        intList.add(item);        
    }

    // 스트림 사용
    List<Integer> intList = Arrays.stream(arr)
                                .boxed()                        
                                .collect(Collectors.toList());
```
<br>

<br>

---
## 정규표현식 괸련<span id="regex"></span>
```java
String pattern = "^[0-9]*$"; //숫자만
String val = "123456789"; //대상문자열

boolean regex = Pattern.matches(pattern, val);

```
### `Pattern` 클래스 주요 메서드

<br>

`compile(String regex)` : 주어진 정규표현식으로부터 패턴을 만듭니다.

`matcher(CharSequence input)` : 대상 문자열이 패턴과 일치할 경우 true를 반환합니다.

`asPredicate()` : 문자열을 일치시키는 데 사용할 수있는 술어를 작성합니다.

`pattern()` : 컴파일된 정규표현식을 String 형태로 반환합니다.

`split(CharSequence input)` : 문자열을 주어진 인자값 CharSequence 패턴에 따라 분리합니다.

<br>

---
### `Parttern` 플래그 값 사용(상수)

<br>

`Pattern.CANON_EQ` : None표준화된 매칭 모드를 활성화합니다.

`Pattern.CASE_INSENSITIVE` : 대소문자를 구분하지 않습니다. 

`Pattern.COMMENTS` : 공백과 #으로 시작하는 주석이 무시됩니다. (라인의 끝까지).

`Pattern.MULTILINE` : 수식 ‘^’ 는 라인의 시작과, ‘$’ 는 라인의 끝과 match 됩니다.

`Pattern.DOTALL` : 수식 ‘.’과 모든 문자와 match 되고 ‘\n’ 도 match 에 포함됩니다.

`Pattern.UNICODE_CASE` : 유니코드를 기준으로 대소문자 구분 없이 match 시킵니다.

`Pattert.UNIX_LINES` : 수식 ‘.’ 과 ‘^’ 및 ‘$’의 match시에 한 라인의 끝을 의미하는 ‘\n’만 인식됩니다.

<br>

---
### 정규표현식 문법

<br>

[Jj]ava : Java 혹은 java

[^aeiou] : 소문자 모음 제외

^abc : abc로 시작해야함

xyz$ : xyz로 종료되어야함

\d{3} : 숫자가 3개 있어야 함

\d+ : 숫자가 1개 이상

\d? : 숫자가 1개던지 없던지

반복횟수
* : 0회 이상 반복

+ : 1회 이상 반복

? : 0회 or 1회

{m} : m회 반복

{m,n} : m회에서 n회까지 반복

{m,} : m회 이상

매칭조건 . : 줄바꿈 문자를 제외한 모든 문자와 매치됨

^ : 문자열의 시작과 매치

$ : 문자열의 마지막과 매치

[] : 문자 집합 중 하나 ex : [0-9]

| : 또는(or)을 의미

{} : 정규식을 그룹으로 묶음

이스케이프 기호 \ : 역슬래쉬 문자 자체

\d : 모든 숫자 [0-9]

\D : 숫자가 아닌 문자 [^0-9]

\w : 숫자 또는 문자와 매치됨

\W : 숫자 또는 문자가 아닌 것과 매치됨

\b : 단어(숫자, 영문자의 연속)의 경계

\B : 단어(숫자, 영문자의 연속)의 경계가 아닌 것

<br>

---
## 유용한 함수<span id="useful"></span>

<br>

```java

/* Graph 생성 */
    // 단 방향 [출발노드,도착노드] 가 주어졌을 때
    int[][] arr=[[1,3],[1,5],[3,2],[3,4],[5,4],[5,6],[2,4],[4,6]];

    ArrayList<ArrayList<Integer>> list=new ArrayList<>();
    // 인접리스트 초기화
    for(int i=0;i<=arr.length;i++){
        list.add(new ArrayList<>());
    }

    // 양방향 인접리스트
    for(int i=0;i<arr.length;i++){
        int start=arr[i][0], end=arr[i][1];
        list.get(start).add(end);
        list.get(end).add(start);
    }

```
<br>

---

_출처_

_[gwang920님 블로그](https://gwang920.github.io/java/Java-condingGrammer/)_

_[hianna님 블로그](https://hianna.tistory.com/551)_

_[hygge님 블로그](https://velog.io/@hygge/Java-코딩테스트-문법-속성-정리)_

<br/>

---

```toc

```
