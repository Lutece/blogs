import React from 'react'

import HomeMenuBox from '../components/HomeMenuBox';
import RecentPost from '../components/RecentPost';

class IndexPage extends React.Component {

  render() {
    const { edges } = this.props.data.allMarkdownRemark;

    return (
      <div>
        <h2 className="post-menu--title">Recent</h2>
        <RecentPost edges={edges} />
        {/* <h2 className="post-menu--title" style={{marginTop: '4em'}}>Category</h2>
        <HomeMenuBox /> */}
      </div>
    )
  }  
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;