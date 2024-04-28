import React from 'react'
import styles from './Cards.module.css'
const Cards = ({img}) => {
  return (
    <div>
      <div className={`${styles.card} ${styles.card1}`}>
        <div className={styles.cardimage}>
          <img className={styles.imgofcard} src={img} alt=""/>
        </div>
          <div className={styles.cardtext}>
            <div className={styles.dealdiv}>
              <span>Up to 20% off</span>
              <span>Limited time</span>
            </div>
            <div>Deals on Campus Shoes</div>
          </div>
      </div>            
    </div>
  )
}

export default Cards
