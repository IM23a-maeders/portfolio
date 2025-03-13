import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';
import Header from '../components/Header';

export default function About() {
    return (
        <>
            <Head>
                <title>Über mich</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <section className={styles.main}>
                <div className={styles.mainLeft}>
                    <h2>Über mich</h2>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua...
                    </p>
                </div>
                <div className={styles.mainRight}>
                    <Skill name="HTML" level="90%" />
                    <Skill name="CSS" level="80%" />
                    <Skill name="JavaScript" level="65%" />
                    <Skill name="PHP" level="60%" />
                </div>
            </section>
            <footer></footer>
        </>
    );
}

const Skill = ({ name, level }) => (
    <div>
        <p>{name}</p>
        <div className={styles.container}>
            <div className={styles.bar} style={{ width: level }}>{level}</div>
        </div>
    </div>
);
