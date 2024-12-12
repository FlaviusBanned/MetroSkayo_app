document.addEventListener('DOMContentLoaded', function() {
   
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0]; // e.g., 

   
    const futureDate = new Date(today);
    futureDate.setFullYear(today.getFullYear() + 3);
    const maxDate = futureDate.toISOString().split('T')[0]; 

    flatpickr('#start-date', {
        dateFormat: 'Y-m-d',
        minDate: currentDate, 
        maxDate: maxDate, 
    });
});
