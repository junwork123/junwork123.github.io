---
emoji: ๐ฎ
title: React ๋ธ๋ก๊ทธ์ ์์๊ธฐ๋ฅ ๋ฃ๊ธฐ - ๊ณต์ ๋ฒํผ ๋ง๋ค๊ธฐ(3)
date: '2022-06-20 00:00:00'
author: ์ฃผ๋์จ
tags: ๋ธ๋ก๊ทธ ๋ฒํผ ์นด์นด์คํก SNS React
categories: ๋ธ๋ก๊ทธ-๋ฐ์ ๊ธฐ
---

*[์ด์ ํธ 2ํธ]()์์ ๊ณ์..*

์ค๋น๊ณผ์ ์ด ๊ธธ์๋ค.

์ด๋ฒ ํธ์์ ๋ง๋ฌด๋ฆฌ๋ฅผ ์ง๋๋ก ํ๊ฒ ๋ค.

<br/><br/>

## **๋ฒํผ์ ๋ง๋ค์ด๋ณด์**

[์นด์นด์ค ๊ฐ๋ฐ์์ผํฐ์ ๋ฌธ์](https://developers.kakao.com/docs/latest/ko/message/js-link#custom-template-msg)๋ฅผ ๋ณด๋ฉด 

์๋์ ๊ฐ์ JavaScript ์ํ์ ์ ๊ณตํ๊ณ  ์๋ค.


```javascript
// 1๋ฒ์ฝ๋ : ์นด์นด์ค์์ ๋ง๋  ๊ณต์ ํ๊ธฐ ๋ฒํผ ์ฌ์ฉํ๊ธฐ
Kakao.Share.createCustomButton({
  container: '#kakaotalk-sharing-btn',
  templateId: ${YOUR_TEMPLATE_ID},
  templateArgs: {
    'title': '์ ๋ชฉ ์์ญ์๋๋ค.',
    'description': '์ค๋ช ์์ญ์๋๋ค.'
  }
});

```

<br/>

```javascript
// 2๋ฒ์ฝ๋ : ์ง์  ๋ง๋  ๋ฒํผ ์ฌ์ฉํ๊ธฐ
Kakao.Share.sendCustom({
  templateId: ${YOUR_TEMPLATE_ID},
  templateArgs: {
    'title': '์ ๋ชฉ ์์ญ์๋๋ค.',
    'description': '์ค๋ช ์์ญ์๋๋ค.'
  }
});

```

์์ ์ ์๋ ๋ ์ฝ๋ ์ค

๋์์ธ์ด๊ณ  ๋ญ๊ณ  `๊ท์ฐฎ๋ค!` = 1๋ฒ์ฝ๋

๋ด๊ฐ ๋ง๋  ๋ฒํผ ์ธ๋ or `ํด๋ฆญ ์ด๋ฒคํธ๋ง` ๊ฐ์ ธ์ฌ๋! = 2๋ฒ์ฝ๋

`์ทจํฅ๊ป` ์ ํํ๋ฉด ๋๋ค.

<br/>

ํ์๋ ์ด ํฌ์คํ์์ ๋๋ค ์ ์ฉํด๋ณด๋๋ก ํ๊ฒ ๋ค.

<br/><br/>

## **1๋ฒ ์ฝ๋ : ๋์์ธ ๊ท์ฐฎ์!**

```javascript

// ์ค์  ์ฌ์ฉํ  ๋ฒํผ
<a id="create-kakaotalk-sharing-btn" href="javascript:;">
  <img
    src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
    alt="์นด์นด์คํก ๊ณต์  ๋ณด๋ด๊ธฐ ๋ฒํผ"
  />
</a>


<script type="text/javascript">
  Kakao.Share.createCustomButton({
    container: '#create-kakaotalk-sharing-btn',
    templateId: '${2ํธ์์ ๋ง๋  ํํ๋ฆฟID}',
    templateArgs: {
      title:'${title}',
      description:'${description}',
    },
  })
</script>

```





<br/><br/>

---


*๋ค์ 3ํธ์ ๊ณ์..*


์ฐธ๊ณ ์๋ฃ ์ถ์ฒ

[[Github Blog] ๊นํ๋ธ ๋ธ๋ก๊ทธ์ ์นด์นด์คํ์ด,ํ ์ค Buy me a coffee ํ์๋ฒํผ ๋ฌ๊ธฐ](https://devyuseon.github.io/github%20blog/add-kakaopay-donate/)


```toc

```