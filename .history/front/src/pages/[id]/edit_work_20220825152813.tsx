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
  const [id, setId] = useState<string>(`${props.works[0].id}`);
  const [title, setTitle] = useState<string>(`${props.works[0].title}`);
  const [description, setDescription] = useState<string>(props.works[0].description);
  const [image_url_1, setImage_url_1] = useState<string>(props.works[0].image_url_1);
  const [image_url_2, setImage_url_2] = useState<string>(props.works[0].image_url_2);
  const [image_url_3, setImage_url_3] = useState<string>(props.works[0].image_url_3);

  // 送信イベント発火後にAPIへデータを送る
  const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        "id": props.works[0].id,
        "title": title,
        "description": description,
        "image_url_1": image_url_1,
        "image_url_2": image_url_2,
        "image_url_3": image_url_3
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
            onChange={(e) => setTitle(e.currentTarget.value)}
            placeholder="title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            onChange={(e) => setDescription(e.currentTarget.value)}
            placeholder="description"
            rows={8}
            value={description}
          />
          <input
            autoFocus
            onChange={(e) => setImage_url_1(e.currentTarget.value)}
            placeholder="image_url_1"
            type="text"
            value={image_url_1}
          />
          <input
            autoFocus
            onChange={(e) => setImage_url_2(e.currentTarget.value)}
            placeholder="image_url_2"
            type="text"
            value={image_url_2}
          />
          <input
            autoFocus
            onChange={(e) => setImage_url_3(e.currentTarget.value)}
            placeholder="image_url_3"
            type="text"
            value={image_url_3}
          />
          <input disabled={!title || !description || !image_url_1 } type="submit" value="Edit" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
    </>
  );
};

export default Edit;