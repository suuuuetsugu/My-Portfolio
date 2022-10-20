import type { GetServerSideProps, NextPage } from "next";

import nookies from "nookies";
import { useRouter } from "next/router";

import { logout } from "../utils";
import { firebaseAdmin } from "../firebaseAdmin";
import Show from "./edit";

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


// TODO:APIの関数をコンポーネント化しないと上手く結合できない（一旦非表示）
const DashboardPage: NextPage<{ email: string }> = ({ email }) => {
  const router = useRouter();

  const onLogout = async () => {
    await logout(); // ログアウトさせる
    router.push("/"); // トップページへ遷移させる
  };

  return (
    <div>
      <h1>Dashboard Pages</h1>

      <h2>email: {email}</h2>

      <button onClick={onLogout}>Logout</button>

      {/* <Show profiles={[]} works={[]} /> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
  
    return {
      props: {
        email: user.email,
      },
    };
  };
  
export default DashboardPage;