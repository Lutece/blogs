import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss';

const Header = () => (
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
          읽고 다시 쓰는 블로그
        </Link>
      </h1>
      <p>
          개발과 관련된 개념들을 배우고 기록하는 블로그입니다.
      </p>
      <ul className="header--category">
        <li>React</li>
        <li>Webpack</li>
        <li>Mobx</li>
      </ul>
    </div>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="읽고 다시 쓰기"
      meta={[
        { name: 'description', content: 'Tech blog by Lutece' },
        { name: 'keywords', content: 'javascript,css,html,react,webpack,mobx,git,gulp' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 900,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        textAlign: 'center'
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
