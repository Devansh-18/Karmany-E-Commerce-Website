import React,{useState} from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import bars from '../../assets/svg/bars.svg'
import cross from '../../assets/svg/cross.svg'
import user from '../../assets/svg/user-icon.svg'

const Navbar = () => {
    const [log,setLog]=useState(true)
    const [click,setClick]=useState(false)

    

    function handleClick(){
        setClick(true)
    }
    
    function handleClicks(){
        setClick(false)
    }
  return (
    <header>
        <nav>
        <div className={styles.responsive} >
               
               {click? <>  <img src={cross} className={styles.imagesvgs} onClick={handleClicks}></img>
               <ul>
                   <li><Link to="/best-seller">Best Seller</Link></li>
                   <li><Link to="/gallery">Today's Deal</Link></li>
                   <li><Link to="/gallery">New Comeup</Link></li>
                   <li><Link to="/Grocery">Grocery</Link></li>
                   <li><Link to="/Clothes">Clothes</Link></li>
                   <li><Link to="/Electronics">Electronics</Link></li>
                   <li><Link to="/Mobile">Mobiles</Link></li>
                   <li><Link to="/Earphone">Earphones</Link></li>
                   <li><Link to="/Books">Books</Link></li>
                   <li><Link to="/Jewellery">Jewellery</Link></li>
                   <li><Link to="/gallery">Shoes</Link></li>
               </ul></> : <img src={bars} className={styles.imagesvg} style={{"top":"-43vh"}} onClick={handleClick}></img>}
           
           </div>
            <div className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-111.3 -21.5 964.6 129">
                    <path
                        d="M49.82 0h8.25c6.51.69 13.22 3.2 17.36 8.51 4.17 5.14 5.34 11.95 5.32 18.4 0 18.7-.01 37.39 0 56.09h-26c-.03-15.33.07-30.65-.04-45.97-.07-4.54-.92-9.92-5.28-12.32-7.96-4.14-18.07-.94-23.49 5.87.14 17.47.02 34.95.06 52.42H0V2h26c-.01 3.09.01 6.19-.02 9.28C32.17 4.66 40.86.84 49.82 0zm73.97 0h9.64c8.73.67 17.93 2.95 24.4 9.21 6.11 5.83 8.41 14.55 8.41 22.77.03 17.01 0 34.01.01 51.02h-26.01c.01-2.58.02-5.15.06-7.72-8.28 8.33-21.15 11.37-32.46 8.77-7.29-1.87-14.15-6.47-17.64-13.27-3.97-7.7-3.88-17.25-.3-25.08 3.78-8 12.45-12.56 20.98-13.46 10.39-1.06 21.79 1.23 29.42 8.79-.24-4.63.86-10.07-2.41-13.92-3.58-4.33-9.62-5.36-14.94-5.16-8.05.08-15.56 3.76-21.75 8.69-3.2-6.11-6.55-12.13-9.66-18.28C100.64 4.95 112.13.82 123.79 0m-6.34 51.38c-3.79 1.92-5.36 6.88-3.54 10.67 1.74 3.3 5.43 5.04 8.99 5.53 6.21.81 13.14-.69 17.42-5.54-.39-3.09 1.13-7.31-2.21-9.19-5.94-3.98-14.27-4.89-20.66-1.47zM226.89 0h7.43c8.43.48 16.26 5.75 19.24 13.75 5.83-7.63 14.8-12.64 24.32-13.75h7.44c5.01.62 10.19 2.11 13.9 5.73 4.7 4.35 6.55 10.96 6.54 17.21-.03 20.02-.01 40.04-.01 60.06H280c-.01-16.38.02-32.76-.01-49.14.11-4.03-1.56-8.63-5.66-10.08-6.9-2.56-14.95.82-19.07 6.65-.47 2.48-.25 5.04-.28 7.55.05 15.01.01 30.01.02 45.02h-26c.01-15.66-.02-31.32.02-46.99-.06-3.54-.13-7.55-2.71-10.3-2.8-2.93-7.26-3.12-11.02-2.48-4.64.82-8.26 4.11-11.33 7.47.09 17.43.01 34.87.04 52.3h-26V2h26.01c-.02 3.09 0 6.18-.03 9.27C210.02 4.99 218.25 1.02 226.89 0zM351.5 0h8.02c12.21.84 24.01 7.45 30.43 17.97 6.3 9.76 7.62 21.68 7.05 33.03-19.22.03-38.45-.07-57.67.05 1.83 4.63 5.04 8.89 9.77 10.83 10.01 4.33 21.87 1.43 30.47-4.73 3.72 5.73 7.56 11.37 11.33 17.07-8.81 7.4-20.5 10.22-31.77 10.73-13.03.58-26.78-3.56-35.8-13.33-14.74-16.06-14.23-43.68 1.1-59.21C331.5 5.08 341.4.83 351.5 0m-2.69 21.91c-5.16 1.53-8.54 6.26-9.77 11.31 11.11.06 22.23.04 33.34.01-.83-3.28-2.12-6.66-4.91-8.78-5.21-4.04-12.54-4.28-18.66-2.54z"
                        fill="#8dc63f" />
                    <g fill="#717174">
                        <path
                            d="M481.95 0h9.29c11.05.83 22.09 5.68 28.73 14.82-5.62 5.25-11.25 10.49-16.9 15.7-6.01-8.25-18.49-10.05-26.72-4.18-7.85 5.62-9.26 17.17-5.41 25.55 3.78 8.37 14.43 12.08 22.87 9.04 3.78-1.15 6.65-3.99 9.22-6.85 5.64 5.34 11.34 10.6 16.95 15.98-5.47 7.12-13.5 11.97-22.27 13.76-14.39 3.05-30.61.28-41.8-9.69-17.54-15.31-18.21-45.6-1.72-61.91C461.54 4.89 471.71.9 481.95 0z" />
                        <path
                            d="M558.87 0H568c10.46.87 20.9 5.02 28.19 12.75 15.6 15.85 15.31 44.28-.57 59.83-6.93 7.13-16.62 11.12-26.42 12.08-12.79 1.41-26.61-1.69-36.25-10.55-17.06-15.09-18.23-44.25-2.68-60.8C537.53 5.24 548.16.85 558.87 0m-.47 23.58c-13.12 3.83-15.79 22.17-8.13 32.13 6.13 8.39 20.21 8.25 26.44.05 5.83-7.73 5.78-19.57-.33-27.13-4.26-5.2-11.67-6.78-17.98-5.05zM663.39 0h7.05c8.49.43 16.41 5.7 19.42 13.76C695.73 6.1 704.78 1.02 714.38 0h7.06c5.7.61 11.62 2.59 15.41 7.12 3.22 3.74 4.63 8.65 5.15 13.47V83h-25.75c0-16.34.01-32.67.01-49.01.14-3.97-1.37-8.53-5.36-10.1-6.99-2.78-16.07.68-19.52 7.24-.32 17.28-.03 34.58-.13 51.87h-26c.02-15.68-.03-31.36.03-47.03-.08-3.16-.09-6.57-1.93-9.28-1.59-2.4-4.48-3.61-7.27-3.71-5.88-.6-11.54 2.59-15.15 7.05-1 1.42-.58 3.31-.72 4.94.09 16.01.02 32.02.04 48.03h-26V2h26.01c-.02 3.09 0 6.17-.06 9.26C646.37 5.01 654.63.89 663.39 0z" />
                    </g>
                    <path
                        d="M403.46 69c.22-9.73 8.49-18.93 18.39-19.17 8.37.51 15.23 8.09 16.35 16.16.72 4.71-1.9 9.91-6.55 11.44-5.7 1.8-9.31 7.32-15.25 8.57h-2.33c-7.33-1.88-11.04-9.94-10.61-17m10.69-8.74c-3.09 3.64-3.39 8.68-2.53 13.19.48.17 1.44.53 1.91.7-.55-2.33-1.55-4.78-.65-7.16 1.43-4.65 5.55-7.62 8.88-10.88-2.82.73-5.83 1.65-7.61 4.15m14.01-2.03c2.81 3.86 5.53 7.96 5.43 12.97 2.99-4.93-.13-11.34-5.43-12.97m-7.42 5.79c3.31.26-1.1-3.17 0 0m-.36.56c-.48.54-.48.54 0 0l.36-.56-.36.56m1.31 12.08c1.8-.4 4.04.01 5.49-1.41 2.85-2.58 2.91-7.17.92-10.28-1.05 4.44-3.82 8.06-6.41 11.69m-13.7-.1c2.14 4.72 8.26 7.14 12.58 3.73-4.17-1.33-8.4-2.45-12.58-3.73z"
                        fill="#231f20" />
                </svg>

            </div>
            <div className={styles.searchbox}>

                <input type="text" placeholder="Search for products"/>
                <span>
                    <svg fill="#000000"  version="1.1" id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 488.4 488.4" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z" />
                            </g>
                        </g>
                    </svg>
                </span>
            </div>
            <div className={styles.navbar}>
           
                <ul>
                    <li><Link title="Home" to="/">Home</Link></li>
                    <li><Link target="_blank" title="Contact Us" to="/contactUs">Contact Us</Link></li>
                    <li><Link target="_blank" title="About" to="/about">About</Link></li>  
                    <li><Link title="Cart" to="/cart">Cart </Link> <img src="src/assets/images/shopping_cart_FILL1_wght400_GRAD0_opsz24.svg" alt="Cartimg"/> </li> 
                   {localStorage.getItem('token')?<li ><Link target="_blank" to="/user">User</Link></li>:<li ><Link target="_blank" to="/login">Login</Link></li> }
                </ul>
               
            </div>
            <img src={user} className={styles.imageuser}></img>
        </nav>
        <nav className={`${styles.navbar2} ${styles.navbar}`}>           
            <div className={styles.iconslogo} >
                <ul>
                    <li><Link to="/best-seller">Best Seller</Link></li>
                    <li><Link to="/gallery">Today's Deal</Link></li>
                    <li><Link to="/gallery">New Comeup</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <li><Link to="/Clothes">Clothes</Link></li>
                    <li><Link to="/Electronics">Electronics</Link></li>
                    <li><Link to="/Mobile">Mobiles</Link></li>
                    <li><Link to="/Earphones">Earphones</Link></li>
                    <li><Link to="/Books">Books</Link></li>
                    <li><Link to="/Jewellery">Jewellery</Link></li>
                    <li><Link to="/gallery">Shoes</Link></li>
                </ul>
            </div>
          
            
        </nav>
    </header>
  )
}

export default Navbar
