import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';


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

function showPopup(message) {
  const popup = document.getElementById('message-popup');
  const popupMessage = document.getElementById('popup-message');


  popupMessage.textContent = '';
  
  popup.classList.remove('show');
  
  popupMessage.textContent = message;
  
  
  popup.classList.add('show');

  
  setTimeout(() => {
     popup.classList.remove('show');
  }, 2000); 
}


document.getElementById('submit_link').addEventListener('click', async (event) => {
  event.preventDefault(); 
  const email = document.getElementById('email').value; 

  try {
    
     const signInMethods = await fetchSignInMethodsForEmail(auth, email);

     if (signInMethods.length === 0) {
      
        showPopup('❌ | No user found with this email address. Please check and try again. | ❌');
     } else {
        await sendPasswordResetEmail(auth, email);
        showPopup('✅ | If this email is registered, a password reset email has been sent. Please check your inbox. | ✅');
     }
  } catch (error) {
     
     handleError(error);
  }
});


function handleError(error) {
  let message = 'An error occurred.';

  switch (error.code) {
     case 'auth/invalid-email':
        message = '❌ | Invalid email format. Please check the email address you entered. | ❌';
        break;
     case 'auth/network-request-failed':
        message = '❌ | Network error. Please check your internet connection and try again. | ❌';
        break;
     default:
        message = '❌ | Error: ' + error.message +'❌ |';
        break;
  }

  showPopup(message); 
}
