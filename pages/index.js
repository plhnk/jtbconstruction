import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className={styles.container}
    >
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
    </motion.div>
  );
}
