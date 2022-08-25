import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../Home.module.css'

// とりあえずAPI書く


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Head> */}
        {/* <title>ポートフォリオ（仮）</title> */}
        <p>ポートフォリオ（仮）</p>
        <p>いいね数</p>
      {/* </Head> */}

      <main className={styles.main}>
        <p>プロフィール</p>
        <p>名前（API）</p>
        <p>肩書き（API）</p>
        <p>説明文（API）</p>
        <p>作品一覧（API→mapで全部出す）</p>
      </main>

      <footer className={styles.footer}>
        <p>aaaa</p>
      </footer>
    </div>
  )
}

export default Home
