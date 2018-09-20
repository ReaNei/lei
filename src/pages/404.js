import React from 'react'
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div align="center">
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
            to={'/'}
          >
            What You Need &#x1F364;
          </Link>
        </h3>
    <h1>404 NOTFOUND</h1>
    <p>
    <img src="https://png.icons8.com/color/500/3498db/sonic-the-hedgehog-1.png" alt="What You Need" width="128" />
    </p>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
