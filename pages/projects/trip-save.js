import React from 'react'

function TripSave() {
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
          <h2 className='py-2'>Trip Save</h2>
          <h3>React JS / JavaScript / SQLite3</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-20'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was primarily built using React JS and JavaScript. There is also a SQLite3 JSON Database file that hosts the 'back end' functionality for the application. Within this application, users are able to use the front end client to create trips, set budget, and add to their savings of the trips that they would like to take. Users have the option to quickly add preset amounts to their savings or add a custom amount.
          </p>
          <a
            href='https://github.com/timtran007/phase-02-project-tripsave'
            target='_blank'
            rel='noreferrer'
            >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://www.loom.com/share/a811939746e6420681095558a3c2104e'
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
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SQLite3
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

export default TripSave