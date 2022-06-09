import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import { useStoreDetail } from "../../lib/api";
import styles from './StorePopup.module.css'

export default function StorePopup({ id, setIsShow }) {
    const { store, isLoading, isError } = useStoreDetail(id);

    if (isLoading) return <div>loading...</div>
    if (isError) return (<div className={styles.container}><p>서버에서 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.</p></div>)

    return (
        <div className={styles.wrap} onClick={(e) => e.target === e.currentTarget ? setIsShow(false) : null}>
            <Box className={styles.container} sx={{ flexDirection: 'row', flexGrow: 1, minWidth: '25rem', maxWidth: '50%', display: { xs: "none", md: "flex" } }} >
                <div className={styles.image}>
                    <Image src={store.image} alt={store.name} layout="fill" objectFit="fill" loading="lazy" />
                </div>
                <div className={styles.content}>
                    <CloseIcon className={styles.close} sx={{ top: '1rem'}} onClick={() => setIsShow(false)} />
                    <Typography
                        variant="h3"
                        noWrap
                        sx={{
                            mr: 2,
                            display: "flex",
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
            </Box>
            <Box className={styles.container} sx={{ position: 'relative', height: '100%', flexDirection: 'column', flexGrow: 1, minWidth: '25rem', maxWidth: '100%', display: { xs: "flex", md: "none" } }} >
                <CloseIcon className={styles.close} sx={{ top: '5rem'}} onClick={() => setIsShow(false)} />
                <div className={styles.image}>
                    <Image src={store.image} alt={store.name} layout="fill" objectFit="fill" loading="lazy" />
                </div>
                <div className={styles.content}>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: "flex",
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
            </Box>
        </div>

    )
}