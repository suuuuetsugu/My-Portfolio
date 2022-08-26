import type { NextPage } from 'next'
import styles from '../Home.module.css'
import { GetServerSideProps } from 'next';
import Link from 'next/link';

// とりあえずAPI書く
// TODO:fetcher関数を作りたい
export const getServerSideProps: GetServerSideProps = async (context) => {
  const profilesRes = await fetch(`http://express:3000/profiles`)
  const profiles = await profilesRes.json()

  const goodRes = await fetch(`http://express:3000/good`)
  const good = await goodRes.json()

  const worksRes = await fetch(`http://express:3000/works`)
  const works = await worksRes.json()

  return { props: { profiles, good, works }}
};

// 型定義
// TODO:他のところでも使うので型定義ファイル作成したい
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

type Works = {
  id: number;
  count: number;
}

type Props = {
  profiles: Profiles[];
  good: Good[];
  works: Works[];
}

// TODO:anyをなくす
// TODO:コンポーネント化する
const Home: any = (props: Props) => {
  console.log(props)
  return (
    <div className={styles.container}>
      {/* <Head> */}
        {/* <title>ポートフォリオ（仮）</title> */}
        <p>ポートフォリオ（仮）</p>
        <p>いいね数{props.good[0].count}</p>
      {/* </Head> */}

      <main className={styles.main}>
        <p>プロフィール</p>
        <p>{props.profiles[0].name}</p>
        <p>{props.profiles[0].occupation}</p>
        <Link href={`https://twitter.com/${props.profiles[0].twitter_id}`}>Twitter</Link>
        <Link href={`https://${props.profiles[0].github_id}.github.io`}>GitHub</Link>
        <p></p>
        <p>{props.profiles[0].introduction}</p>
        <p>作品一覧（API→mapで全部出す）</p>
      </main>

      <footer className={styles.footer}>
        <p>aaaa</p>
      </footer>
    </div>
  )
}

export default Home
