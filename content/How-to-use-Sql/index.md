---
emoji: 🔮
title: 알고리즘에서 써먹는 SQL 문법 정리
date: '2022-10-01 00:00:00'
author: 주녁
tags: sql SQL mysql oracle mssql postgreSql 알고리즘 문법 syntax
categories: how-to
---

지적과 댓글은 언제나 환영합니다!

## INDEX

[1. GROUP 관련](#GROUP)

[2. JOIN 관련](#JOIN)

[3. String 관련](#STRING)

[4. Date 관련](#Date)

[5. 중복제거(DISTINCT) 관련](#DISTINCT)

[6. 빈 값(NULL) 처리](#IFNULL)

[7. 복잡한 쿼리(PL/SQL)](#PLSQL)

<br/><br/>

---

## GROUP 관련<span id="GROUP"></span>

```sql
-- 두 번 이상 쓰인 이름, 해당 이름이 쓰인 횟수
SELECT
    NAME
    , COUNT(NAME)
FROM
    ANIMAL_INS
WHERE
    NAME IS NOT NULL
GROUP BY
    NAME
HAVING
    COUNT(NAME) > 1
ORDER BY
    NAME
```

<br>

```sql
-- 각 시간대별 건수
SELECT
    HOUR(DATETIME) AS HOUR
    , COUNT(HOUR(DATETIME))
FROM
    ANIMAL_OUTS
GROUP BY
    HOUR
HAVING
    HOUR BETWEEN 9 AND 19
ORDER BY
    HOUR
```

<br>

```sql
-- 각 시간대별 건수(빈 값 포함) ★★★
SET @HOUR = -1;
SELECT
    (@HOUR := @HOUR +1) AS HOUR
    , (
        SELECT COUNT(HOUR(DATETIME))
        FROM
            ANIMAL_OUTS
        WHERE
            HOUR(DATETIME)=@HOUR
      ) AS COUNT
FROM
    ANIMAL_OUTS
WHERE
    @HOUR < 23;
```

<br>

---

## JOIN 관련<span id="JOIN"></span>

```sql
-- 한쪽 테이블에만 값이 있는 경우(OUTER JOIN)
SELECT
    OUTS.ANIMAL_ID
    , OUTS.NAME
FROM
    ANIMAL_OUTS OUTS
    LEFT OUTER JOIN
        ANIMAL_INS INS
    ON
        OUTS.ANIMAL_ID = INS.ANIMAL_ID
WHERE
    INS.ANIMAL_ID IS NULL
ORDER BY
    OUTS.ANIMAL_ID
```

<br>

```sql
-- 양쪽 테이블에 일치하는 값이 있고
-- JOIN 후 특정 조건 검색
SELECT
    INS.ANIMAL_ID
    , INS.NAME
FROM
    ANIMAL_INS INS
    JOIN
        ANIMAL_OUTS OUTS
    ON
        INS.ANIMAL_ID = OUTS.ANIMAL_ID
WHERE
    INS.DATETIME > OUTS.DATETIME
ORDER BY
    INS.DATETIME
```

<br>

---

## String 관련 <span id="STRING"><span>

```sql
-- 특정 문자열 조건 검색
SELECT
    ANIMAL_ID
    , NAME
FROM
    ANIMAL_INS
WHERE
    ANIMAL_TYPE = "Dog"
    AND NAME LIKE "%EL%"
ORDER BY
    NAME
```

<br>

```sql
-- 특정 문자열 조건이면 O, X로 표시하기
SELECT
    ANIMAL_ID
    , NAME
    , CASE
        WHEN
            SEX_UPON_INTAKE LIKE '%Neutered%'
            OR SEX_UPON_INTAKE LIKE '%Spayed%'
        THEN 'O'
        ELSE 'X'
    END as '중성화'
FROM
    ANIMAL_INS
ORDER BY
    ANIMAL_ID
```

<br>

---

## Date 관련 <span id="Date"><span>

```sql
-- 날짜끼리 연산
SELECT
    INS.ANIMAL_ID
    , INS.NAME
    -- OUTS.DATETIME - INS.DATETIME
FROM
    ANIMAL_INS INS
    JOIN
        ANIMAL_OUTS OUTS
    ON
        INS.ANIMAL_ID = OUTS.ANIMAL_ID
WHERE
    OUTS.DATETIME > INS.DATETIME
ORDER BY
    OUTS.DATETIME - INS.DATETIME DESC
LIMIT 2
```

<br>

```sql
-- DATETIME 포맷 변경
SELECT
    ANIMAL_ID
    , NAME
    , DATE_FORMAT(DATETIME, '%Y-%m-%d') AS 날짜
FROM
    ANIMAL_INS
ORDER BY
    ANIMAL_ID
```

---

## 중복제거(DISTINCT) 관련 <span id="DISTINCT"><span>

```sql
-- 중복을 제거한 카운트
SELECT
    COUNT(DISTINCT NAME)
FROM
    ANIMAL_INS
```

<br>

---

## GROUP 관련<span id="GROUP"></span>

```sql
-- 이름이 NULL 값일 때 처리
SELECT
    ANIMAL_TYPE
    , IFNULL(NAME, "No name")
    , SEX_UPON_INTAKE
FROM
    ANIMAL_INS
ORDER BY
    ANIMAL_ID
```

<br/>

---

## GROUP 관련<span id="GROUP"></span>

```sql
-- 동적 쿼리를 이용한 평균나이 구하기
CREATE OR REPLACE FUNCTION avg_ages(n INTEGER)
RETURNS NUMERIC AS $$
DECLARE
    r RECORD;
    total NUMERIC := 0;
    query TEXT;
BEGIN
    query := 'SELECT age FROM person LIMIT $1';
    FOR r IN EXECUTE query USING n
    LOOP
        total := total + r.age;
    END LOOP;
    RETURN total / n;
END;
$$ LANGUAGE plpgsql;
```

---
<br>

_참고자료_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 3 : 변수와 상수](http://www.gisdeveloper.co.kr/?p=4573)_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 4 : IF 조건문](http://www.gisdeveloper.co.kr/?p=4582)_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 5 : CASE 조건문](http://www.gisdeveloper.co.kr/?p=4601)_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 6 : 반복문](http://www.gisdeveloper.co.kr/?p=4621)_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 7 : 질의 결과를 반환하는 함수](http://www.gisdeveloper.co.kr/?p=4642)_

```toc

```
