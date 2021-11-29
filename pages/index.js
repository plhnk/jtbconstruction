import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JTB Construction</title>
        <meta name="description" content="JTB Construction | Pardon Our Dust" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/banner.png"
          alt="JTB Construction Banner"
          width={1000}
          height={250}
          className='banner'
        />
        <h1 className={styles.title}>Under Construction</h1>

        <p className={styles.description}>
          We're making some updates to our site.
        </p>
      </main>

      <footer className={styles.footer}>
        Copyright © {new Date().getFullYear()} JTB Construction.
      </footer>
    </div>
  );
}
