import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

// gatsby-browser.js
require("../css/scroll-bar.css")
require("../css/prism920.css")

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h3
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: '0 3px 0 0 currentColor',
              textDecoration: 'blink',
              color: 'inherit',
            }}
            to={'/'}
          >
            What
          </Link><a href="https://github.com/ReaNei">YouNeed</a>
        </h3>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-0.2),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            What You Need &#x1F364;
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )

  }
}

export default Template
