import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JTB Construction</title>
        <meta name="description" content="JTB Construction | Pardon Our Dust" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Bebas_Neue/BebasNeue-regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Noto_Serif/NotoSerif-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className={styles.main}>
        <Image
          src="/banner.png"
          alt="JTB Construction Banner"
          width={400}
          height={100}
          className={styles.banner}
          sx={{ mb: 30 }}
        />
        <h1 className={styles.title}>Under Construction</h1>

        <p className={styles.description}>
          We&apos;re making some updates to our site.
        </p>
      </main>

      <footer className={styles.footer}>
        Copyright © {new Date().getFullYear()} JTB Construction.
      </footer>
    </div>
  );
}
