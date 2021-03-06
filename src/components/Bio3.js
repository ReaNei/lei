import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile.png'
import { rhythm } from '../utils/typography'

class Bio3 extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Reallei`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(1),
            height: rhythm(1),
          }}
        />
        <p>
          Oops...{' '}
        </p>
      </div>
    )
  }
}

export default Bio3
