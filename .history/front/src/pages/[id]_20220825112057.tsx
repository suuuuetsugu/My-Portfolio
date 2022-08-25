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
    categoryId: number;
    createdAt: string;
    updatedAt: string;
  }
}

const task = (param: Pram) => {
  return (
    <main>
      <h1>🌱作品詳細</h1>
      <div>
      <p>{param.work.title}</p>
      <p>{param.work.description}</p>

    
      <Link href={`/${param.task.id}/edit`}><a className={styles.linkButton}>編集</a></Link>
      <button onClick={()=> deleteTask(param.task.id)}><a className={styles.button}>削除</a></button>
    </div>
    <Link href='/'><a>TOP</a></Link>
    </main>
  );
}

export default task;