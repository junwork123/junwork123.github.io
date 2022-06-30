import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        &nbsp;powered by
        <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog">
          &nbsp;zoomkoding-gatsby-blog
        </a>
        
        // google adsense
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8568417989764139" crossorigin="anonymous"></script>

        // utterance
        <script src="https://utteranc.es/client.js"
            repo="junwork123/junwork123.github.io"
            issue-term="pathname"
            label="reply"
            theme="github-dark"
            crossorigin="anonymous"
            async>
        </script>
      </p>
    </footer>
  );
}

export default PageFooter;
