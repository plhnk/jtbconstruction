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
          y: 100,
          opacity: 0,
        },
        visible: {
          y: 16,
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

      <motion.main
        className={styles.main}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: 100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <Image
          src="/banner.png"
          alt="JTB Construction Banner"
          width={400}
          height={100}
          className={styles.banner}
          sx={{ mb: 30 }}
        />
        <motion.h1
          className={styles.title}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: 100,
              opacity: 0,
            },
            visible: {
              y: 16,
              opacity: 1,
              transition: {
                delay: 0.55,
              },
            },
          }}
        >
          Under Construction
        </motion.h1>

        <motion.p
          className={styles.description}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: 100,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.6,
              },
            },
          }}
        >
          We&apos;re making some updates to our site.
        </motion.p>
      </motion.main>

      <motion.footer
        className={styles.footer}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              duration: .5,
              delay: .6,
            },
          },
        }}
      >
        Copyright © {new Date().getFullYear()} JTB Construction.
      </motion.footer>
    </motion.div>
  );
}
