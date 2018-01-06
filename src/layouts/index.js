import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './font.scss';

const Header = () => (
  <div
    style={{
      margin:'0 4em 1.45em 4em',
      borderBottom: '1px solid #000'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1020,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#000',
            textDecoration: 'none'
          }}
        >
          Lutece 블로그
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Tech blog by Lutece' },
        { name: 'keywords', content: 'javascript,css,html,react,webpack,mobx,git,gulp' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1020,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
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
