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
        <div className="header--container">
          <h1 className="header--title">
            <Link
              to="/"
              className="header--link"
            >
              Lutece
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
            paddingTop: 0,
            textAlign: 'center'
          }}
        >
          {this.props.children()}
        </div>

        <footer>
          Copyright © 2018 Lutece.
        </footer>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
