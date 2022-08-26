import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

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