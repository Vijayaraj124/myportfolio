
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header() {
    const [toggleMenu,setToggleMenu]= useState(false);

    return <header className="  flex justify-between py-2 px-5 bg-primary">
        <a className=' font-bold text-black ' href="#">Vijayaraj</a>
        <nav className="hidden md:block">
            <ul className="flex text-1xl font-medium text-white">
                <li><a href="#">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick ={()=> setToggleMenu(!toggleMenu)}className="flex flex-col text-1xl font-medium text-white mobile ">
                <li><a href="#">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
    </header>

}
