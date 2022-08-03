import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import './style.scss';
import useScript from '../hooks/hooks';
import KakaoShare from '../kakao-share/index';

function PostHeader({ post, viewCount }) {

  // kakao SDK import하기
	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	
	// kakao sdk 초기화하기
	// status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init("d18de93c160aeef56c4f7521dbcb93b1");
			}
		}
	}, [status]);	

  return (
    <header className="post-header">
      {post.emoji && <div className="emoji">{post.emoji}</div>}
      <div className="info">
        <div className="categories">
          {post.categories.map((category) => (
            <Link className="category" key={category} to={`/posts/${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </div>

      <h1 className="title" id="title">{post.title}</h1>
      <div className="info">
        <div className="author">
          posted by <strong>{post.author}</strong>,
        </div>{' '}
        {post.date}
        {viewCount && ` · ${viewCount} views`}
      </div>
      <KakaoShare title={post.title} link={post.link}/>
    </header>
  );
}

export default PostHeader;
