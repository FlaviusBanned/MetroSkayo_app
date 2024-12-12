// Event listener for the "Purchase" anchor link
document.getElementById('purchase').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior (navigating to the top of the page)

    // Grab the selected subscription type and start date
    const subscriptionType = document.getElementById('subscription-type').value;
    const startDate = document.getElementById('start-date').value;

    // Simple form validation: check if both fields are filled
    if (!subscriptionType || !startDate) {
        showPopup('❗ | Please select a subscription type and choose a start date. | ❗');
    } else {
        // Assuming the purchase process is successful
        showPopup('✅ | Your purchase has been successful! | ✅');
    }
});

// Function to show popup with the provided message
function showPopup(message) {
    const popup = document.getElementById('message-popup');
    const popupMessage = document.getElementById('popup-message');
    
    popupMessage.innerText = message;
    popup.classList.add('show');

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}
