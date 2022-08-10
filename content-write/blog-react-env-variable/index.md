---
emoji: 🔮
title: React 환경변수 세팅하기
date: '2022-06-20 00:00:00'
author: 주녁
tags: 블로그 React env 환경변수
categories: 블로그-발전기
---

# React 환경변수 세팅하기

카카오 공유하기 버튼을 만들다가 

API를 노출하면 안되겠다는 생각이 들어서

환경변수를 설정하는 방법을 찾아보았다.

<br/>

## `.env 파일 생성하기`

<br/>

프로젝트 최상위에 `.env` 파일을 생성한다.

그리고 다음과 같이 `REACT_APP_~~~`으로 시작하는 변수를 선언한다.

```yml
  REACT_APP_KAKAO_SHARE_KEY=키값
```

### <u>중요한 것!</u>

`큰 따옴표를 넣으면 안된다.`

`변경했다면 프로젝트를 종료했다가 재시작하자`

(~~이거 왜 안돼? 했던 필자의 경험이다.~~)

<br/><br/>


## `사용하기`

<br/>

그리고 사용할 스크립트로 이동해서 다음과 같이 사용하면 된다.
```javascript
  // 방법1
  function app() {
    const kakaoKey = process.env.REACT_APP_~~~~
  }
  
  // 방법2
  return <p key={process.env.REACT_APP_~~~~}>
```

<br/><br/>


## `+ 환경 분리하기`

<br/>

또한 실행환경(로컬, 개발, 운영 등)에 따라 환경변수 파일을 나눌 수 있다.

.env 하나만 있다면 그 파일이 사용된다.

```yml
    # 순서대로 로컬, 개발, 운영, 일반순으로 우선순위가 동작한다.
    .env.local > .env.development > .env.production > .env
```
<br/><br/>

---

_참고자료 출처_

_[han-py님 블로그](https://han-py.tistory.com/)_

_[코딩하는 갓디노님 블로그](https://goddino.tistory.com/341?category=1080917)_

```toc

```
