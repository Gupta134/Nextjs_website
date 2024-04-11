
import Image from 'next/image';
import sectionImg from '../public/Hero_section.jpg';
import '../styles/Herosection.css'


export const HeroSection = () => {
  return (
    
    <div className='Hero_section'>
     <div className='hero_section-img'>
         <Image src={sectionImg} id='img'/>
         
         </div>
    
    
    </div>
  )
}
