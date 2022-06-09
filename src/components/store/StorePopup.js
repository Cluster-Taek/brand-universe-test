import { Typography } from "@mui/material";
import Error from "next/error";
import Image from "next/image";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import { useStoreDetail } from "../../lib/api";
import styles from './StorePopup.module.css'

export default function StorePopup({ id, setIsShow }) {
    const { store, isLoading, isError } = useStoreDetail(id);

    if (isLoading) return <div>loading...</div>
    if (isError) return <Error />

    return (
        <div className={styles.wrap} onClick={(e) => e.target === e.currentTarget ? setIsShow(false) : null}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src={store.image} alt={store.name} layout="fill" objectFit="fill" loading="lazy"/>
                </div>
                <div className={styles.content}>
                    <CloseIcon className={styles.close} onClick={() => setIsShow(false)} />
                    <Typography
                        variant="h3"
                        noWrap
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: "monospace",
                            fontWeight: 700,
                            color: "black",
                            textDecoration: "none",
                            cursor: "default",
                            mt: 1,
                            mb: 5
                        }}
                    >
                        {store.name}
                    </Typography>
                    <p>{store.description}</p>
                    {store.url ? <Link href={store.url}><a className={styles.link}>{`${store.name} 방문하기`}</a></Link> : null}
                </div>
            </div>
        </div>

    )
}