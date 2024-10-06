
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLSzwY_nCUugrbrl9LJbfFQE0ntcDDBUI",
  authDomain: "pilgrimo-site.firebaseapp.com",
  projectId: "pilgrimo-site",
  storageBucket: "pilgrimo-site.appspot.com",
  messagingSenderId: "524622540521",
  appId: "1:524622540521:web:bd5a502fe29629945bca78",
  measurementId: "G-Q8WZN7H3S5"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
