// === Tab Switching Logic ===
// Function to handle tab switching
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// === Mobile Menu Toggle Logic ===
// Wait for the document to load so the elements exist before attaching listeners
document.addEventListener('DOMContentLoaded', function() {
    // --- Main Menu Elements ---
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active'); // This makes the hamburger turn red!
        });
    }

    // --- Secondary Menu Elements (NEW) ---
    const secondaryMenuToggle = document.getElementById('mobile-secondary-menu');
    const secondaryNavMenu = document.getElementById('secondary-nav-menu');

    if (secondaryMenuToggle && secondaryNavMenu) {
        secondaryMenuToggle.addEventListener('click', function() {
            secondaryNavMenu.classList.toggle('active');
            secondaryMenuToggle.classList.toggle('active'); 
        });
    }
});