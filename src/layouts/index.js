import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './scss/index.scss';
require("prismjs/themes/prism-okaidia.css");

class Header extends React.Component {
  render() {

    const isRoot = this.props.isRoot;

    return (
      <header>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 600,
            padding: '1.45rem 1.0875rem',
            textAlign: 'center'
          }}
        >
          <h1 className="header--title">
            <Link
              to="/"
              className="header--link"
            >
              In Progress
            </Link>
          </h1>
          <p style={(isRoot) ? {display:'block'} : {display:'none'}}>
            프론트엔드 개발 경험을 기록하는 블로그입니다.
          </p>
          
          {/* <ul className="header--category">
            <li>React</li>
            <li>Webpack</li>
            <li>Mobx</li>
          </ul> */}
        </div>
      </header>
    )
  }
}

class TemplateWrapper extends React.Component {

  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    let isRoot = false;
    if (location.pathname === rootPath) {
      isRoot = true;
    }

    return (
      <div>
        <Header isRoot={isRoot} />
        
        <div
          style={{
            margin: '0 auto',
            maxWidth: 900,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            textAlign: 'center'
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper