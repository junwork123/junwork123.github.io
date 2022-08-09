---
emoji: 🔮
title: React 블로그에 소셜기능 넣기 - 공유버튼 만들기(3)
date: '2022-06-20 00:00:00'
author: 주녁
tags: 블로그 버튼 카카오톡 SNS React
categories: 블로그-발전기
---

_[이전편 2편]()에서 계속.._

이번 편에서는 본격적으로 React 코드를 작성해보자

<br/><br/>

## **버튼을 만들어보자**

[카카오 개발자센터의 문서](https://developers.kakao.com/docs/latest/ko/message/js-link#custom-template-msg)를 보면

아래와 같은 JavaScript 샘플을 제공하고 있다.

```javascript
// 1번코드 : 카카오에서 만든 공유하기 버튼 사용하기
Kakao.Share.createCustomButton({
  container: '#kakaotalk-sharing-btn',
  templateId: ${YOUR_TEMPLATE_ID},
  templateArgs: {
    'title': '제목 영역입니다.',
    'description': '설명 영역입니다.'
  }
});

```

<br/>

```javascript
// 2번코드 : 직접 만든 버튼 사용하기
Kakao.Share.sendCustom({
  templateId: ${YOUR_TEMPLATE_ID},
  templateArgs: {
    'title': '제목 영역입니다.',
    'description': '설명 영역입니다.'
  }
});

```

위에 제시된 두 코드 중

디자인이고 뭐고 `귀찮다!` = 1번코드

내가 만든 버튼 쓸래 or `클릭 이벤트만` 가져올래! = 2번코드

`취향껏` 선택하면 된다.

<br/>

필자는 이 포스팅에서 둘다 적용해보도록 하겠다.

<br/><br/>

## **1번 코드 : 디자인 귀찮아!**

```javascript

// 실제 사용할 버튼
<a id="create-kakaotalk-sharing-btn" href="javascript:;">
  <img
    src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
    alt="카카오톡 공유 보내기 버튼"
  />
</a>


<script type="text/javascript">
  Kakao.Share.createCustomButton({
    container: '#create-kakaotalk-sharing-btn',
    templateId: '${2편에서 만든 템플릿ID}',
    templateArgs: {
      title:'${title}',
      description:'${description}',
    },
  })
</script>

```

<br/><br/>

---

_다음 3편에 계속.._

참고자료 출처

[[Github Blog] 깃허브 블로그에 카카오페이,토스 Buy me a coffee 후원버튼 달기](https://devyuseon.github.io/github%20blog/add-kakaopay-donate/)

```toc

```
