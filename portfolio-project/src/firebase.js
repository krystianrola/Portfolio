import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBhR0VD8-jYsom-4vPADy_qDqH2ZLshV-w",
  authDomain: "krystianrola-resume.firebaseapp.com",
  databaseURL: "https://krystianrola-resume-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "krystianrola-resume",
  storageBucket: "krystianrola-resume.appspot.com",
  messagingSenderId: "246200284649",
  appId: "1:246200284649:web:6a55c3730ee31d566a0778"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;