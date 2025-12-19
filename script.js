// Add this code at the end of your existing script.js file

// ==================== AUTO SLIDESHOW CODE ====================

// Simple Auto Slideshow
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    let slides = document.querySelectorAll('.auto-slideshow .slide');
    let slideInterval;
    const slideDuration = 3000; // 3 seconds
    
    // Function to show next slide
    function showNextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('prev');
        
        // Calculate next slide index
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to next slide
        slides[currentSlide].classList.add('active');
        slides[currentSlide].classList.remove('prev');
        
        // Reset progress bar animation
        resetProgressBar();
    }
    
    // Reset progress bar animation
    function resetProgressBar() {
        const progressBar = document.querySelector('.progress-bar');
        progressBar.style.animation = 'none';
        
        // Trigger reflow
        void progressBar.offsetWidth;
        
        // Restart animation
        progressBar.style.animation = 'progress 3s linear infinite';
    }
    
    // Start slideshow
    function startSlideshow() {
        // Clear existing interval if any
        clearInterval(slideInterval);
        
        // Start new interval
        slideInterval = setInterval(showNextSlide, slideDuration);
    }
    
    // Initialize slideshow
    function initSlideshow() {
        if (slides.length > 0) {
            // Make sure first slide is active
            slides[0].classList.add('active');
            
            // Start the slideshow
            startSlideshow();
        }
    }
    
    // Initialize on page load
    initSlideshow();
    
    // Pause on hover (optional - remove if you don't want this)
    const slidesContainer = document.querySelector('.slideshow-wrapper');
    slidesContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
        document.querySelector('.progress-bar').style.animationPlayState = 'paused';
    });
    
    slidesContainer.addEventListener('mouseleave', function() {
        startSlideshow();
        document.querySelector('.progress-bar').style.animationPlayState = 'running';
    });
});

// ==================== END AUTO SLIDESHOW CODE ====================