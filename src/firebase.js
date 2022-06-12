// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXAUuKy1QSm5y4XRpEYoKXq1Cr-gZyn9A",
  authDomain: "contact-form-298e9.firebaseapp.com",
  projectId: "contact-form-298e9",
  storageBucket: "contact-form-298e9.appspot.com",
  messagingSenderId: "892272695468",
  appId: "1:892272695468:web:aa490ec910ded83b6a6709",
  measurementId: "G-PDE7Y1KZN7",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBcQr-xm0gqX0C0eB025v63feoRXRyx6dM",
//   authDomain: "team-expansion-54ae7.firebaseapp.com",
//   // databaseURL: "https://team-expansion-54ae7-default-rtdb.firebaseio.com",
//   projectId: "team-expansion-54ae7",
//   storageBucket: "team-expansion-54ae7.appspot.com",
//   messagingSenderId: "932038990518",
//   appId: "1:932038990518:web:02f65a0122d0ff39bfa417",
//   measurementId: "G-NCB4XT3N2C",
// };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(firebaseApp);
export default db;
