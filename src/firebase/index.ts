import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, updateDoc } from "firebase/firestore";
import { collection, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxXARxOiS1Hn10q5vQSsbrYyhbPv0QZTM",
  authDomain: "app-bets-6502e.firebaseapp.com",
  projectId: "app-bets-6502e",
  storageBucket: "app-bets-6502e.appspot.com",
  messagingSenderId: "293430886720",
  appId: "1:293430886720:web:6ec83e40f8edf7a5bc3aa5",
  measurementId: "G-QLKB97PDXM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const usersRef = collection(db, "users");

type NewUserInfo = {
  uid: string;
  email: string;
  password: string;
  createTime: number;
};

async function addUserInDatabase({
  uid,
  email,
  password,
  createTime,
}: NewUserInfo) {
  await setDoc(doc(usersRef, uid), {
    email: email,
    password: password,
    createTime: createTime,
    balance: 150,
    status: true,
    bonus: 0,
    activeBetsList: [],
    historyBetsList: [],
    activeValue: 1,
  });
}

async function updateUserData(uid: string, obj: any) {
  console.log(uid, obj);
  await updateDoc(doc(usersRef, uid), obj);
}

export { addUserInDatabase, auth, usersRef, updateUserData };
