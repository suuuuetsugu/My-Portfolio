import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios'

// 新しい作品の追加
const Upload = () => {
    // TODO:型定義を変更、コメントアウト不要なら消す
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image_url_1, setImage_url_1] = useState<any>();
    const [image_url_2, setImage_url_2] = useState<any>();
    const [image_url_3, setImage_url_3] = useState<any>();
    
    const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData()
        data.append("title", title)
        data.append("description", description)
        data.append("image_url_1", image_url_1)
        data.append("image_url_2", image_url_2)
        data.append("image_url_3", image_url_3)
        data.append("profileId", "1")
        console.log(data)
        const result = await axios.post('http://localhost:3001/works', data)
        // try {
        //     const body = {
        //         "title": title,
        //         "description": description,
        //         "image_url_1": image_url_1,
        //         "image_url_2": image_url_2,
        //         "image_url_3": image_url_3,
        //         "profileId": 1
        //     };
        // await fetch(`http://localhost:3001/works`, {
        //    mode: 'cors',
        //    method: 'POST',
        //    headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        //     'User-Agent': '*',
        //    },
        //    body: JSON.stringify(body),
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // // return TOP page
        // await Router.push('/');
        // } catch (error) {
        //     console.error(error);
        // }
    }

  return (
    <>
      <div>
        <form onSubmit={submitData}>
          <h1>作品の新規登録</h1>
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
          <input
          onChange={e => setImage_url_1(e.currentTarget.files![0])} 
          type="file" 
          accept="image/*"
          ></input>
          <input
          onChange={e => setImage_url_2(e.currentTarget.files![0])} 
          type="file" 
          accept="image/*"
          ></input>
          <input
          onChange={e => setImage_url_3(e.currentTarget.files![0])} 
          type="file" 
          accept="image/*"
          ></input>
          <input disabled={!description || !title || !image_url_1 } type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
    </>
  );
};

export default  Upload;