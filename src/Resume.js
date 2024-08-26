
import Resumeimg from './assets/Resumeimg.png';
export default function Resume() {
    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-10 '>
        <div className =' md:w-1/2 flex-justify-center py-10 '>
            <img className='w-[400px] ' src={Resumeimg} alt='@'/>
        </div>
        <div className=' md:w-1/2 font-hero-font py-40  justify-center'>
        <div className='Flex flex-col justify-center  '>
            <h1 className='text-5xl font-bold '>Resume</h1><br/><br/>
            <p className='text-lg text-black'>You can view my resume</p><br/>
            <a className ='btn text-white'href='#'>Download</a>
            
            </div>
           
           
        </div>


    </section>
}
