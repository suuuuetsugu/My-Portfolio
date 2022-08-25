import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../Home.module.css'
import { GetServerSideProps } from 'next';
import { number, string } from 'prop-types';
import { type } from 'os';
import Link from 'next/link';

// とりあえずAPI書く
export const getServerSideProps: GetServerSideProps = async (context) => {
  const profilesRes = await fetch(`http://express:3000/profiles`)
  const profiles = await profilesRes.json()

  const goodRes = await fetch(`http://express:3000/good`)
  const good = await goodRes.json()

  return { props: { profiles, good }}
};

type Profiles = {
  id: number;
  name: string;
  occupation: string;
  introduction: string;
  twitter_id: string;
  github_id: string;
  email: string;
}

type Good = {
  id: number;
  count: number;
}

type Props = {
  profiles: Profiles;
  good: Good;
}

const Home: NextPage = (props: Props) => {
  console.log(props)
  return (
    <div className={styles.container}>
      {/* <Head> */}
        {/* <title>ポートフォリオ（仮）</title> */}
        <p>ポートフォリオ（仮）</p>
        <p>いいね数{props.good.count}</p>
      {/* </Head> */}

      <main className={styles.main}>
        <p>プロフィール</p>
        <p>名前（API）</p>
        <p>肩書き（API）</p>
        <Link href={`https://twitter.com/${props.profiles.twitter_id}`}>Twitter</Link>
        <Link href={`https://${props.profiles.github_id}.github.io`}>GitHub</Link>
        <p></p>
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
