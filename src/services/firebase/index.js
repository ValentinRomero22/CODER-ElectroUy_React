import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRk1NOSclni-yOG0xJha4rI--v4DLmleY",
  authDomain: "electro-uy.firebaseapp.com",
  projectId: "electro-uy",
  storageBucket: "electro-uy.appspot.com",
  messagingSenderId: "388005192867",
  appId: "1:388005192867:web:066be3189f2981dcfb4b16"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)