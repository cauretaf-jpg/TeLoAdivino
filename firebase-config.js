// Configuración Firebase para TeLoAdivino v4.1
// Usa Firebase Realtime Database para salas online, códigos QR y participantes conectados.

const firebaseConfig = {
  apiKey: "AIzaSyDK3TEKBUYTCyw_7jG1YEd0FQLfNexMJ2c",
  authDomain: "teloadivino-205e1.firebaseapp.com",
  databaseURL: "https://teloadivino-205e1-default-rtdb.firebaseio.com",
  projectId: "teloadivino-205e1",
  storageBucket: "teloadivino-205e1.firebasestorage.app",
  messagingSenderId: "644608612446",
  appId: "1:644608612446:web:1d59fa23b38ee5e2157ccf"
};

window.teloFirebaseReady = false;
window.teloDatabase = null;

try {
  if (window.firebase && !window.firebase.apps.length) {
    window.firebase.initializeApp(firebaseConfig);
  }
  if (window.firebase) {
    window.teloDatabase = window.firebase.database();
    window.teloFirebaseReady = true;
  }
} catch (error) {
  console.warn('Firebase no se pudo inicializar:', error);
}
