import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB6LGyoosFP5HwgzqdoJVh797Qhwv8Fzlg",
    authDomain: "ase-storage.firebaseapp.com",
    databaseURL: "https://ase-storage-default-rtdb.firebaseio.com",
    projectId: "ase-storage",
    storageBucket: "ase-storage.appspot.com",
    messagingSenderId: "56574862198",
    appId: "1:56574862198:web:f9063396b80ede2eca5057",
    measurementId: "G-51J6SN1SWR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function login() {
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input fields
    if (!validateEmail(email) || !validatePassword(password)) {
        alert('Email or Password is invalid!');
        return;
    }

    // Authenticate user with Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // User signed in successfully
            alert("Login successful!");
            window.location.href = "./user-panel/user_pages/abonamenteactive.html"; // Redirect to user panel or success page
        })
        .catch((error) => {
            // Handle errors
            console.error("Error signing in:", error);
            alert("Login failed: " + error.message);
        });
}

function validateEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Event listener for the form
document.getElementById('submit_link').addEventListener('click', async (event) => {
    event.preventDefault();
    login();
});
