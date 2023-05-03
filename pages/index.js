import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'


export default function Home({ allPostsData }) {
  return (
    <div>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
      <div className='w-full md:h-screen lg:h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            <p className='pt-20 uppercase text-sm tracking-widest text-gray-600'>
                Let's Build Something Together
            </p>
            <h1 className='py-4 text-gray-700'>
                Hi, I'm <span className='text-[#1DB954]'>Tim</span>
            </h1>
            <Image
              className='py-6 rounded-full h-auto max-w-lg mx-auto'
              src='/../public/images/tims-profile-pic.jpg'
              height={200}
              width={200}
              alt="Tim"
            />
            <h2 className=' flex py-2 text-gray-700 justify-center items-center'>
                A&nbsp;
                <span className='flex'>
                  <Typewriter
                      options={{
                      strings: ['Full Stack Developer', 'Front End Developer', 'React Developer'],
                      autoStart: true,
                      loop: true,
                      }}
                  />
                </span>
            </h2>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
              I am a software developer looking to leverage 6+ years of experience in marketing to collaborate with various teams to ship products. With keen attention to detail and a passion for exploring best practices to help shape quality code, while solving interesting problems with technology.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 eas-in duration-300'>
                <FaLinkedinIn />
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
    </div>
    
  </div>
  );
}
