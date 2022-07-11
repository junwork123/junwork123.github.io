import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import './style.scss';
import { useScript } from '../hooks/hooks';

function PostHeader({ post, viewCount }) {
  
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	useEffect(() => {
		if(status === "ready"){
      // sdk 초기화하기
      Kakao.Share.createCustomButton({
        container: '#create-kakaotalk-sharing-btn',
        templateId: '79194',
        templateArgs: {
          title:'#title'.text(),
          description:'#title'.text(),
        },
      })
		}
	})

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
      
      <a id="create-kakaotalk-sharing-btn" href="javascript:;">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </a>
    </header>
  );
}

export default PostHeader;
