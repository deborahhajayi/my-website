
// Select all navbar links
const navbarLinks = document.querySelectorAll('.navbar a');

// Add event listeners to each link
navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    navbarLinks.forEach(nav => nav.classList.remove('active'));
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});
