import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWnxfd19aBEWDptrsdQyQCYEOzmPKBPoY",
  authDomain: "job-portal-ef66c.firebaseapp.com",
  projectId: "job-portal-ef66c",
  storageBucket: "job-portal-ef66c.appspot.com",
  messagingSenderId: "1026768504015",
  appId: "1:1026768504015:web:0e0016229a98c6a7cee3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
