import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import nookies from "nookies";
import { useRouter } from "next/router";
import { logout } from "../utils";
import { firebaseAdmin } from "../firebaseAdmin";

// プロフィール・作品一覧取得
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const profilesRes = await fetch(`http://express:3000/profiles`)
  const profiles = await profilesRes.json()

  const worksRes = await fetch(`http://express:3000/works`)
  const works = await worksRes.json()

  const cookies = nookies.get(ctx);
        const session = cookies.session || "";
        
        // セッションIDを検証して、認証情報を取得する
        const user = await firebaseAdmin
          .auth()
          .verifySessionCookie(session, true)
          .catch(() => null);
        
        // 認証情報が無い場合は、404画面を表示させる
        if (!user) {
          return {
            redirect: {
              destination: "/404",
              permanent: false,
            },
          };
        }
 
  return{
    props: { profiles, works }
  }
}

type Profiles = {
    id: number;
    name: string;
    occupation: string;
    introduction: string;
    twitter_id: string;
    github_id: string;
    email: string;
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
  works: Works[];
}

// 作品の削除
async function deleteWork(id: number) {
  await fetch(`http://localhost:3001/works/${id}`, {
    mode: 'cors',
    method: 'DELETE',
  });
  Router.push('/edit'); 
}

// 情報の表示と編集画面への遷移先のリンク、作品削除ボタン
const Show = (props: Props) => {
  const router = useRouter();

  const onLogout = async () => {
    await logout(); // ログアウトさせる
    router.push("/"); // トップページへ遷移させる
  };

  return (
    <>
      <div>
      <main>
        <p>＜プロフィール＞</p>
        <p>名前:{props.profiles[0].name}</p>
        <p>肩書き:{props.profiles[0].occupation}</p>
        <p>自己紹介:{props.profiles[0].introduction}</p>
        <Link href={`/${props.profiles[0].id}/edit_work`}><a>編集</a></Link>
        <p>＜作品一覧＞</p>
        <div>
          {props.works.map((work) => {
            return (
              <div key={work.id}>
                <div>{work.title}</div>
                <div>{work.description}</div>
                <img src={work.image_url_1} width={200} height={150} />
                <img src={work.image_url_2} width={200} height={150} />
                <img src={work.image_url_3} width={200} height={150} />
                <Link href={`/${work.id}/edit_work`}><a>編集</a></Link>
                <button onClick={()=> deleteWork(work.id)}><a>削除</a></button>
              </div>
            )
          })}
        </div>
        <button onClick={onLogout}>Logout</button>
        <Link href='/'><a>TOP</a></Link>
      </main>
      </div>
    </>
  );
};

export default Show

