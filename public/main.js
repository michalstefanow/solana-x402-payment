// x402 Micropayments Platform - Main JavaScript
document.addEventListener("DOMContentLoaded", function() {
    initializeApp();
});

function initializeApp() {
    initializeCollapsibles();
    initializeCopyButtons();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeVideoPlayer();
    updateCurrentYear();
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
}

// Collapsible Content
function initializeCollapsibles() {
    const triggers = document.querySelectorAll(".collapsible-trigger");
    
    triggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            
            if (content && content.classList.contains("collapsible-content")) {
                content.classList.toggle("active");
            }
        });
    });
}

// Copy to Clipboard
function initializeCopyButtons() {
    document.querySelectorAll(".copy-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const targetId = btn.getAttribute("data-copy-target");
            const codeElem = document.getElementById(targetId);
            
            if (codeElem) {
                navigator.clipboard
                    .writeText(codeElem.innerText)
                    .then(() => {
                        const originalText = btn.textContent;
                        btn.textContent = "Copied!";
                        btn.style.backgroundColor = "var(--success)";
                        
                        setTimeout(() => {
                            btn.textContent = originalText;
                            btn.style.backgroundColor = "";
                        }, 2000);
                    })
                    .catch(err => {
                        console.error("Failed to copy: ", err);
                        btn.textContent = "Failed";
                        btn.style.backgroundColor = "var(--error)";
                        
                        setTimeout(() => {
                            btn.textContent = "Copy";
                            btn.style.backgroundColor = "";
                        }, 2000);
                    });
            }
        });
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'var(--shadow-sm)';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .step, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Video Player Enhancements
function initializeVideoPlayer() {
    const video = document.getElementById('premium-video');
    if (video) {
        // Add custom video controls
        video.addEventListener('loadedmetadata', function() {
            console.log('Video loaded successfully');
        });

        video.addEventListener('error', function(e) {
            console.error('Video error:', e);
            showVideoError();
        });

        // Add play/pause tracking
        video.addEventListener('play', function() {
            console.log('Video started playing');
            trackVideoEvent('play');
        });

        video.addEventListener('pause', function() {
            console.log('Video paused');
            trackVideoEvent('pause');
        });

        video.addEventListener('ended', function() {
            console.log('Video ended');
            trackVideoEvent('ended');
        });
    }
}

// Video Error Handling
function showVideoError() {
    const videoContainer = document.querySelector('.video-player-container');
    if (videoContainer) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'video-error';
        errorMessage.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--warning); margin-bottom: 1rem;"></i>
                <h3>Video Loading Error</h3>
                <p>There was an issue loading the video. Please try refreshing the page.</p>
                <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 1rem;">
                    <i class="fas fa-refresh"></i>
                    Refresh Page
                </button>
            </div>
        `;
        videoContainer.innerHTML = '';
        videoContainer.appendChild(errorMessage);
    }
}

// Analytics/Tracking
function trackVideoEvent(event) {
    // Placeholder for analytics tracking
    console.log(`Video event: ${event}`);
    
    // You can integrate with analytics services here
    // Example: gtag('event', 'video_interaction', { event_name: event });
}

// Utility Functions
function updateCurrentYear() {
    const yearElements = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

// Payment Status Simulation (for demo purposes)
function simulatePaymentProcessing() {
    const steps = document.querySelectorAll('.step-item');
    let currentStep = 0;
    
    const processStep = () => {
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('completed');
            steps[currentStep].classList.remove('processing');
            
            if (currentStep < steps.length - 1) {
                steps[currentStep + 1].classList.add('processing');
            }
            
            currentStep++;
            setTimeout(processStep, 2000);
        } else {
            // All steps completed, redirect to video content
            setTimeout(() => {
                window.location.href = '/video-content.html';
            }, 1000);
        }
    };
    
    // Start processing after a short delay
    setTimeout(processStep, 1000);
}

// Initialize payment processing if on authenticate page
if (window.location.pathname.includes('authenticate')) {
    setTimeout(simulatePaymentProcessing, 2000);
}

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'var(--error)';
            isValid = false;
        } else {
            input.style.borderColor = 'var(--border-light)';
        }
    });
    
    return isValid;
}

// Toast Notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add toast styles
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border-light);
        border-radius: var(--radius-lg);
        padding: 1rem;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    showToast('An unexpected error occurred. Please try again.', 'error');
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export functions for global access
window.x402 = {
    showToast,
    validateForm,
    trackVideoEvent
};