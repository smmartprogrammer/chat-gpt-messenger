import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ANhPniMjqzA1VHJ2cKfrQHul6gPp4Zk",
  authDomain: "chat-gpt-messenger-50046.firebaseapp.com",
  projectId: "chat-gpt-messenger-50046",
  storageBucket: "chat-gpt-messenger-50046.appspot.com",
  messagingSenderId: "1001049236221",
  appId: "1:1001049236221:web:ddfe6f373b5ed47b5b1494",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}