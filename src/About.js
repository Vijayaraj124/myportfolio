// import { BriefcaseIcon } from '@heroicons/react/16/solid'
import kingimg from './assets/kingimg1.png'
export default function About() {
    return <section id='About' className='flex flex-col md:flex-row bg-primary px-10 '>
        <div className =' md:w-1/2 '>
            <img src={kingimg} alt='@'/>
        </div>
        <div className=' md:w-1/2 font-hero-font py-20  justify-center'>
        <div className='Flex flex-col justify-center '>
            <h1 className='text-4xl font-bold '>About Me</h1><br/><br/>
            <p className='text-lg text-black'>Hi, I’m vijayaraj, a front-end developer. I specialize in developing innovative web application. My projects have been recognized for their user-friendly design and robust functionality.</p><br/>
            <p className='text-lg  text-black'>I’m passionate about leveraging technology to solve real-world problems and improve user experiences. I enjoy staying up-to-date with the latest tech trends and continuously learning new skills.</p><br/>
            <p className='text-lg  text-black'>When I’m not coding, I love hiking in the mountains and exploring new coffee shops. I’m also an  enjoy capturing moments from my travels.</p><br/>
           <p className='text-lg  text-block'>Thanks for visiting my profile! Feel free to reach out if you’d like to connect or collaborate.</p>
            </div>
        </div>


    </section>
}
