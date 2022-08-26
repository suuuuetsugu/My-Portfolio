import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from 'next/link';

// GET：ID別のタスクを取得
export const getServerSideProps: GetServerSideProps = async (context)=>{
  const id = context.query.id
  const res = await fetch(`http://express:3000/works/${id}`)
  const work = await res.json()
    
  return {
    props: { work }
  }
}

type Pram = {
  work: {
    id: number;
    title: string;
    description: string;
    image_url_1: string;
    image_url_2: string;
    image_url_3: string;
    profileId: number;
  }
}

const task = (param: Pram) => {
    console.log(param)
  return (
    <main>
      <p>🌱作品詳細</p>
      <p>{param.work.title}</p>
      <p>{param.work.description}</p>
      <img src={param.work.image_url_1} width={200} height={150} />
      <img src={param.work.image_url_2} width={200} height={150} />
      <img src={param.work.image_url_3} width={200} height={150} />
    <Link href='/'><a>TOP</a></Link>
    </main>
  );
}

export default task;