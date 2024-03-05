// Selecting the modal
var modal = document.querySelector('#modal');

// Selecting the 'Add' button
var addButton = document.getElementById('add');

// Adding event listener to the 'Add' button to open the modal
addButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Selecting all elements with class 'close' (assuming there are multiple close buttons)
var closeButtons = document.querySelectorAll('.close');

// Adding event listeners to all 'close' buttons
closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});

