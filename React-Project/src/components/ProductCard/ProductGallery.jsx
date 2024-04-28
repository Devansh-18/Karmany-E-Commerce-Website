import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import './ProductCard.css'

function ProductGallery() {
    const host = 'http://localhost:4000'
    const productInital=[]
    const [product,setProduct]=useState(productInital)
   const [len,setLen]=useState('0')

    const getProduct = async()=>{
        const response = await fetch(`${host}/api/v1/product/getAllProducts`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
        });
        const json = await response.json()
        console.log(json)
        setProduct(json)
        setLen(json.length)
    }
  useEffect(()=>{
    getProduct()
  },[])

  

  return (
    <>
          <div className='total'> TOTAL {len} items</div>

      <div className='grid'>
    
  
    {
        product.map((product)=>{
            return   <ProductCard id={product._id} title={product.title} mp={product.mp} sp={product.sp} profit={product.profit} img={product.img}/>
        })
    }
  
   
    </div>
    </>
  )
}

export default ProductGallery
