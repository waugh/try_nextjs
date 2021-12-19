import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

/* console.log(({}).nosel); */

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Example Home Page
        </h1>
        <p>
          Some paragraph.
        </p>
        <p>
          Let&apos;s <Link href="drill"><a>link</a></Link> to a drill page.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Footer from home page.</p>
      </footer>
    </div>
  )
};

export default Home
