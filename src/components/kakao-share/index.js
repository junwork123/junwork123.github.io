import React, { Component, useState, useEffect } from 'react';

function KakaoShare({post, key}){ 
  let url = "/";
  useEffect(() => {
    url = window.location.pathname;
    console.log(url);
  }, []);

  const shareWithKakao=()=>{
    // window.Kakao.Share.sendCustom({
    //   templateId: 79194,
    //   templateArgs: {
    //     title: post.title,
    //     description: '주녁, 데브노트',
    //     link: url
    //   }
    // });
    window.Kakao.Link.sendDefault({ 
      objectType: 'feed',
      content: {
        title: post.title,
        description: '주녁, 데브노트',
        imageUrl: logo,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ]
    });
  }

  return (
    <div id="kakao-share-btn" onClick={shareWithKakao}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_small.png"
          alt="카카오톡 공유 보내기 버튼"
        />
    </div>
  );
}

export default KakaoShare;