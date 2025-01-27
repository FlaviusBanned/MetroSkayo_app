
document.getElementById('purchase').addEventListener('click', function(event) {
    event.preventDefault(); 

    const subscriptionType = document.getElementById('subscription-type').value;
    const startDate = document.getElementById('start-date').value;

    if (!subscriptionType || !startDate) {
        showPopup('❗ | Please select a subscription type and choose a start date. | ❗');
    } else {
        showPopup('✅ | Your purchase has been successful! | ✅');
    }
});


function showPopup(message) {
    const popup = document.getElementById('message-popup');
    const popupMessage = document.getElementById('popup-message');
    
    popupMessage.innerText = message;
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}
