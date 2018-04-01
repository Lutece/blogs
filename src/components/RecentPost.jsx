import React from 'react';
import Link from 'gatsby-link';

export default class RecentPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { edges } = this.props
    console.log(edges);
    return (
      <div>
        {edges.map((post, index) => {
          const { date, title, path } = post.node.frontmatter;
          
          return <Link key={index} exact to={path}>
            <div className="recent-post-conatiner">
              <p className="post-title">{title}</p>
              <p className="post-tag-line"><span className="tag recent-post-conatiner--tag">{date}</span></p>
              <hr />
            </div>
          </Link>
        })}
      </div>
    )
  }
}

{/* <div className="recent-post-conatiner">
          <p>{title}</p>
          <p><span className="tag recent-post-conatiner--tag">{date}</span></p>
        </div> */}