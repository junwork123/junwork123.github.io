import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;powered by
        <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog">
          &nbsp;zoomkoding-gatsby-blog
        </a>
      </p>
        
      <script src="https://utteranc.es/client.js"
              repo="junwork123/blog-comments"
              issue-term="pathname"
              label="reply"
              theme="github-dark"
              crossorigin="anonymous"
              async>
      </script>
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    </footer>
  );
}

export default PageFooter;
