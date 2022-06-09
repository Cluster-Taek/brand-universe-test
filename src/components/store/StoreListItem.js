import Image from 'next/image';
import styles from './StoreListItem.module.css'

export default function StoreListItem({ item, onClick }) {

    return (
        <Image
            className={styles.image}
            src={item.thumb}
            alt={item.name}
            width={180}
            height={180}
            onClick={onClick}
            priority
        />
    )
}