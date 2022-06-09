import { Container, Grid } from '@mui/material';
import Head from 'next/head'
import { useState } from 'react';
import styles from '../../../styles/Home.module.css'
import StoreListItem from '../../components/store/StoreListItem';
import StorePopup from '../../components/store/StorePopup';
import { useStoreList } from '../../lib/api';

export default function Store() {
    const [selectedItemId, setSelectedItemId] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const clickStoreItem = (item) => {
        setSelectedItemId(item.id);
        setIsShow(true);
    }

    const { store, isLoading, isError } = useStoreList();

    if (isLoading) return <div>loading...</div>
    if (isError) return (<div className={styles.container}><p>서버에서 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.</p></div>)

    return (
        <div className={styles.container}>
            <Head>
                <title>AWESOME FOOD STORE - STORE</title>
                <meta name="description" content="awesome food store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="lg" sx={{ paddingY: '10rem' }}>
                <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, md: 22 }}>
                    {store.map((item) => (
                        <Grid item xs={2} md={4} key={item.id}>
                            <StoreListItem item={item} onClick={() => clickStoreItem(item)} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {isShow ? <StorePopup id={selectedItemId} setIsShow={setIsShow}/> : null}
        </div>
    )
}