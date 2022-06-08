import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import { getAboutPosts } from '../../lib/posts'

export default function About({ postData }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>AWESOME FOOD STORE - ABOUT</title>
                <meta name="description" content="awesome food store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <article>
                <h1 className={styles.title}>{postData.title}</h1>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </div>
    )
}

export async function getStaticProps() {
    const postData = await getAboutPosts();
    return {
        props: {
            postData,
        },
    };
}