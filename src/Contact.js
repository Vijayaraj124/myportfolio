import { VscArrowCircleUp } from "react-icons/vsc";

export default function Contact() {
    return <section id="contact" className='flex flex-col bg-secondary  text-white px-5 py-30'>
       
        <div className=' flex font-hero-font py-40 flex-col  items-center'>
           <h1 className='text-5xl font-bold '>Contact</h1><br/><br/>
            <p className='pb-5'>If you want to discuss more in detail,please contact me.</p><br/>
            <p className="py-2"><span className="font-bold">Email :</span> vijayaraj902580@gmail.com</p>
            <p className="py-2"><span className="font-bold">Phone :</span> 9025808214</p>
            </div>
            <div className=' flex relative justify-end '>
            <a href='#' className=' fixed bottom-10  right-0 pr-5 hover:text-white first_line wow animate__animated animate__backInDown'><VscArrowCircleUp size={35}/></a>
            </div>


    </section>
}
