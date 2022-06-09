import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'

export default function Custom404() {
    const router = useRouter();
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer === 1) {
                router.replace("/");
            } else {
                setTimer(t => t - 1)
            }
        }, 1000);
        return () => clearInterval(interval);
    })

    return (
        <div className={styles.container}>
            <p>요청하신 페이지는 존재하지 않습니다.</p>
            <p>{timer}초 후 메인페이지로 이동합니다.</p>
        </div>
    );
}