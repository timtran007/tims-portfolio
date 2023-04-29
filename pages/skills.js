import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Layout, { siteTitle } from '../components/layout'

export default function Skills() {
    return (
        <>
        <Layout>
            <Head>
                {siteTitle}
            </Head>
        </Layout>
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='pt-16 text-xl tracking-widest uppercase text-[#1DB954]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/images/skills/react.png'
                                    alt='ReactJS'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/images/skills/javascript.png'
                                    alt='JavaScript'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/images/skills/tailwind.png'
                                    alt='TailwindCSS'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TailwindCSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/images/skills/html.png'
                                    alt='HTML5'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML5</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/images/skills/css.png'
                                    alt='CSS3'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS3</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/images/skills/rails.png'
                                    alt='Ruby on Rails'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Rails</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/images/skills/ruby.png'
                                    alt='Ruby'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Ruby</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/images/skills/postgresql.png'
                                    alt='PostgreSQL'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
        </>
    )
}