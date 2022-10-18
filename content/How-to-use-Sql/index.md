---
emoji: 🔮
title: 알고리즘에서 써먹는 SQL 문법 정리
date: '2022-10-01 00:00:00'
author: 주녁
tags: sql SQL mysql oracle mssql postgreSql 알고리즘 문법 syntax
categories: how-to
---

지적과 댓글은 언제나 환영합니다!

<br>

SQL 코딩테스트와 SQLD 문제 풀이를 중점으로 작성했습니다.

(문법은 Oracle과 PostgreSQL 기준입니다.)

<br>

사용법을 익히는 참고용 정도로 봐주시면 감사하겠습니다.

## INDEX

[1. GROUP 관련](#GROUP)

[2. JOIN 관련](#JOIN)

[3. String 관련](#STRING)

[4. Date 관련](#Date)

[5. 중복제거(DISTINCT) 관련](#DISTINCT)

[6. 빈 값(NULL) 처리](#IFNULL)

[7. 복잡한 쿼리(PL/SQL)](#PLSQL)

[8. DCL(Data Control Language) 관련](#DCL)

[9. DDL(Data Definition Language) 관련](#DDL)

[10. 기타 CASE 모음](#ETC)

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

```sql
-- INNER JOIN 후 평균 구하기
SELECT
    RI.REST_ID,
    RI.REST_NAME,
    RI.FOOD_TYPE,
    RI.FAVORITES,
    RI.ADDRESS,
    RR.SCORE
FROM
    REST_INFO RI
    INNER JOIN (
        SELECT 
            REST_ID, 
            ROUND(AVG(REVIEW_SCORE), 2) SCORE
        FROM 
            REST_REVIEW
        GROUP BY REST_ID
    ) RR
    ON RI.REST_ID = RR.REST_ID
WHERE
    RI.ADDRESS LIKE '서울%'
ORDER BY 
    RR.SCORE DESC,
    RI.FAVORITES DESC

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

## 7. 복잡한 쿼리(PL/SQL)<span id="PLSQL"></span>

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



```sql
--- 재구매가 일어난 상품과 회원 리스트

```

```sql
-- 정렬 기준 세분화
```
## DCL(Data Control Language) 관련 <span id="DCL"><span>

<br>

```sql
-- WHERE, UPDATE를 쓸 수 있도록 권한 부여
GRANT
    SELECT,
    UPDATE
ON
    USERS.list
TO
    managerA

```

## DDL(Data Definition Language) 관련 <span id="DDL"><span>

<br>

```sql
-- 테이블 정의
CREATE TABLE USER_INFO(
    이름    varchar2(10),
    연락처  number not null,
    방문일  date,
    고객번호    varchar2(10) primary key -- PK = Not Null & Unique
);
```

<br>

```sql
-- 테이블 수정
ALTER TABLE USER_INFO 
RENAME TO USERS

-- 컬럼 수정
ALTER TABLE USER_INFO
RENAME COLUMN 연락처
    TO 전화번호

-- 컬럼 속성 변경
ALTER TABLE USER_INFO
MODIFY (이름 varchar(20) NOT NULL);

-- 컬럼 추가
ALTER TABLE USER_INFO
ADD (주소 varchar(10) NOT NULL);

ALTER TABLE USER_INFO
ADD CONSTRAINT 연락처_PK FOREIGN KEY(연락처); -- <제약조건 명>으로 제약조건을 추가 가능

-- 컬럼 삭제
ALTER TABLE USER_INFO
DROP COLUMN 주소;

ALTER TABLE USER_INFO
DROP CONSTRAINT 연락처_PK -- 제약조건도 삭제 가능
```

<br>

```sql
-- 테이블 삭제(구조, 데이터 모두 삭제)
DROP TABLE USER_INFO

-- 테이블 초기화(구조는 남기고, 데이터만 초기화)
TRUNCATE TABLE USER_INFO

-- 데이터 삭제(DML이지만 맥락상 추가함)
DELETE FROM USER_INFO
DELETE USER_INFO -- FROM 생략가능
DELETE FROM USER_INFO
    WHERE 이름 = 'Jane';

```

## 기타 CASE 모음 <span id="ETC"><span>

<br>

```sql
-- 오류 CASE 모음

-- NOT NULL인 컬럼을 채우지 않으면 오류
INSERT INTO USER_INFO (이름, 방문일) VALUES ('Jane', 2020-09-05)

-- 컬럼명 지정이 이뤄지지 않으면 전체값이 들어가야함
INSERT INTO USER_INFO VALUES ('Jane', '010-0000-0000' , 2020-09-05)

```

---



<br>

_참고자료_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 3 : 변수와 상수](http://www.gisdeveloper.co.kr/?p=4573)_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 4 : IF 조건문](http://www.gisdeveloper.co.kr/?p=4582)_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 5 : CASE 조건문](http://www.gisdeveloper.co.kr/?p=4601)_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 6 : 반복문](http://www.gisdeveloper.co.kr/?p=4621)_

_[PostgreSQL의 PL/pgSQL 튜토리얼 – 7 : 질의 결과를 반환하는 함수](http://www.gisdeveloper.co.kr/?p=4642)_

_[SQLD 자격증 문제 풀이](https://www.youtube.com/watch?v=8uP_E6SyiuM&list=PLLyuWzYmiwulMJrt5B-atyAFjEGDRYDDd&index=7)_

```toc

```
