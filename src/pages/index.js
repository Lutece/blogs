import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Link exact to="js/constructor">Constructor</Link>
      </div>
    )
  }  
}

export default IndexPage