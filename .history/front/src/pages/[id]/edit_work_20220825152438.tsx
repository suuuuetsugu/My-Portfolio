import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { GetServerSideProps } from 'next';

// 作品一覧取得
export const getServerSideProps: GetServerSideProps = async (context)=>{
  const id = context.query.id
  const worksRes = await fetch(`http://express:3000/works/${id}`)
  const works = await worksRes.json()
 
  return{
    props: { works }
  }
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
  works: Works[];
}

// プロフィールの編集
const Edit= (props: Props) => {
  const [id, setid] = useState<string>(`${props.works[0].id}`);
  const [occupation, setOccupation] = useState<string>(`${props.works[0].occupation}`);
  const [introduction, setIntroduction] = useState<string>(props.works[0].introduction);
  const [twitter_id, setTwitter_id] = useState<string>(props.works[0].twitter_id);
  const [github_id, setGithub_id] = useState<string>(props.works[0].github_id);
  const [email, setEmail] = useState<string>(props.works[0].email);

  // 送信イベント発火後にAPIへデータを送る
  const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        "id": props.works[0].id,
        "id": id,
        "occupation": occupation,
        "introduction": introduction,
        "twitter_id": twitter_id,
        "github_id": github_id,
        "email": email
      };
      await fetch(`http://localhost:3001/works/${props.works[0].id}`, {
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
      // TOPページへ自動で戻す
      await Router.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <div>
        <form onSubmit={submitData}>
          <h1>Edit Profile</h1>
          <input
            autoFocus
            onChange={(e) => setid(e.currentTarget.value)}
            placeholder="id"
            type="text"
            value={id}
          />
          <input
            autoFocus
            onChange={(e) => setOccupation(e.currentTarget.value)}
            placeholder="Occupation"
            type="text"
            value={occupation}
          />
          <textarea
            cols={50}
            onChange={(e) => setIntroduction(e.currentTarget.value)}
            placeholder="Introduction"
            rows={8}
            value={introduction}
          />
          <input
            autoFocus
            onChange={(e) => setTwitter_id(e.currentTarget.value)}
            placeholder="Twitter_id"
            type="text"
            value={twitter_id}
          />
          <input
            autoFocus
            onChange={(e) => setGithub_id(e.currentTarget.value)}
            placeholder="Github_id"
            type="text"
            value={github_id}
          />
          <input
            autoFocus
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email"
            type="text"
            value={email}
          />
          <input disabled={!name || !occupation || !introduction || !email } type="submit" value="Edit" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
    </>
  );
};

export default Edit;