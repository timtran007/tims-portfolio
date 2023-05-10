import React from 'react'
import Image from 'next/image'
import mealTimeImg from '../../public/images/projects/meal-time.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'

function MealTime() {
  return (
      <div className='w-full'>
      <div className='w-screen h-[50vh] '>
        <div className='absolute top-[5%] left-0 w-full h-[50vh] bg-black/70 -z-10' />
        <Image
          className='absolute top-[5%] -z-20 object-scale-down h-[50vh]'
          src={mealTimeImg}
          alt='/'
          />
        <div className='absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white -z-10 p-2'>
          <h2 className='py-2'>Meal Time</h2>
          <h3>React JS / Rails / PostgreSQL / Render</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-20'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React, Ruby on Rails, PostgreSQL JSON API database, and is hosted on Render. For the client, the test driven development framework was utilized with Jest in order to create the application. Users
            are able to create recipes, add items to shopping list and follow different users. You will
            be able to view detailed recipe information with the ability to edit your own recipes, in addition to 
            deleting. User authentication is available using Rails' BCrypt gem in order to sign in, sign up and log out.
          </p>
          <a
            href='https://github.com/timtran007/meal-time-app'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://drive.google.com/file/d/1RGYHZhAsDqSDB_Wuz59jAvOGzh-lw774/view?usp=share_link'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://meal-time-app.onrender.com/'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4'>Live Site</button>
          </a>
          <p className='pt-16'>*The live site is hosted by Render's free hosting service, so it may take a couple of minutes to start</p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Jest
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Ruby on Rails
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PostgreSQL
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