import * as firebase from "firebase/app";
import 'firebase/firestore';

import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDuq6rYKF0WqXnKFz4PSlrIv8YdYUrD-ow",
    authDomain: "dementia-care-companion-bf82e.firebaseapp.com",
    projectId: "dementia-care-companion-bf82e",
    storageBucket: "dementia-care-companion-bf82e.appspot.com",
    messagingSenderId: "1036662767792",
    appId: "1:1036662767792:web:17da66f152e6a15911bb75",
    measurementId: "G-EMGB91FQDP"
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth();
  const db = getDatabase(app);
  const analytics = getAnalytics(app);
  
  // Uncomment the following if you want to use emulator
  // if (process.env.NODE_ENV === "development") {
  //   firestore.useEmulator("localhost", 8080);
  //   auth.useEmulator("http://localhost:9099");
  // }
  
  export { app, firestore, db, auth, analytics };