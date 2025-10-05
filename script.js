// Select the hamburger menu icon and the navigation links list
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the nav-links list.
    // The CSS handles the animation to show/hide the menu.
    navLinks.classList.toggle('active');
});