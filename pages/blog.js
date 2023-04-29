import Layout, { siteTitle } from "../components/layout"
import Head from 'next/head';
import { getSortedPostData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Blog({ allPostsData }) {
    return (
        <>
            <Layout>
                <Head>
                    {siteTitle}
                </Head>
            </Layout>
            <div className='w-full lg:h-screen p-2'>
                <div className='py-4 max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                    <p className='pt-16 text-xl tracking-widest uppercase text-[#1DB954]'>Blog</p>
                    <h2 className='py-4'>What I Am Learning</h2>
                        <ul className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {allPostsData.map(({ id, date, title }) => (
                            <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                                <div className='p-2 grid grid-cols-1 gap-4 justif'>
                                    <li key={id}>
                                    <Link href={`/posts/${id}`}>{title}</Link>
                                    <br />
                                    <small>
                                        <Date dateString={date}/>
                                    </small>
                                    </li>
                                </div>
                            </div>
                        ))}
                        </ul>
                </div>
            </div>
        </>
        
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostData();
    return {
      props: {
        allPostsData,
      }
    }
  }