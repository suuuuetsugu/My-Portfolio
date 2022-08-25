import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// export const app = initializeApp(firebaseConfig)

// Initialize Firebase
if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
}

const db = getFirestore();

function App() {
  return (
    <h1>エラー回避</h1>
  );
}

export default App;
