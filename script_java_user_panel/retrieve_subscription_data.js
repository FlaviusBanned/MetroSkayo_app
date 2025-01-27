
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getDatabase, ref, get } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

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


document.addEventListener('DOMContentLoaded', () => {
    const userId = 'PNdSafXjBBQ3weZQplSLZFbN3172'; 
    const subscriptionsRef = ref(database, 'subscriptions/' + userId);

    get(subscriptionsRef).then(snapshot => {
        if (snapshot.exists()) {
            const subscriptions = snapshot.val();
            for (let key in subscriptions) {
                const subscription = subscriptions[key];
                updateSubscriptionsTable(subscription); 
            }
        } else {
            console.log('No subscriptions found!');
        }
    }).catch(error => {
        console.error('Error fetching subscriptions:', error);
    });
});


function updateSubscriptionsTable(subscription) {
    let tableBody = document.getElementById('subscriptions-table').querySelector('tbody');
    let row = tableBody.insertRow();
    row.insertCell().textContent = subscription.type;
    row.insertCell().textContent = subscription.startDate;
    row.insertCell().textContent = subscription.endDate;
    row.insertCell().textContent = subscription.price;
}
