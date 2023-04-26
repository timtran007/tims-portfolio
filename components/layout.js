import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Navbar from './navbar';




const name = "Tim Tran";
export const siteTitle = "Tim Tran's Portfolio Site"

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta 
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header>
                {home ? (
                    <>
                        <Navbar />
                    </> 
                    ) : (
                        <>
                            <Navbar />
                                
                        </>
                )}
            </header>
            <main>{children}</main>
           
        </div>
    )
}