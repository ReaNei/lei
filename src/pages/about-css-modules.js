import React from "react"
//import { Link } from "gatsby"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import Bio3 from '../components/Bio3'

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (

  <Container>

    <h1>About </h1>
    <Bio3 />
    <p>CSS Modules are cool</p>
    <User
      username="Reallei"
      avatar="https://png.icons8.com/color/500/3498db/sonic-the-hedgehog-1.png"
      excerpt="You just hit a route that doesn't exist... the sadness."
    />

  </Container>
)