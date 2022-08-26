import type { NextPage } from 'next'
import styles from '../Home.module.css'
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';

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
  title: string;
  description: string;
  image_url_1: string;
  image_url_2: string;
  image_url_3: string;
  profileId: number;
}

type Props = {
  profiles: Profiles[];
  good: Good[];
  works: Works[];
}

// TODO:anyをなくす
// TODO:コンポーネント化する
const Home: any = (props: Props) => {
  // いいねのカウント（ボタン押すたびにいいね数を増やす実装）
  const [goodCount, setGoodCount] = useState(props.good[0].count)

  const handleClick = () => {
    setGoodCount(goodCount + 1);
  };

  return (
    <div className={styles.container}>
      {/* <Head> */}
        {/* <title>ポートフォリオ（仮）</title> */}
        <p>ポートフォリオ（仮）</p>
        <p>{props.good[0].count}</p>
        <button onClick={handleClick}>👍</button>
      {/* </Head> */}

      <main className={styles.main}>
        <p>＜プロフィール＞</p>
        <p>{props.profiles[0].name}</p>
        <p>{props.profiles[0].occupation}</p>
        <Link href={`https://twitter.com/${props.profiles[0].twitter_id}`}>Twitter</Link>
        <Link href={`https://${props.profiles[0].github_id}.github.io`}>GitHub</Link>
        <p>{props.profiles[0].introduction}</p>
        <p>＜作品一覧＞</p>
        <div>
          {props.works.map((work) => {
            return (
              <div key={work.id}>
                <div>{work.title}</div>
                <img src={work.image_url_1} width={200} height={150} />
                <p>作品詳細ページへのリンク作る</p>
              </div>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>フッター（後で整える）</p>
        <p>{props.works[0].title}</p>
      </footer>
    </div>
  )
}

export default Home
