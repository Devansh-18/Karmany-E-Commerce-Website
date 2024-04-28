import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import './ProductCard.css'

function ProductGallery(props) {
    const host = 'http://localhost:4000'
    const productInital=[]
    const [product,setProduct]=useState(productInital)
    const [len,setLen]=useState('0')
   const category = props.category

    const getProduct = async()=>{
        const response = await fetch(`${host}/api/v1/product/?category=${category}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        });
        const json = await response.json()
        console.log(json)
        setLen(json.length)
        setProduct(json)
    }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <>
      <div className='total'> {category} - TOTAL {len} items</div>
      <div className='grid'>
    
  
    {
        product.map((product)=>{
            return   <ProductCard title={product.title} img={product.img} mp={product.mp} sp={product.sp} profit={product.profit}/>
        })
    }
  
   
    </div>
    </>
  )
}

export default ProductGallery
