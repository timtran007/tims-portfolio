import React from 'react'
import Image from 'next/image'
import dogWalkingImg from '../../public/images/projects/dog-walking-htx.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'

function DogWalkingHtx() {
  return (
      <div className='w-full'>
      <div className='w-screen h-[50vh] '>
        <div className='absolute top-[5%] left-0 w-full h-[50vh] bg-black/70 -z-10' />
        <Image
          className='absolute top-[5%] -z-20 object-scale-down h-[50vh]'
          src={dogWalkingImg}
          alt='/'
          />
        <div className='absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white -z-10 p-2'>
          <h2 className='py-2'>Dog Walking HTX</h2>
          <h3>WordPress / Elementor / Hostinger</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-20'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a client website that was built using WordPress Content Management System and hosted with Hostinger. The components were built using Elementor and the form is connected via WPForms. Google Analytics V4 was also set up with the website in order to track website data as well as people filling out the lead form.
          </p>
          <a
            href='http://dogwalkinghtx.com/'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4'>Live Site</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> WordPress
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Elementor
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Hostinger
              </p>
            </div>
          </div>
        </div>
        <Link href='/projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default DogWalkingHtx