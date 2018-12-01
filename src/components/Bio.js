import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
        }}
      >
        <img
          src={profilePic}
          alt={`Reallei`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: rhythm(-1),
            width: rhythm(1),
            height: rhythm(1),
          }}
        />
         <p>
          荒川居民，我的头可不是面团捏的。{' '}
        </p>
      </div>
    )
  }
}

export default Bio
