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

// Additional Navigation Handlers
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

// Navigation Funktionen
function showEinnahmenAusgabenIndex() {
    window.location.href = 'pages/einnahmen&ausgabenMonat.html';
}

function showEinnahmenAusgabenMonat() {
    window.location.href = 'einnahmen&ausgabenMonat.html';
}

function showEinnahmenAusgabenQuartal() {
    window.location.href = 'einnahmen&ausgabenQuartal.html';
}

function showEinnahmenAusgabenJahr() {
    window.location.href = 'einnahmen&ausgabenJahr.html';
}

function showPrognose() {
    window.location.href = 'pages/prognose.html';
}

// Settings Modal Funktionen
let isDarkMode = true;

// Settings Modal öffnen
function openSettings() {
    const overlay = document.getElementById('settingsOverlay');
    if (overlay) {
        overlay.classList.add('active');
    }
}

// Settings Modal schließen
function closeSettings() {
    const overlay = document.getElementById('settingsOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// Dark/White Mode Toggle
function toggleMode() {
    const body = document.body;
    const toggle = document.getElementById('modeToggle');
    
    if (isDarkMode) {
        // Switch to White Mode
        body.classList.add('white-mode');
        toggle.classList.add('white-mode');
        isDarkMode = false;
        localStorage.setItem('theme', 'white');
    } else {
        // Switch to Dark Mode
        body.classList.remove('white-mode');
        toggle.classList.remove('white-mode');
        isDarkMode = true;
        localStorage.setItem('theme', 'dark');
    }
}

// Support anzeigen
function showSupport() {
    alert('Support-Bereich wird implementiert.\n\nKontaktieren Sie uns unter:\nE-Mail: support@finanzapp.de\nTelefon: +49 123 456 789');
}

// Ausloggen
function logout() {
    if (confirm('Möchten Sie sich wirklich ausloggen?')) {
        // Je nach Seite unterschiedliche Weiterleitung
        if (window.location.pathname.includes('pages/')) {
            window.location.href = '../pages/anmeldung.html';
        } else {
            window.location.href = 'pages/anmeldung.html';
        }
    }
}

// Profit Animation beim Laden
window.addEventListener('load', function() {
    const profitAmount = document.querySelector('.profit-amount');
    const profitPercentage = document.querySelector('.profit-percentage');
    
    if (profitAmount && profitPercentage) {
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
    }
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    const activeButtons = document.querySelectorAll('.nav-btn');
    const currentActive = document.querySelector('.nav-btn.active');
    
    if (currentActive && activeButtons.length > 0) {
        const currentIndex = Array.from(activeButtons).indexOf(currentActive);
        
        if (e.key === 'ArrowRight' && currentIndex < activeButtons.length - 1) {
            activeButtons[currentIndex + 1].click();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            activeButtons[currentIndex - 1].click();
        }
    }
    
    // Escape Key zum Schließen des Settings Modals
    if (e.key === 'Escape') {
        closeSettings();
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

// Event Listeners beim Laden der Seite
document.addEventListener('DOMContentLoaded', function() {
    // Settings Button Click Handler
    const settingsBtn = document.querySelector('.settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Rotation Animation
            this.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
            
            // Settings Modal öffnen
            openSettings();
        });
    }
    
    // Toggle Switch Click Handler
    const modeToggle = document.getElementById('modeToggle');
    if (modeToggle) {
        modeToggle.addEventListener('click', toggleMode);
    }
    
    // Overlay Click zum Schließen
    const overlay = document.getElementById('settingsOverlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeSettings();
            }
        });
    }
    
    // Gespeicherte Theme-Einstellung laden
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'white') {
        document.body.classList.add('white-mode');
        const toggle = document.getElementById('modeToggle');
        if (toggle) {
            toggle.classList.add('white-mode');
        }
        isDarkMode = false;
    }
});
