
import '../styles/Header.css' 
import Image from 'next/image';
import logo from '../public/india-flag.jpg';

import Navbar from "./Navbar"
export const Header = () => {
  return (
   <header>
 <div className='header_container'>
      <div className='header_logo'>
         <Image src={logo} className='logo'></Image>
         <span className='govtIndia'>  भारत सरकार | Goverment of India </span>
      
           </div>
           <div className=' header_skip-content'>
             <ul id='header_UL'>
             <li className='header_skip-content_list'>Skip To Main Content</li>
             <li className='header_skip-content_list'>Loaction</li>
             <li className='header_skip-content_list'>English</li>
              </ul>
              

                </div>
 
     </div>
  




     
    
    
   <Navbar/>
   </header>

    
  )

}
