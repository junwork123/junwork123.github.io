import { Link } from 'gatsby';
import React from 'react';
import './style.scss';
import KakaoShare from '../kakao-share/index';

function PostHeader({ post, viewCount }) {

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
      <KakaoShare post={post}/>
    </header>
  );
}

export default PostHeader;
