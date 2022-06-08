import Image from 'next/image';
import styles from './StoreListItem.module.css'

export default function StoreListItem({ item }) {

    return (
        <Image
            className={styles.image}
            src={item.thumb}
            alt={item.name}
            width={180}
            height={180}
            loading="lazy"
            onClick={() => console.log(item)}
        />
    )
}