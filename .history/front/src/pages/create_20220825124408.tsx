import React, { useState } from 'react';
import Router from 'next/router';
import { GetServerSideProps } from 'next';

/*　
* ＜作品の新規追加ができるページにする＞
* 入力欄を作成
* クリックイベントでPOSTできる仕組みにする
* 画像の変更ができる仕組みを入れる
*/

// POST：新しい作品の追加
const Add = () => {
    // フォーム入力値をAPIへ登録するまで保持するためのstate
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image_url_1, setImage_url_1] = useState<string>('');
    const [image_url_2, setImage_url_2] = useState<string>('');
    const [image_url_3, setImage_url_3] = useState<string>('');
    
    const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const body = {
                "title": title,
                "description": description,
                "image_url_1": image_url_1,
                "image_url_2": image_url_2,
                "image_url_3": image_url_3,
                "profileId": 1
            };
        await fetch(tasksUrl, {
           mode: 'cors',
           method: 'POST',
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
        // return TOP page
        await Router.push('/');
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
      <div>
        <form onSubmit={submitData}>
          <h1>New Task</h1>
          <select
          autoFocus
          onChange={(e) => setCategoryId(Number(e.currentTarget.value))}
          >
         <option hidden>選択してください</option>
          {data.categories.map((category:{
            id: number;
            name: string;
          }) => {
            return (
                <option key={category.id} value={category.id}>
                {category.name}
                </option>
            )
          })}
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
          <input disabled={!description || !title || !categoryId } type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
    </>
  );
};

export default  Add;