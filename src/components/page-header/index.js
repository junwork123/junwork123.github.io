import { Link, StaticQuery, graphql } from 'gatsby';
import React, { useEffect } from 'react';
import Post from '../../models/post';
import PostSearch from '../post-search';
import './style.scss';

function PageHeader({ siteTitle }) {

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                  categories
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <header className="page-header-wrapper">
          <div className="page-header">
            <div className="front-section">
              <Link className="link" to="/">
                {siteTitle}
              </Link>
            </div>
            <div className="trailing-section">
              {/* <Link className="link" to="/about">
                about
              </Link> */}
              <Link className="link" to="/posts">
                posts
              </Link>.
              <PostSearch
                posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))}
              />
            </div>
          </div>
          {/* 구글 애드센스 설정 */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4633249012841159"
            crossorigin="anonymous"></script>
            
        </header>
      )}
    />
  );
}

export default PageHeader;
