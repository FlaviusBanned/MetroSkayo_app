import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getDatabase, ref, get, update } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

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
const database = getDatabase(app);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userId = user.uid; 
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
                    console.log('No such user in database!');
                }
            }).catch(error => {
                console.error('Error fetching user data:', error);
            });
        } else {
            alert('You are not logged in!');
            window.location.href = '/login.html';
        }
    });


    document.getElementById('save-btn').addEventListener('click', () => {
        const userId = auth.currentUser?.uid; 

        if (!userId) {
            alert('User is not authenticated!');
            window.location.href = '/login.html';
            return;
        }

        const userRef = ref(database, 'users/' + userId);

        const updatedData = {
            first_name: document.getElementById('first-name').value,
            last_name: document.getElementById('last-name').value,
            cnp: document.getElementById('cnp').value,
            bdate: document.getElementById('bdate').value,
            email: document.getElementById('email').value,
        };

        update(userRef, updatedData)
            .then(() => {
                alert('Profile updated successfully!');
            })
            .catch(error => {
                console.error('Error updating profile:', error);
                alert('An error occurred while updating the profile.');
            });
    });
});
