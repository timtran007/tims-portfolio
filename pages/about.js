import Layout, { siteTitle } from "../components/layout"
import Head from 'next/head';
import Image from "next/image";


export default function Blog() {
    return (
        <>
        <Layout>
            <Head>
                {siteTitle}
            </Head>
        </Layout>
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className='m-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>
                        // I am not your normal developer...
                    </p>
                    <p className='py-2 text-gray-600'>
                        I have spent the last 6 years professionally working in a marketing capacity. From my early roots in performance marketing to my latest endeavor as a product marketer, I love to position products in the market to see results. Throughout my career, there has always been a special place for User Experience design, where I have built websites and landing pages using WordPress, Elementor and WPEngine to serve the right message, to the right audience, at the right time.
                    </p>
                    <p>
                        I knew the importance of learning basic coding languages as Marketer, in 2017 I taught myself HTML, CSS & a bit of JavaScript to build my very first website. I have always had an interest in technology when I started out my career in marketing. In September of 2022 I decided to enroll in Flatiron School's coding bootcamp to learn modern languages and frameworks to build web applications and take my technical skills to another level. 
                    </p>
                    <p className='py-2 text-gray-600'>
                        I graduated from the coding bootcamp in March 2023, where I have spent 500+ hours learning front end(JavaScript/React) and back end (Ruby/Rails) technologies, while building 5 different projects. Before graduating, I began volunteering my new found technical skills at the Be Good Project working on the Banana App to gain real-world experience. I am looking to break into my first full-time position as a Software Engineer to solve fun and challenging business through the use of technology.
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img
                        className='rounded-xl'
                        src='https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt="computer"
                    />  
                </div>
            </div>
            
        </div>
        </>

        
    )
}