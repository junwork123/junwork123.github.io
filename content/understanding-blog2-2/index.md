---
emoji: 🔮
title: 블로그 빌드 및 배포 자동화 - 2
date: '2022-06-20 00:00:00'
author: 주녘씨
tags: 블로그 React 빌드 배포 자동화
categories: 블로그-발전기
---
## **자동 배포 권한을 얻기 위한 토큰 생성**

먼저 GitHub 계정의 [Developer settings](https://github.com/settings/apps) 메뉴에서 토큰(Personal access tokens)을 만들어야 한다.

![메뉴 진입 화면](setting.png)

<br/><br/>

`Generate new token` 버튼을 누르게 되면,

아래와 같은 화면이 나타나지만 어려울 것 하나없다!

![메뉴 진입 화면2](setting2.png)

- Note : 이 토큰의 목적(설명)

- Expiration : 토큰의 만료기간(최소 7일 / Custom - 년도지정 / No Expiration - 무제한)

- Select scopes : 이 토큰으로 할 수 있는 활동들(우리는 `repo`만 체크해도 된다.)

<br/><br/>

---

## **GitHub Action에서 yml 스크립트 작성하기**

<br/>

이제 배포할 `repogitory의 actions 메뉴`로 가보자.

![메뉴 진입 화면3-0](setting3-0.png)

![메뉴 진입 화면3](setting3.png)



스크린샷 처럼 `set up a workflow yourself` 메뉴를 누르면

드디어 최종장에 돌입하게 된다. ~~필자는 이 메뉴 찾는데 10분이나 걸렸다~~

결론적으로 GitHub Action을 통한 자동 배포는

yml 스크립트를 작성해야 한다.

> 배울게 또 늘어나? 😵

싶겠지만(~~싫겠지만~~) 생각외로 간단하니 조금만 더 읽어보자.

(바로 적용하고 싶다면 설명은 건너뛰고 [코드](#code) 위주로 보아도 좋다)

예시를 통해 각 키워드마다 의미를 빠르게 파악하고 응용하자.

```yml
    name: blog deploy << 이 스크립트의 제목

    # 어떤 행동을 할때마다 실행할지
    on: 
        # master, release/*-alpha라는 이름의 브랜치에 push가 발생할 때마다
        push:
            branches: 
                - master
                - release/*-alpha 
        
        # gh-pages 브랜치에 pull_request가 발생할 때마다
        pull_request:
            branches: 
                - gh-pages

        # cron 표현식으로 `UTC 기준 매일 월~금 오전2시에 실행`
        schedule: 
            - cron: "0 0 2 ? * MON-FRI *"

        # 직접 "Run workflow"버튼을 누를때만 실행
        workflow_dispatch: 

    # 실행할 작업을 정의
    jobs:
        # 'build'라는 이름의 job은 (job이름은 맘대로 적어도 됨)
        # 'matrix'라는 변수를 정의하고
        # 'npm install and build'라는 이름의 작업을
        # 우분투 최신버전에서 동작한다.
        # 동작내용은 [브랜치 체크아웃 > npm설치 > 빌드 > 메시지 출력]이다.

        build: 
            # 환경 변수 정의
            strategy: 
                matrix:
                    node-version: 16.x
            
            runs-on: ubuntu-latest

            name: npm install and build

            # 다음 동작을 순서대로 실행
            steps:
                # 'uses' == GitHub에 미리 정의된 workflow 사용
                # 'master' 브랜치를 체크아웃
                - name: checkout branche
                    uses: actions/checkout@master 
                  
                - name: Install Dependencies
                    run: |              # 여러 키워드를 동시 실행
                        npm install
                        npm run build --if-present
                        echo build started 
                
        # 'cname-copy'라는 job은 'build'가 선행되어야 한다.
        cname-copy:  
            needs: build 

            # 개인 도메인 설정파일을 빌드 결과물에 복사한다.
            run: cp CNAME public/

        # 'deploy'라는 작업은 [build, test]가 선행되어야 하고,
        # steps 순서에 따라 동작한다.
        deploy:
            name: deploy changes
            
            needs: [build, cname-copy]

            runs-on: ubuntu-latest

            env:
                GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
                GH_PAT: ${{ secrets.API_KEY }}
                BUILD_DIR: 'public/'
```

더 자세한 내용은 아래를 참조하자

> [카카오웹툰은 GitHub Actions를 어떻게 사용하고 있을까?](https://fe-developers.kakaoent.com/2022/220106-github-actions/)

> [Actions의 표현식](https://docs.github.com/en/actions/learn-github-actions/expressions)

> [Actions의 이벤트](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

> [cron 표현식](cron.png) // 이건 여러군데서 쓰이니 알아두면 좋을거야!



## 반영할 yml 코드 <span id="code"></span> 

```yml

```


```toc

```