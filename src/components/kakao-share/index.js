import React, { Component, useState } from 'react';
import kakaoBtnImg from '../../../assets/kakaotalk_sharing_btn_small.png' 

function KakaoShare(props){
  const [title, setTitle] = useState(props.title);
  const [link, setLink] = useState(props.link);

  const initKakao=()=> {
    window.Kakao.init('d18de93c160aeef56c4f7521dbcb93b1');
  }

  const creatKakaoButton=()=>{
    Kakao.Share.createCustomButton({
      container: '#kakao-share-btn',
      templateId: 79194,
      templateArgs: {
        title: {title}
      }
    });
  }
  const onClickKakao = () => {
    //window.open('https://sharer.kakao.com/talk/friends/picker/link')
    initKakao();
    creatKakaoButton();
  }
  return (
    <div className="Kakao">
      <button id="kakao-share-btn"><img src={kakaoBtnImg} alt="공유하기" onClick={onClickKakao} /></button>
    </div>
  );
}

export default KakaoShare;