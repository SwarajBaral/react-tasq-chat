import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwCGQLCY5KldERCezrmpyggwJyi2vngM0",
  authDomain: "tasq-session-chat.firebaseapp.com",
  projectId: "tasq-session-chat",
  storageBucket: "tasq-session-chat.appspot.com",
  messagingSenderId: "798489845101",
  appId: "1:798489845101:web:b51e1bf6e7043c9e808e64",
  measurementId: "G-202WNL34P4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
