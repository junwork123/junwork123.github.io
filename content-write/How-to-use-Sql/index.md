---
emoji: 🔮
title: SQL 문법 정리(사례 위주)
date: '2022-09-16 00:00:00'
author: 주녁
tags: sql SQL mysql postgreSql 알고리즘 문법 syntax
categories: how-to
---

지적과 댓글은 언제나 환영합니다!

## INDEX

[1. group 관련](#string)

<br/><br/>

---
## group 관련<span id="string"></span>
```sql
select 
    department_id,
    id,
    salary
from
    employee
where
    1=1 and
    salary > 100
group by
    department_id
``` 
<br>

---

_출처_


<br/>

---

```toc

```
