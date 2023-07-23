//importar dos funciones de firebase
import { initializeApp } from "firebase/app";//inicia la coneccion
import{getFirestore} from "firebase/firestore";//instancia el servicio del firestore


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ecommerce-react-coder-34a28.firebaseapp.com",
  projectId: "ecommerce-react-coder-34a28",
  storageBucket: "ecommerce-react-coder-34a28.appspot.com",
  messagingSenderId: "948341138489",
  appId: "1:948341138489:web:19039ac20c82d5837e19e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)