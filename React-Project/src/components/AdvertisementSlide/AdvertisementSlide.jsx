import React from 'react'
import styles from './AdvertisementSlide.module.css'

const AdvertisementSlide = () => {
  return (
    <main>
      <div className={styles.topcontainer} >
            <div className={`${styles.bgcurtain} ${styles.bgcurtainanime}`} >
                <div className={styles.phone}>
                    <div className={styles.phonetext} >
                        <span>Best Deals of today</span>
                        <span>IPhone 14 Max Pro</span>
                        <span>Hurry Up! Buy Now</span>
                        <span>Just at</span>
                        <span>Rs. 1,59,998</span>
                    </div>
                    <div className={styles.phoneimage} >
                        <img src="src/assets/images/iphone.jpg" alt="Iphone"/>
                    </div>
                </div>
            </div>
            <div className={styles.bgcurtain2} >
                <div className={`${styles.clothes} ${styles.phone}`}>
                    <div className={`${styles.clothtext} ${styles.phonetext}`}>
                        <span>Under 999</span>
                        <span>Branded</span>
                        <span>Few hours left</span>
                        <span>Purchase Now</span>
                        <span>Purchase Now</span>
                    </div>
                    <div className={`${styles.clothimage} ${styles.phoneimage}`}>
                        <img src="src/assets/images/clothesbg.jpg" alt="Clothes"/>
                    </div>
                </div>
            </div>
            <div className={styles.bgcurtain3}>
                <div className={`${styles.shoes} ${styles.phone}`}>
                    <div className={`${styles.shoestext} ${styles.phonetext}`}>
                        <span>Under 999</span>
                        <span>Branded</span>
                        <span>Few hours left</span>
                        <span>Purchase Now</span>
                        <span>Purchase Now</span>
                    </div>
                    <div className={`${styles.shoesimage} ${styles.phoneimage}`}>
                        <img src="src/assets/images/clothesbg.jpg" alt="Clothes"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default AdvertisementSlide
