import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

const Mypage = () => {
  const [user, setUser] = useState("");

  // ログイン有無の判定
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      <h1>マイページ</h1>
      <p>{user?.email}</p>
      <button>ログアウト</button>
    </>
  );
};

export default Mypage;