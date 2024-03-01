// Function to toggle high contrast mode
function toggleHighContrast() {
    const body = document.body;
    body.classList.toggle('high-contrast');

    const button = document.getElementById('toggle-contrast');
    button.classList.toggle('high-contrast-button');
}

// Add event listener to button
const toggleButton = document.getElementById('toggle-contrast');
toggleButton.addEventListener('click', toggleHighContrast);
