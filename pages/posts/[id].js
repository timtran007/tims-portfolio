import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Markdown from "markdown-to-jsx"


export default function Post({ postData }) {
    return (
        <div>
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
        </Layout>
            <div className="w-full p-20 items-center">
            <h1 className='py-8 text-center'>{postData.title}</h1>
            <div className="px-16">
            <div className='text-center italic'>
                <Date dateString={postData.date} />
            </div>
            <article className="prose prose-xl max-w-none">
                <Markdown>{postData.contentHtml}</Markdown>
            </article>
            </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }

}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}