---
emoji: 🔮
title: 마크다운(Markdown) 작성법 정리
date: '2022-06-20 00:00:00'
author: 주녁
tags: 블로그 markdown 마크다운 md
categories: how-to
---

## 마크다운 작성법

raw html 코드로 보면 이해가 더욱 쉽습니다.

출처 : [내 repository](https://github.com/junwork123/How-To-Code/blob/master/Markdown.md)

[1. 글머리](#header)

[2. 인용문](#quote)

[3. 강조](#emphasize)

[4. 목록](#list)

[5. 링크 및 이미지](#link)

[6. 코드](#code)

---

<br/><br/>

## 1. 글머리<span id="header"></span>

<br/>

# 샵(#) 1개

## 샵(#) 2개

### 샵(#) 3개

#### 샵(#) 4개

##### 샵(#) 5개

###### 샵(#) 6개, 이게 마지막


<br/><br/>

# 2. 인용문<span id="quote"></span>

> "꺾쇠로 인용문을 표시한다"
> "꺾쇠로 인용문을 표시한다2"

> > "꺾쇠 두번으로 중첩된 인용문을 표시한다3"

<br/><br/>

# 3. 강조<span id="emphasize"></span>

기울임 = _별표 한개_, _언더바 한개_ 로 감싼다

두껍게 = **별표 두개**, **언더바 두개** 로 감싼다

**_두개를 같이 사용가능_**

취소선 = ~~물결표시 두개로 감싼다~~

밑줄 = <u>u태그로 감싼다</u>

인라인강조 = `인라인강조는 억음부호로 감싼다`

<br/><br/>

# 4. 목록<span id="list"></span>

1. 순서가 필요한 목록
1. 순서가 필요한 목록(서브)

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen) 1개
  * 별표(asterisks) 1개
  - 더하기(plus sign) 1개

<br/><br/>

# 5. 링크 및 이미지<span id="link"></span>

[네이버, 대괄호(내용)+소괄호(링크)로 묶는다](https://www.naver.com/)

<br/><br/>

# 6. 코드<span id="code"></span>

`(grave accent,억음부호)를 3개를 쓰고 그 옆에 언어의 종류를 쓴다

- HTML

```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

- CSS

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

- Python

```python
s = "Python syntax highlighting"
print

```

# 7. 구분선
마이너스('<br/><br/>') 부호 3개를 쓰면 구분선 생성

<br/><br/>

# 8. 텍스트 정렬

<center>가운데</center>  
<div style="text-align: left"> 왼쪽 </div>
<div style="text-align: right"> 오른쪽 </div>

<br/><br/>

# 9. 접기/접어두기

마크다운 자체로는 지원하지 않지만 html의 details로 활용가능

div markdown=”1” 은 jekyll에서 html사이에 markdown을 인식 하기 위한 코드

<details>
    <summary>접어두기 제목</summary>

    <!-- summary 아래 한칸 공백 두어야함 -->
    <div markdown="1">접어두기 본문</div>
</details>


<br/><br/>

_참고자료_

_[heropy님 블로그](https://heropy.blog/2017/09/30/markdown/)_

_[ihoneymon 포스트](https://gist.github.com/ihoneymon/652be052a0727ad59601)_


