import React from 'react'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>sourdough</title>
        <meta property="og:title" content="sourdough" />
      </Helmet>
      <div className={styles.header}>
        <h1 className={projectStyles.thqHeading1}>Sourdough Calculator</h1>
      </div>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.component}>
            <span>Total Weight</span>
            <input
              type="text"
              id="doughWeightFinal"
              autoFocus="true"
              placeholder="Weight in g"
              className={` ${projectStyles.thqTextInput} ${styles.textinput} `}
            />
          </div>
          <div className={styles.component1}>
            <span>Hidration %</span>
            <input
              type="text"
              id="hydrationDough"
              placeholder="Hidration"
              className={` ${projectStyles.thqTextInput} ${styles.textinput1} `}
            />
          </div>
          <div className={styles.component2}>
            <span>Starter Hidration %</span>
            <input
              type="text"
              id="sourDoughHydration"
              placeholder="Starter Hidration"
              className={` ${projectStyles.thqTextInput} ${styles.textinput2} `}
            />
          </div>
          <div className={styles.component3}>
            <span>Starter %</span>
            <input
              type="text"
              id="sourDoughPercentage"
              placeholder="Starter in g"
              className={` ${projectStyles.thqTextInput} ${styles.textinput3} `}
            />
          </div>
          <div className={styles.component4}>
            <span>Salt %</span>
            <input
              type="text"
              id="saltPercentage"
              placeholder="Salt in g"
              className={` ${projectStyles.thqTextInput} ${styles.textinput4} `}
            />
          </div>
        </div>
        <div className={styles.container3}>
          <button id="submit" className={` ${projectStyles.thqButton} ${styles.button} `}>
            Calculate
          </button>
        </div>
        <div className={styles.container4}>
          <div className={styles.component5}>
            <span>Flour</span>
            <span id="flourRecipe" className={styles.text06}>
              0
            </span>
          </div>
          <div className={styles.component6}>
            <span>Water</span>
            <span id="waterRecipe" className={styles.text08}>
              0
            </span>
          </div>
          <div id="starte" className={styles.component7}>
            <span>Starter</span>
            <span id="sourDoughRecipe" className={styles.text10}>
              0
            </span>
          </div>
          <div className={styles.component8}>
            <span>Salt</span>
            <span id="saltRecipe" className={styles.text12}>
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
