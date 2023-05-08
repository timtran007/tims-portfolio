import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import computerImg from '../public/images/computer-2.jpg'
import Navbar from '../components/navbar';
import Head from 'next/head';
import { siteTitle } from '../components/layout';

function Contact() {
  return (
    <div>
        <Navbar>
            <Head>
                {siteTitle}
            </Head>
        </Navbar>
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='pt-8 text-xl tracking-widest uppercase text-[#1DB954]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={computerImg} alt='/' />
                            <h2 className='pb-4 pt-8'>Tim Tran</h2>
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer', 'Front End Developer', 'React Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                                />
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 eas-in duration-300'>
                                        <FaLinkedin />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 eas-in duration-300'>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 eas-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 eas-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                </div>
            </div>
                    {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type='email'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type='text'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea
                                    className='border-2 rounded-lg p-3 flex border-gray-300'
                                    rows='10'
                                >
                                </textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Contact