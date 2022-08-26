import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

const Mypage = () => {

  // ログアウト
  const logout = async () => {
    await signOut(auth);
    const router = useRouter();
    router.push("/");
  }

  return (
    <>
      <h1>管理ページ</h1>
      <button onClick={logout}>ログアウト</button>
    </>
  );
};

export default Mypage;