import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCP-CH4cG2lxU5mLNlpO7V12WDPOnuvg94",
  authDomain: "projecta-6bdaa.firebaseapp.com",
  databaseURL: "https://projecta-6bdaa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projecta-6bdaa",
  storageBucket: "projecta-6bdaa.appspot.com",
  messagingSenderId: "589609488379",
  appId: "1:589609488379:web:5e55e7ff732b91e40c055e",
  measurementId: "G-7R75PDVKK6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
