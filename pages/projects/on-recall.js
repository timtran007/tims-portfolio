import React from 'react'
import Image from 'next/image'
import onRecallImg from '../../public/images/projects/on-recall.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'

function OnRecall() {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] '>
      <div className='absolute top-[5%] left-0 w-full h-[50vh] bg-black/70 -z-10' />
      <Image
        className='absolute top-[5%] -z-20 object-scale-down h-[50vh]'
        src={onRecallImg}
        alt='/'
        />
      <div className='absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white -z-10 p-2'>
        <h2 className='py-2'>On Recall</h2>
        <h3>JavaScript / HTML / CSS / FDA.gov API</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-20'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
          This app was primarily built using HTML, CSS and JavaScript. On Recall is pulling from the FDA.gov API for materials that are currently on recall. Within this application, users are able to sort by State, which items they want to see on recall. Users have the option to remove items from lists that they do not possess, which allows the process of elimination to take place in order to ensure they have no items on recall.
        </p>
        <a
          href='https://github.com/timtran007/phase-1-project'
          target='_blank'
          rel='noreferrer'
          >
          <button className='px-8 py-2 mt-4 mr-8'>Code</button>
        </a>
        <a
          href='https://www.loom.com/share/d9a2c368603d4b31baa70f0f0f6a7b4d'
          target='_blank'
          rel='noreferrer'
          >
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> JavaScript
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> FDA.gov API
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> HTML
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> CSS
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> JSON API
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

export default OnRecall