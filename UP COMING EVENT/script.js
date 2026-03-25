document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => observer.observe(element));

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.classList.contains('nav-solid')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(5, 5, 5, 0.95)';
                navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'rgba(5, 5, 5, 0.8)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // 3. Demo Form Logic
    const demoForm = document.getElementById('demo-form');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            document.getElementById('form-box').classList.add('hidden');
            document.getElementById('success-box').classList.remove('hidden');
        });

        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function (e) {
                this.value = this.value.replace(/[^0-9]/g, ''); 
            });
        }
    }

    // 4. Trial Form Logic
    const trialForm = document.getElementById('trial-form');
    if (trialForm) {
        trialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Step 1 Complete! Going to Step 2...");
        });
    }

    // 5. Sign In Form Logic
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Sign in successful! Routing to dashboard...");
        });
    }
});