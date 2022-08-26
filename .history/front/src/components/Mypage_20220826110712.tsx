import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Mypage = () => {
  return (
    <>
      <h1>マイページ</h1>
      <button>ログアウト</button>
    </>
  );
};

export default Mypage;