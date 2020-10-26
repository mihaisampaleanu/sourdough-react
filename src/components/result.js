import React from 'react'

import PropTypes from 'prop-types'

import styles from './result.module.css'

const Result = (props) => {
  return (
    <div className={styles.component}>
      <span>{props.text}</span>
      <span className={styles.text1}>{props.text1}</span>
    </div>
  )
}

Result.defaultProps = {
  text: 'Text',
  text1: 'Text',
}

Result.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Result
