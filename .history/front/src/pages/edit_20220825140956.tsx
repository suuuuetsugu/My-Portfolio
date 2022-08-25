import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { GetServerSideProps } from 'next';

// この中に書くこと
// プロフィールの編集・作品の編集・作品の新規追加ページへのリンク・TOPページへのリンク

// プロフィール取得
export const getServerSideProps: GetServerSideProps = async ()=>{
    const profilesRes = await fetch(`http://express:3000/profiles`)
    const profiles = await profilesRes.json()
 
  return{
    props: { profiles }
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

type Props = {
  profiles: Profiles[];
}

// プロフィールの編集
const Edit= (props: Props) => {
  const [name, setName] = useState<string>(`${props.profiles[0].name}`);
  const [occupation, setOccupation] = useState<string>(`${props.profiles[0].occupation}`);
  const [introduction, setIntroduction] = useState<string>(props.profiles[0].introduction);
  const [twitter_id, setTwitter_id] = useState<string>(props.profiles[0].twitter_id);
  const [github_id, setGithub_id] = useState<string>(props.profiles[0].github_id);
  const [email, setEmail] = useState<string>(props.profiles[0].email);

  // 送信イベント発火後にAPIへデータを送る
  const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        "id": props.profiles[0].id,
        "name": name,
        "occupation": occupation,
        "introduction": introduction,
        "twitter_id": twitter_id,
        "github_id": github_id,
        "email": email
      };
      await fetch(`http://localhost:3001/profiles/${props.profiles[0].id}`, {
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

  // GETした「タスクデータのcategoryId」が「カテゴリ一覧のid」と合致したら対応する「カテゴリのname」を初期値に据える
  // TODO：selectedタグを使わずに実装する
  const options = data.categories.map(
    (category: {
        id: number;
        name: string;
    }) => {
      if(category.id === categoryId) {
        return (
          <option key={category.id} value={category.name} selected>
          {category.name}
          </option>
        )
      } else {
        return (
          <option key={category.id} value={category.name} >
              {category.name}
          </option>
        )
      }
    }
  );
  
  return (
    <>
      <div>
        <form onSubmit={submitData}>
          <h1>Edit Task</h1>
          <select
            autoFocus
            onChange={(e) => setCategoryId(Number(e.currentTarget.value))}
          >
          {options}
          </select>
          <input
            autoFocus
            onChange={(e) => setTitle(e.currentTarget.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            onChange={(e) => setDescription(e.currentTarget.value)}
            placeholder="Description"
            rows={8}
            value={description}
          />
          <input disabled={!description || !title || !categoryId } type="submit" value="Edit" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
    </>
  );
};

export default Edit;