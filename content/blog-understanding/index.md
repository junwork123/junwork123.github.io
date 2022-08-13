---
emoji: 🔮
title: 이 블로그 스킨에 대한 이해 with React, GraphQL
date: '2022-06-18 00:00:00'
author: 주녁
tags: 블로그 gatsby React GraphQL
categories: 블로그-발전기
---

## 포스팅 기본 구조

파일이름 : index.md 로 설정해야 조회수 설정 등 플러그인이 작동함.

- emoji : 🔮 // 필수 아님

- title : 이 블로그 스킨에 대한 이해 with React, GraphQL // 필수

- date : '2021-06-18 00:00:00' // 날짜(필수), 포맷 지켜야함

- author : 주녁 // 작성자

- tags : gatsby React GraphQL // 띄어쓰기로 구분

- categories : featured // 블로그 카테고리 중 복수개 입력

- 블로그의 기본 설정 : gatsby-meta-config.js
  <br/> allMarkdownRemark, siteMetadata과 같은 메타데이터 설정

- 첫 index, about 페이지 설정 : /pages/\*.js

<br/><br/>

## (중요) 포스팅 안에 `##`으로 제목이 없으면 아래 오류 발생

`TypeError: Cannot read properties of null (reading 'children')`

<br/><br/>

## (참고) 포스트 조회 Query

포스트의 주소(slug)는 자동생성된다. -> gatsby-nodes.js에서 생성

```js
//src\pages\index.js
query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
            node {
                id
                excerpt(pruneLength: 500, truncate: true)
                frontmatter {
                    categories
                    title
                    date(formatString: "MMMM DD, YYYY")
                }
                fields {
                    slug
                }
            }
        }
    }

```

```toc

```
