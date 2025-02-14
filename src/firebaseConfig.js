import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnrajJahFyT42e-fJekipy1F_lWrgTrug",
  authDomain: "porwaltravelsenquirydata.firebaseapp.com",
  projectId: "porwaltravelsenquirydata",
  storageBucket: "porwaltravelsenquirydata.appspot.com",
  messagingSenderId: "425329072011",
  appId: "1:425329072011:web:7c633bd39632c8bed5018e",
  measurementId: "G-5MEZ1G6HR8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export default db;