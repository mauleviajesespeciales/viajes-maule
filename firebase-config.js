const firebaseConfig = {
  apiKey: "AIzaSyABuFATJywTdEqafeI0mOf_wHVMmQCr3l0",
  authDomain: "viajes-especiales-maule.firebaseapp.com",
  projectId: "viajes-especiales-maule",
  storageBucket: "viajes-especiales-maule.firebasestorage.app",
  messagingSenderId: "366630690370",
  appId: "1:366630690370:web:12480cd4a9a147806e57db"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Base de datos Firestore
const db = firebase.firestore();