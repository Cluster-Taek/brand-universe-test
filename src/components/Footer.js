import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://www.notion.so/purpleworks-8d66da40d9c34b1cb3beea68fba9b676"
                target="_blank"
                rel="noopener noreferrer"
            >
                @ 2018 purpleworks
            </a>
        </footer>
    );
}