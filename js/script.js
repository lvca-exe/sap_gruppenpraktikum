// Navigation Button Handlers
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Handle navigation
        const buttonText = this.textContent;
        console.log('Navigation to:', buttonText);
        
        // Animation beim Klick
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Secondary Navigation Handlers
document.querySelectorAll('.secondary-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active state from all secondary buttons
        document.querySelectorAll('.secondary-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const buttonText = this.textContent;
        console.log('Secondary navigation to:', buttonText);
        
        // Animation beim Klick
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Additional Navigation Handlers (früher Bottom Navigation)
document.querySelectorAll('.additional-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active state from all additional buttons
        document.querySelectorAll('.additional-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const buttonText = this.textContent;
        console.log('Additional navigation to:', buttonText);
        
        if (buttonText === 'Eingaben') {
            alert('Navigation zu Eingaben wird implementiert');
        } else if (buttonText === 'Änderungsprotokoll') {
            alert('Navigation zu Änderungsprotokoll wird implementiert');
        }
        
        // Animation beim Klick
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Navigation zur Prognose Seite
function showPrognose() {
    window.location.href = 'pages/prognose.html';
}


// Settings Button Handler
document.querySelector('.settings-btn').addEventListener('click', function() {
    console.log('Settings clicked');
    
    // Rotation Animation
    this.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        this.style.transform = '';
    }, 300);
    
    alert('Einstellungen werden implementiert');
});

// Profit Animation beim Laden
window.addEventListener('load', function() {
    const profitAmount = document.querySelector('.profit-amount');
    const profitPercentage = document.querySelector('.profit-percentage');
    
    // Fade-in Animation
    profitAmount.style.opacity = '0';
    profitPercentage.style.opacity = '0';
    
    setTimeout(() => {
        profitAmount.style.transition = 'opacity 1s ease-in';
        profitAmount.style.opacity = '1';
    }, 500);
    
    setTimeout(() => {
        profitPercentage.style.transition = 'opacity 1s ease-in';
        profitPercentage.style.opacity = '1';
    }, 1000);
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    const activeButtons = document.querySelectorAll('.nav-btn');
    const currentActive = document.querySelector('.nav-btn.active');
    const currentIndex = Array.from(activeButtons).indexOf(currentActive);
    
    if (e.key === 'ArrowRight' && currentIndex < activeButtons.length - 1) {
        activeButtons[currentIndex + 1].click();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        activeButtons[currentIndex - 1].click();
    }
});

// Smooth Scrolling falls der Inhalt überläuft
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function() {
        this.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    });
});
