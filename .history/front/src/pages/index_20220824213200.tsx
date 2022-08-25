import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ポートフォリオ（仮）</title>

      </Head>

      <main className={styles.main}>
        <p>aaaaa</p>
      </main>

      <footer className={styles.footer}>
        <p>aaaa</p>
      </footer>
    </div>
  )
}

export default Home
