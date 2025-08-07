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

// Event Listeners beim Laden
document.addEventListener('DOMContentLoaded', function() {
    // Settings Button Click Handler
    const settingsBtn = document.querySelector('.settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', openSettings);
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
    
    // Escape Key zum Schließen
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSettings();
        }
    });
    
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
