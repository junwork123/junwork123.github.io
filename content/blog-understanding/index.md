---
emoji: ๐ฎ
title: ์ด ๋ธ๋ก๊ทธ ์คํจ์ ๋ํ ์ดํด with React, GraphQL
date: '2022-06-18 00:00:00'
author: ์ฃผ๋์จ
tags: ๋ธ๋ก๊ทธ gatsby React GraphQL
categories: ๋ธ๋ก๊ทธ-๋ฐ์ ๊ธฐ
---

## ํฌ์คํ ๊ธฐ๋ณธ ๊ตฌ์กฐ

ํ์ผ์ด๋ฆ : index.md ๋ก ์ค์ ํด์ผ ์กฐํ์ ์ค์  ๋ฑ ํ๋ฌ๊ทธ์ธ์ด ์๋ํจ.

- emoji : ๐ฎ // ํ์ ์๋

- title : ์ด ๋ธ๋ก๊ทธ ์คํจ์ ๋ํ ์ดํด with React, GraphQL // ํ์

- date : '2021-06-18 00:00:00' // ๋ ์ง(ํ์), ํฌ๋งท ์ง์ผ์ผํจ

- author : ์ฃผ๋์จ // ์์ฑ์

- tags : gatsby React GraphQL // ๋์ด์ฐ๊ธฐ๋ก ๊ตฌ๋ถ

- categories : featured // ๋ธ๋ก๊ทธ ์นดํ๊ณ ๋ฆฌ ์ค ๋ณต์๊ฐ ์๋ ฅ

- ๋ธ๋ก๊ทธ์ ๊ธฐ๋ณธ ์ค์  : gatsby-meta-config.js
    <br/> allMarkdownRemark, siteMetadata๊ณผ ๊ฐ์ ๋ฉํ๋ฐ์ดํฐ ์ค์ 

- ์ฒซ index, about ํ์ด์ง ์ค์  : /pages/*.js

## (์ค์) ํฌ์คํ ์์ `##`์ผ๋ก ์ ๋ชฉ์ด ์์ผ๋ฉด ์๋ ์ค๋ฅ ๋ฐ์
 `TypeError: Cannot read properties of null (reading 'children')`

## (์ฐธ๊ณ ) ํฌ์คํธ ์กฐํ Query
ํฌ์คํธ์ ์ฃผ์(slug)๋ ์๋์์ฑ๋๋ค. -> gatsby-nodes.js์์ ์์ฑ
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