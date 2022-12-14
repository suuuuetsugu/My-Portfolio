import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Header from 'components/Header';

// とりあえずAPI書く
// TODO:fetcher関数を作りたい
export const getServerSideProps: GetServerSideProps = async () => {

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
  console.log(props)
  const [goodCount, setGoodCount] = useState(props.good[0].count);

  
  // ボタンクリックでgoodAPIのcount数を1増やす
  const goodData = async (e: { preventDefault: () => void; }) => {

    setGoodCount(goodCount + 1);

    const body = {
      "count": goodCount + 1,
    };
    await fetch(`http://localhost:3001/good/${props.good[0].id}`, {
      mode: 'cors',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': '*',
      },
      body: JSON.stringify(body),
    })
    .then(function (response) {
      console.log(response);
    })
  }

  return (
    <div className={styles.container}>
      <Header />
        <h2>ポートフォリオ</h2>
        {/* <button onClick={handleClick}>❤︎{goodCount}</button> */}
        {/* <button onClick={goodData}>❤︎{props.good[0].count}</button> */}
        <button onClick={goodData}>❤︎{goodCount}</button>

      <main className={styles.main}>
        <Link href={`/login`}><a>ログイン</a></Link>
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
                <Link href={`/${work.id}`}><a>作品詳細ページへのリンク</a></Link>
              </div>
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>フッター（後で整える）</p>
      </footer>
    </div>
  )
}

export default Home
