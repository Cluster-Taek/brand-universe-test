import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>AWESOME FOOD STORE</title>
                <meta name="description" content="awesome food store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>Welcome to AWESOME FOOD STORE</p>
        </div>
    )
}