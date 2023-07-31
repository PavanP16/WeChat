import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAT2EHxuBjdU4XDQ5AQUo2llJYuoBRpp-A",
  authDomain: "wechat-8ec33.firebaseapp.com",
  projectId: "wechat-8ec33",
  storageBucket: "wechat-8ec33.appspot.com",
  messagingSenderId: "970752050613",
  appId: "1:970752050613:web:abec8c24968909e39945fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()