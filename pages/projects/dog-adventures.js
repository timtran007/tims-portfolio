import React from 'react'
import Image from 'next/image'
import dogAdventuresImg from '../../public/images/projects/dog-adventures.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'

function DogAdventures() {
  return (
      <div className='w-full'>
      <div className='w-screen h-[50vh] '>
        <div className='absolute top-[5%] left-0 w-full h-[50vh] bg-black/70 -z-10' />
        <Image
          className='absolute top-[5%] -z-20 object-scale-down h-[50vh]'
          src={dogAdventuresImg}
          alt='/'
          />
        <div className='absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white -z-10 p-2'>
          <h2 className='py-2'>Dog Adventures App</h2>
          <h3>React JS / CSS / Sinatra / SQLite3</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-20'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React with custom CSS, Sinatra, and a SQLite3 database. This is an application where users are able to keep track of the various adventures with the dog companions. Users are able to add dogs to their profile, create, read, update and delete adventures for their dogs associated with their account.
          </p>
          <a
            href='https://github.com/timtran007/phase-3-project-dog-adventures-client'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4 mr-8'>Client</button>
          </a>
          <a
            href='https://github.com/timtran007/phase-3-project-dog-adventures-app-server'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4 mr-8'>Server</button>
          </a>
          <a
            href='https://www.loom.com/share/cc093a8eb5ba4dfa9039bfa7b9e1f1a0'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4'>Demo</button>
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
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sinatra
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Active Record
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SQLite3
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

export default DogAdventures