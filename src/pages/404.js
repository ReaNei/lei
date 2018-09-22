import React from 'react'
import { Link } from "gatsby"
import Bio2 from '../components/Bio2'

const NotFoundPage = () => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <h3 style={{
        fontFamily: 'Montserrat, sans-serif'
        }}
    >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/test/about'}
          >
            What You Need &#x1F364;
          </Link>
    </h3>
    <h1>404 NOTFOUND</h1>
    <Bio2 />
  </div>
)

export default NotFoundPage
