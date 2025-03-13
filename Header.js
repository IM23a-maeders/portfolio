import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.oben}>
            <div className={styles.obenLogo}>Sophie</div>
            <nav className={styles.links}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>Über</a></Link>
                <Link href="/portfolio"><a>Portfolio</a></Link>
                <Link href="/news"><a>News</a></Link>
                <Link href="/kontakt"><a>Kontakt</a></Link>
            </nav>
        </header>
    );
}
