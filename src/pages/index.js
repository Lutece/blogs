import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h2>개발자 블로그입니다.</h2>
    
    <div>
      <div style={{ marginBottom: '0.5em' }}>연재 중인 글 목록</div>
      <ul>
        <li>
          <Link to="/css">CSS3</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default IndexPage
