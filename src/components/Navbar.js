
import Image from 'next/image';
import emblem from '../public/emblem-logo.png';
import Skill from '../public/skill-india-logo.png';
import '../styles/Navbar.css'

export default function Navbar() {
  return (
     <div className="navbar">
    <div className="nav_logo"> 
    
         <Image src={emblem} className='emblem'></Image>
         <Image src={Skill} id='skill'></Image>

        
       
           </div>
           
       <div className='nav-list'>
         <ul id='nav_ul'>
          <li >Schemes</li>
          <li >Recommendation</li>
          <li >Skill Courses</li>
          <li >Job Exchange</li>
          <li>Skill Centre</li>
          <li >Skill India Map</li>
            </ul>
          
       
         </div>
         

         <div className='nav_btn'>
            <button type='button'>REGISTER</button>
            <button type='button'>LOGIN</button>
             </div>

             
             
            
       
    </div>
    
         
   
  )
  
}
