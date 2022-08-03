import React, { Component, useState, useEffect } from 'react';
import useScript from '../hooks/hooks';
import kakaoBtnImg from '../../../assets/kakaotalk_sharing_btn_small.png' 
import logo from '../../../assets/logo_low.png' 

function KakaoShare({post}){ 
  // kakao SDK import하기
	//const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	// kakao sdk 초기화하기
	// status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	// useEffect(() => {
	// 	if (status === "ready" && window.Kakao) {
	// 		// 중복 initialization 방지
	// 		if (!window.Kakao.isInitialized()) {
	// 			// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
	// 			window.Kakao.init("d18de93c160aeef56c4f7521dbcb93b1");
	// 		}
	// 	}
	// }, [status]);	

  let url = "/";
  useEffect(() => {
    initKakao(); //
    url = window.location.pathname;
    console.log(url);
  }, []);

  //자바스크립트키로 카카오 init
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("d18de93c160aeef56c4f7521dbcb93b1");
      }
    }
  };

  const shareWithKakao=()=>{
    Kakao.Share.sendCustom({
      templateId: 79194,
      templateArgs: {
        title: post.title,
        description: '주녁, 데브노트',
        link: url
      }
    });
    // window.Kakao.Link.sendDefault({ 
    //   objectType: 'feed',
    //   content: {
    //     title: post.title,
    //     description: '주녁, 데브노트',
    //     imageUrl: logo,
    //     link: {
    //       mobileWebUrl: url,
    //       webUrl: url,
    //     },
    //   },
    //   social: {
    //     likeCount: 286,
    //     commentCount: 45,
    //     sharedCount: 845,
    //   },
    //   buttons: [
    //     {
    //       title: '웹으로 보기',
    //       link: {
    //         mobileWebUrl: url,
    //         webUrl: url,
    //       },
    //     },
    //     {
    //       title: '앱으로 보기',
    //       link: {
    //         mobileWebUrl: url,
    //         webUrl: url,
    //       },
    //     },
    //   ]
    // });
  }

  return (
    <div className="Kakao" id="kakao-share-btn" onClick={shareWithKakao}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_small.png"
          alt="카카오톡 공유 보내기 버튼"
        />
    </div>
  );
}

export default KakaoShare;