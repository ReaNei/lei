import React from 'react'
import { Link } from "gatsby"
import Bio2 from '../components/Bio2'

const NotFoundPage = () => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <h5 style={{
        fontFamily: 'Montserrat, sans-serif'
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
    </h5>
    <h1>404 NOT FOUND</h1>
    <Bio2 />
  </div>
)

export default NotFoundPage
