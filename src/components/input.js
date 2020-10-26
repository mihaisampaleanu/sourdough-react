import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './input.module.css'

const Input = (props) => {
  return (
    <div className={styles.component}>
      <span>{props.text}</span>
      <input type="text" className={` ${projectStyles.thqTextInput} ${styles.textinput} `} />
    </div>
  )
}

Input.defaultProps = {
  text: 'Text',
}

Input.propTypes = {
  text: PropTypes.string,
}

export default Input
