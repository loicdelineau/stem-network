// Set current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Simple smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: 'smooth'
      });
    }
  });
});

// Basic mobile navigation toggle (if needed in the future)
// This is a placeholder for potential future enhancement
function setupMobileNav() {
  // This function can be expanded if a mobile menu button is added
  const mobileBreakpoint = 768;
  
  function checkScreenSize() {
    // Logic for responsive behavior can be added here
  }
  
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
}

// Initialize any functions that need to run on page load
document.addEventListener('DOMContentLoaded', function() {
  // setupMobileNav(); // Uncomment if mobile nav is implemented
});