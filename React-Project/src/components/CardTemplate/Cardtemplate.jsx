import React from 'react'
import Cards from '../Cards/Cards'
import styles from './Cardtemplate.module.css'

const Cardtemplate = () => {
  return (
    <div>
      <div className={`${styles.cardtemplate} ${styles.cardtemplatetodaysdeal}`}>
            <div className={styles.cardtemplateheading} >
                <span>Today's Deal</span>
            </div>
            <div className={styles.cardcontainer}>
                <Cards img="/src/assets/images/41h5U0ROy6L._AC_SY200_.jpg" />
                <Cards img="/src/assets/images/41tj+1+nAFL._AC_SY200_.jpg" />
                <Cards img="/src/assets/images/41uGjvXbeBL._AC_SY200_.jpg" />
                <Cards img="/src/assets/images/41bSG-H9TpS._AC_SY200_.jpg" />
                <Cards img="/src/assets/images/41xbneWY5SL._AC_SY200_.jpg" />
                <Cards img="/src/assets/images/41RijAKoN1L._AC_SY200_.jpg" />
                <Cards img="/src/assets/images/41c4C6Sp1AL._AC_SY200_.jpg" />
            </div>
        </div>
    </div>
  )
}

export default Cardtemplate
