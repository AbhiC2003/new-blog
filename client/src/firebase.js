// // import { initializeApp } from 'firebase/app';
// // import { getAuth } from 'firebase/auth';
// // import { getFirestore } from 'firebase/firestore';

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'your_default_api_key_if_any',
// //   authDomain: 'newproject-a5a7c.firebaseapp.com',
// //   projectId: 'newproject-a5a7c',
// //   storageBucket: 'newproject-a5a7c.appspot.com',
// //   messagingSenderId: '590617127446',
// //   appId: '1:590617127446:web:your_app_id', // You need to replace this with your actual app ID
// // };

// // // Initialize Firebase
// // export const app = initializeApp(firebaseConfig);

// // // Initialize Firebase Authentication and Firestore
// // export const auth = getAuth(app);
// // export const db = getFirestore(app);
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'your_actual_api_key',
//   authDomain: 'newproject-a5a7c.firebaseapp.com',
//   projectId: 'newproject-a5a7c',
//   storageBucket: 'newproject-a5a7c.appspot.com',
//   messagingSenderId: '590617127446',
//   appId: '1:590617127446:web:your_actual_app_id', // Replace with your actual app ID
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and Firestore
// export const auth = getAuth(app);
// export const db = getFirestore(app);
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'newproject-a5a7c.firebaseapp.com',
  projectId: 'newproject-a5a7c',
  storageBucket: 'newproject-a5a7c.appspot.com',
  messagingSenderId: '590617127446',
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

