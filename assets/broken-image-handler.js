// Handle broken images - replace with placeholder
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('article img, .post-content img');
  
  images.forEach(function(img) {
    img.addEventListener('error', function() {
      // Prevent infinite loop if placeholder also fails
      if (this.dataset.fallback) return;
      this.dataset.fallback = 'true';
      this.src = '/assets/img/placeholder.png';
      
      // Add a class for styling
      this.classList.add('broken-image');
    });
  });
});
