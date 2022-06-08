import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>AWESOME FOOD STORE - ABOUT</title>
                <meta name="description" content="awesome food store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>ABOUT</p>
        </div>
    )
}