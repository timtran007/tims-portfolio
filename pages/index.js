import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import Typewriter from 'typewriter-effect';


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <Typewriter
          options={{
          strings: ['Full Stack Developer', 'Front End Developer', 'React Developer'],
          autoStart: true,
          loop: true,
          }}
        />
      </section>
      <section className={utilStyles.headingMd}>
        <p>Software developer leveraging 6+ years of marketing experience to solve interesting problems with technology. </p>
      </section>
    </Layout>
  );
}
