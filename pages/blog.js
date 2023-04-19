import Layout, { siteTitle } from "../components/layout"
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.lists}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>
                        <Date dateString={date}/>
                    </small>
                    </li>
                ))}
                </ul>
            </section>
        </Layout>
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