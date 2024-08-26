import projectimg1 from './assets/projectimg1.png';
import projectimg2 from './assets/projectimg2.jpeg';
import projectimg3 from './assets/projectimg3.jpeg';

export default function Project() {
    return <section id='project' className="flex-col py-10 px-5 justify-center bg-secondary text-white">
        <div className="w-full py-5">
        <div className="flex flex-col  px-10 ">
            <h1 className='text-4xl font-bold font-hero-font'>projects</h1>
            <p className='py-5 font-hero-font'> These are some of my best project. I have built These with  React and Tailwind css. check them out.</p>
            </div>
        </div>
        <div className="w-full justify-center"> 
        <div className='flex flex-col md:flex-row py-5 px-5 gap-5'>
            <div className='relative'>
           <img className='h-[200px] w-[400px]'  src={projectimg1} alt='text'/>
           <div className='project-decs'>
            <p className='text-center py-20 px-5 font-hero-font'> A Gym Website. Built with HTML&CSS</p>
           </div>
           </div>
           <div  className='relative'>
           <img className='h-[200px]  w-[400px]' src={projectimg3} alt='text'/>
           <div className='project-decs'>
            <p className='text-center py-20 px-5 font-hero-font'>A Ecommerce website.Built with react</p>
           </div>
           </div>
           <div  className='relative'>
           <img className='h-[200px] w-[400px]' src={projectimg2} alt='text'/>
           <div className='project-decs'>
            <p className='text-center py-20 px-5 font-hero-font'>Food Ecommerce website.Built with react</p>
           </div>
           </div>
      

            </div>
        </div>

    </section>
}