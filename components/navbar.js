import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    function handleNav() {
        setNav(!nav)
    }

    useEffect(() => {
        function handleShadow(){
            if(window.scrollY >= 90) {
            setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, [])


  return (
    <div className={shadow ? 'fixed w-full h-30 shadow-xl z-[100]' : 'fixed w-full h-30'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
                <h1 className='bg-gradient-to-r from-green-200 to-[#1DB954] inline-block text-transparent bg-clip-text'>TT</h1>
            </Link>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/blog'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Blog</li>
                    </Link>
                    <Link href='/contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden'>
                    <AiOutlineMenu onClick={handleNav} size={25}/>
                </div>
            </div>
        </div>
        <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={ nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fff] p-10 ease-in duration-500'
                :  'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <h1 className='bg-gradient-to-r from-green-200 to-[#1DB954] inline-block text-transparent bg-clip-text'>TT</h1>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                           <AiOutlineClose /> 
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something amazing together!</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/about'>
                            <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/skills'>
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/projects'>
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/blog'>
                            <li className='py-4 text-sm'>Blog</li>
                        </Link>
                        <Link href='/contact'>
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#1f2937]'>
                            Let's Connect
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 eas-in duration-300'>
                                <Link href='https://www.linkedin.com/in/tim-tran/'>
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 eas-in duration-300'>
                                <Link href='https://github.com/timtran007'>
                                     <FaGithub />
                                </Link>
                            </div>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 eas-in duration-300'>
                                <Link href='mailto: timtran007@gmail.com'>
                                    <AiOutlineMail />
                                </Link>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 eas-in duration-300'>
                                <Link href='https://drive.google.com/file/d/1QPMKOgPWiTOxGdBrE5TPdbwHKGliVZ1L/view?usp=share_link'>
                                    <BsFillPersonLinesFill />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}