import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUTywIFTkjpcDO5YvkRMljd52VXlozveY",
  authDomain: "myportfolioapp-dbdf5.firebaseapp.com",
  projectId: "myportfolioapp-dbdf5",
  storageBucket: "myportfolioapp-dbdf5.appspot.com",
  messagingSenderId: "387574410773",
  appId: "1:387574410773:web:adbac90851f2501997e81c",
  measurementId: "G-068T9ZZ5PJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login form handler
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully!');
        window.location.href = '/'; // Redirect to homepage
    } catch (error) {
        alert(`Login error: ${error.message}`);
    }
});

// Signup form handler
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created! You are now logged in.');
        window.location.href = '/'; // Redirect to homepage
    } catch (error) {
        alert(`Signup error: ${error.message}`);
    }
});