AOS.init({
  duration: 1000,
  once: true,
});
// Handle mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href !== '#') {
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


    // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }


  // Handle notifications
  const notifications = document.getElementById('notifications');
  if (notifications) {
    // Add close buttons to all notifications
    notifications.querySelectorAll('.notification-item').forEach(notification => {
      const closeButton = document.createElement('button');
      closeButton.className = 'notification-close';
      closeButton.innerHTML = '×';
      closeButton.setAttribute('aria-label', 'Close notification');
      
      closeButton.addEventListener('click', () => {
        notification.classList.add('removing');
        setTimeout(() => {
          notification.remove();
        }, 500);
      });

      notification.appendChild(closeButton);
    });
  }
});