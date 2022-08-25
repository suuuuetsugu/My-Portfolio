import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

// この中に書くこと
// 登録されてるプロフィールと作品・それぞれ編集ページ・作品の新規追加ページ・TOPページへのリンク

// プロフィール・作品一覧取得
export const getServerSideProps: GetServerSideProps = async () => {
  const profilesRes = await fetch(`http://express:3000/profiles`)
  const profiles = await profilesRes.json()

  const worksRes = await fetch(`http://express:3000/works`)
  const works = await worksRes.json()
 
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
const Show= (props: Props) => {
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
      </main>
      </div>
    </>
  );
};

export default Show

