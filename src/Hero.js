import kingimg from './assets/kingimg2.png'
import { FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";
export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-32  bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font first_line wow animate__animated animate__backInDown '>Hi, <br/>Im <span className='text-black py-20 first_line wow animate__animated animate__backInDown'> Vijayaraj </span>
            <h3 className='text-2xl py-4 first_line wow animate__animated animate__backInDown'> Im Front-end developer</h3>
            </h1>
            
            <div className='flex py-10'>
                <a href='#' className='pr-5 hover:text-white first_line wow animate__animated animate__backInDown'><FaTwitter size={40}/></a>
                <a href='#'className='pr-5  hover:text-white first_line wow animate__animated animate__backInDown'><FaLinkedin size={40}/></a>
                <a href='#'className='pr-5  hover:text-white first_line wow animate__animated animate__backInDown'><FaInstagram size={40}/></a>
            </div>
            </div>
           <img className='md:w-1/3 first_line wow animate__animated animate__backInDown'src={kingimg}/>



    
    </section>
    
}