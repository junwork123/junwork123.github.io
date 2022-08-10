import React from "react";
import { useScript } from "../hooks"

function kakaoInit() {
        
    // kakao SDK import하기
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    //kakao sdk 초기화하기
    //status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
    useEffect(() => {
        if (status === "ready" && window.Kakao) {
            // 중복 initialization 방지
            if (!window.Kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                window.Kakao.init("d18de93c160aeef56c4f7521dbcb93b1");
            }
        }
    }, [status]);	

    // useEffect(() => {
    //   initKakao(); //
    //   url = window.location.pathname;
    //   console.log(url);
    // }, []);

    //자바스크립트키로 카카오 init
    // const initKakao = () => {
    //   if (window.Kakao) {
    //     const kakao = window.Kakao;
    //     const kakaoKey = process.env.REACT_APP_KAKAO_SHARE_KEY;
    //     if (!kakao.isInitialized()) {
    //       console.log(key);
    //       console.log(kakaoKey);
    //       kakao.init(kakaoKey);
    //       kakao.init(key);
    //     }
    //   }   
    // };

    return <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>;
    
}

export default kakaoInit;