import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKKjn5QoeV0jd99xde03gGFfTMsZDc1mA",
  authDomain: "app-backend-d6ac0.firebaseapp.com",
  projectId: "app-backend-d6ac0",
  storageBucket: "app-backend-d6ac0.appspot.com",
  messagingSenderId: "402405398990",
  appId: "1:402405398990:web:0133c4961da5aa18bc739f",
  measurementId: "G-JDKV43VCFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);