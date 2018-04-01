import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Leaf from '../components/Leaf';

import 'bulma';
import './scss/index.scss';

require("prismjs/themes/prism-okaidia.css");

class Header extends React.Component {
  render() {

    const { isRoot, pathname } = this.props;

    return (
      <header>
        <Leaf pathname={pathname} />
        <div className="header--container">
          <nav className="header--menu-container">
            <ul>
              <li>
                <Link to="/" className="header--link">
                  Lutece
                </Link>
              </li>
            </ul>  
          </nav>
          <div className="header--title" style={(isRoot) ? {display:'block'} : {display:'none'}}>
            주니어 프론트엔드 개발자의 블로그
          </div>
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

    const isRoot = location.pathname === rootPath;

    return (
      <div>
        <Header isRoot={isRoot} pathname={location.pathname} />
        
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
          Copyright © 2018 Lutece
        </footer>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
