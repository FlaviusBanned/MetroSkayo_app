
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

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
    document.getElementById('purchase').addEventListener('click', (event) => {
        event.preventDefault(); 

        let subscriptionType = document.getElementById('subscription-type').value;
        let startDate = document.getElementById('start-date').value;
        let endDate = calculateEndDate(subscriptionType, startDate);
        let price = calculatePrice(subscriptionType);

        const userId = 'PNdSafXjBBQ3weZQplSLZFbN3172'; 
        const subscriptionId = Date.now(); 
        const subscriptionRef = ref(database, 'subscriptions/' + userId + '/' + subscriptionId);

        set(subscriptionRef, {
            type: subscriptionType,
            startDate: startDate,
            endDate: endDate,
            price: price
        }).then(() => {
            console.log('Subscription added successfully!');
        }).catch(error => {
            console.error('Error adding subscription:', error);
        });
    });
});


function calculateEndDate(type, startDate) {
    let endDate;
    if (type === 'monthly') {
        let start = new Date(startDate);
        start.setMonth(start.getMonth() + 1);
        endDate = start.toISOString().split('T')[0];
    } else {
        endDate = startDate; 
    }
    return endDate;
}

function calculatePrice(type) {
    const prices = {
        'card-1': 3,
        'card-2': 6,
        'card-24': 8,
        'card-72': 20,
        'card-10': 25,
        'weekly': 30,
        'monthly': 80,
        'biannual': 400,
        'annual': 700,
        'student': 8,
        'donor': 40,
        'elevi': 0
    };
    return prices[type] || 0;
}
