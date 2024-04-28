import React ,{useState,useEffect} from 'react'
import Cardtemplate from '../CardTemplate/Cardtemplate'
import styles from './ProductDetails.module.css'

const ProductDetails = () => {

  return (
    
    <div className={styles.container}>
      <div className={styles.pdcontainer} >
        <div className={styles.pdimg} >
            <img src="/src/assets/images/41h5U0ROy6L._AC_SY200_.jpg" alt="product-img" />
        </div>
        <div className={styles.pdtext} >
            <div>20,000</div>
            <div>{product.title}</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio tempore fugiat quibusdam eos amet incidunt vero cumque dignissimos, quam aut sint temporibus laudantium nihil numquam? Beatae sit, fugiat voluptates exercitationem temporibus debitis distinctio earum eveniet suscipit! Quaerat expedita ad nobis hic, eaque autem qui veniam tenetur ipsum quae aliquid explicabo libero, blanditiis recusandae, obcaecati reiciendis tempora! Corrupti ipsum dolores consequuntur nostrum molestias! Libero asperiores, fugiat at dolorem repellendus odio perspiciatis? Aliquid, eaque?</div>
            <div className={styles.buttons} >
              <button>Buy Now</button>
              <button>Add To Cart</button>
            </div>
            
        </div>
      </div>
      <div className={styles.reviews} >
        <div className={styles.reviewContainer} >
          <div className={styles.user}>
            <div className={styles.username} >Devansh</div>
            <div className={styles.rating} >*****</div>
            <div className={styles.comment} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, officia magnam. Atque enim fuga, asperiores fugiat maxime voluptatem.</div>
          </div>
        </div>
      </div>
      <Cardtemplate/>
    </div>
  )
}

export default ProductDetails
