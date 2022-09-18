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

[4. 정규식 관련](#regex)

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
    Integer.parseInt("10"); // 숫자 → 문자
    Character.getNumericValue('10'); // 문자 → 숫자
    "hello".toCharArray(); // 문자열 → 배열

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
## 정규식 괸련<span id="regex"></span>
```java

```
<br>

---
## 유용한 함수<span id="useful"></span>
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
