import React from 'react'
import Image from 'next/image'
import foodiesImg from '../../public/images/projects/foodies.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'

function MealTime() {
  return (
      <div className='w-full'>
      <div className='w-screen h-[50vh] '>
        <div className='absolute top-[5%] left-0 w-full h-[50vh] bg-black/70 -z-10' />
        <Image
          className='absolute top-[5%] -z-20 object-scale-down h-[50vh]'
          src={foodiesImg}
          alt='/'
          />
        <div className='absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white -z-10 p-2'>
          <h2 className='py-2'>Foodies</h2>
          <h3>React JS / Rails / PostgreSQL / Render</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-20'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React, Ruby on Rails, PostgreSQL, and is hosted on Render. At first the database was built with SQLite3; however, it was upgraded to PostgreSQL in order to be deployed through Render and GitHub. Users can sign up for an account and authenticate themselves through email and password to log in and log out of their account. Within the app, all users are able to see reviews of curated restaurants in Austin, TX. Users with accounts can add reviews as well as edit and delete their reviews. 
          </p>
          <a
            href='https://github.com/timtran007/restaurant-review-app'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://www.loom.com/share/6d05b1c8f11b4b4493c5cb1154b220b1'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://foodies-app-fwz1.onrender.com/'
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
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Ruby on Rails
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PostgreSQL
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Render
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

export default MealTime