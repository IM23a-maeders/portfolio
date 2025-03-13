import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
return (
<>
<Head>
    <title>Sophie</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>
<div className={styles.main}>
    <div className={styles.oben}>
        <div className={`${styles.links} ${styles.round}`}>
            <h1>Sophie</h1>
        </div>
        <div className={styles.rechts}>
            <Link href="/">
            <a className={styles.round}>Home</a>
            </Link>
            <Link href="/portfolio">
            <a className={styles.round}>Portfolio</a>
            </Link>
        </div>
    </div>
</div>
</>
);
}
