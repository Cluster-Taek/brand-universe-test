import Error from 'next/error';
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import { useStoreList } from '../../lib/api';

export default function Store() {
    const { store, isLoading, isError } = useStoreList();

    if (isLoading) return <div>loading...</div>
    if (isError) return <Error />

    return (
        <div className={styles.container}>
            <Head>
                <title>AWESOME FOOD STORE - STORE</title>
                <meta name="description" content="awesome food store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>STORE</p>
            <p>{JSON.stringify(store)}</p>
            <p>{JSON.stringify(store)}</p>
            <p>{JSON.stringify(store)}</p>
            <p>{JSON.stringify(store)}</p>
            <p>{JSON.stringify(store)}</p>
        </div>
    )
}