import React from 'react'

import Helmet from 'react-helmet'

import styles from './recipes.module.css'

const Recipes = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Recipes - sourdough</title>
        <meta property="og:title" content="Recipes - sourdough" />
      </Helmet>
      <div className={styles.container1}>
        <div className={styles.container2}></div>
        <p className={styles.text}>Paragraph</p>
      </div>
      <div className={styles.container3}>
        <div className={styles.container4}></div>
        <p className={styles.text1}>Paragraph</p>
      </div>
    </div>
  )
}

export default Recipes
