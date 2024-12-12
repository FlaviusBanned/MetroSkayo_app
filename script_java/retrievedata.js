// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getDatabase, ref, get, update } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener('DOMContentLoaded', () => {
    const userId = 'PNdSafXjBBQ3weZQplSLZFbN3172'; 
    const userRef = ref(database, 'users/' + userId);

    get(userRef).then(snapshot => {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            document.getElementById('first-name').value = userData.first_name || '';
            document.getElementById('last-name').value = userData.last_name || '';
            document.getElementById('cnp').value = userData.cnp || '';
            document.getElementById('bdate').value = userData.bdate || '';
            document.getElementById('email').value = userData.email || '';
        } else {
            console.log('No such user!');
        }
    }).catch(error => {
        console.error('Error fetching user data:', error);
    });

    document.getElementById('save-btn').addEventListener('click', () => {
        const updatedData = {
            first_name: document.getElementById('first-name').value,
            last_name: document.getElementById('last-name').value,
            email: document.getElementById('email').value
        };

        update(userRef, updatedData)
            .then(() => {
                console.log('Document successfully updated!');
            })
            .catch(error => {
                console.error('Error updating document: ', error);
            });
    });
});
