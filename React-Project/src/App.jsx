import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductDetails from './components/ProductDetail/ProductDetails'
import Login from './components/Login/Login'
import Otp from './components/Register/Otp'
import Register from './components/Register/Register'
import styles from './App.module.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ProductGallery from './components/ProductCard/ProductGallery'
import Cart from './components/Cart/Cart'
import Category from './components/ProductCard/Category'
import User from './components/User/User'
import BestSeller from './components/ProductCard/BestSeller'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/user' element={<User/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
      <Route exact path='/otp' element={<Otp/>}></Route>
      <Route exact path='/gallery' element={<ProductGallery/>}></Route>
      <Route exact path='/cart' element={<Cart/>}></Route>
      <Route exact path='/best-seller' element={<BestSeller/>}></Route>
      <Route exact path='/productdetail' element={ <ProductDetails/>}></Route>
      <Route exact path='/Clothes' element={<Category category='Clothes'/>}></Route>
      <Route exact path='/Electronics' element={<Category category='Electronics'/>}></Route>
      <Route exact path='/Mobile' element={<Category category='Mobile'/>}></Route>
      <Route exact path='/Jewellery' element={<Category category='Jewellery'/>}></Route>
      <Route exact path='/Earphones' element={<Category category='Earphones'/>}></Route>
      <Route exact path='/Books' element={<Category category='Books'/>}></Route>
      <Route exact path='/Grocery' element={<Category category='Grocery'/>}></Route>
  
     
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}
export default App 