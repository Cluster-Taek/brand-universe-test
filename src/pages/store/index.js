import { Container, Grid, ImageList, ImageListItem } from '@mui/material';
import Error from 'next/error';
import Head from 'next/head'
import Image from 'next/image';
import styles from '../../../styles/Home.module.css'
import StoreListItem from '../../components/store/StoreListItem';
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
            <Container maxWidth="lg" sx={{paddingY: '10rem'}}>
                <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, md: 22 }}>
                    {store.map((item) => (
                        <Grid item xs={2} md={4} key={item.id}>
                            <StoreListItem item={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}