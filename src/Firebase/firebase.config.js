
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAICi452u7nAtJVxTPenuHqwm-TGeM-4N4",
  authDomain: "bd-toymart.firebaseapp.com",
  projectId: "bd-toymart",
  storageBucket: "bd-toymart.appspot.com",
  messagingSenderId: "768089846931",
  appId: "1:768089846931:web:c32e5e98f5642b99050966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;