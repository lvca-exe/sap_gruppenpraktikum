// Prognose Chart Instanz
let prognoseChart;

// Daten für das Prognose Chart
const prognoseData = {
    labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    einnahmen: [150000, 145000, 155000, 148000, 162000, 158000, 151000, 165000, 159000, 163000, 156000, 170000],
    ausgaben: [95000, 88000, 92000, 85000, 89000, 94000, 87000, 91000, 88000, 93000, 86000, 95000],
    prognose: [180000, 175000, 185000, 178000, 192000, 188000, 181000, 195000, 189000, 193000, 186000, 200000]
};

// Chart Konfiguration
const prognoseChartConfig = {
    type: 'line',
    data: {
        labels: prognoseData.labels,
        datasets: [
            {
                label: 'Einnahmen',
                data: prognoseData.einnahmen,
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                borderWidth: 3,
                fill: false,
                tension: 0.1,
                pointBackgroundColor: '#4CAF50',
                pointBorderColor: '#4CAF50',
                pointRadius: 5
            },
            {
                label: 'Ausgaben',
                data: prognoseData.ausgaben,
                borderColor: '#f44336',
                backgroundColor: 'rgba(244, 67, 54, 0.1)',
                borderWidth: 3,
                fill: false,
                tension: 0.1,
                pointBackgroundColor: '#f44336',
                pointBorderColor: '#f44336',
                pointRadius: 5
            },
            {
                label: 'Prognose',
                data: prognoseData.prognose,
                borderColor: '#FF9800',
                backgroundColor: 'rgba(255, 152, 0, 0.1)',
                borderWidth: 3,
                borderDash: [10, 5],
                fill: false,
                tension: 0.1,
                pointBackgroundColor: '#FF9800',
                pointBorderColor: '#FF9800',
                pointRadius: 5
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'white',
                bodyColor: 'white',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + 
                               new Intl.NumberFormat('de-DE', {
                                   style: 'currency',
                                   currency: 'EUR',
                                   minimumFractionDigits: 0
                               }).format(context.parsed.y);
                    }
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white',
                    callback: function(value) {
                        return new Intl.NumberFormat('de-DE', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 0
                        }).format(value);
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }
    }
};

// Chart initialisieren
function initPrognoseChart() {
    const ctx = document.getElementById('prognoseChart').getContext('2d');
    prognoseChart = new Chart(ctx, prognoseChartConfig);
}

// Animation für Statistiken
function animateStats() {
    const statAmount = document.querySelector('.stat-amount');
    const targetAmount = 123456.78;
    let currentAmount = 0;
    const duration = 2000;
    const startTime = Date.now();

    function updateAmount() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function für smooth animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        currentAmount = targetAmount * easedProgress;
        
        statAmount.textContent = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(currentAmount);
        
        if (progress < 1) {
            requestAnimationFrame(updateAmount);
        }
    }
    
    updateAmount();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Chart initialisieren
    initPrognoseChart();
    
    // Statistiken animieren
    setTimeout(animateStats, 500);
    
    // Hover-Effekte für Stats Card
    const statCard = document.querySelector('.stat-card');
    if (statCard) {
        statCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.1)';
        });
        
        statCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    }
});

// Settings Button Handler
document.querySelector('.settings-btn').addEventListener('click', function() {
    console.log('Settings clicked on Prognose page');
    
    // Rotation Animation
    this.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        this.style.transform = '';
    }, 300);
    
    alert('Einstellungen werden implementiert');
});

// Daten für verschiedene Zeiträume (für spätere Erweiterung)
const prognoseDataSets = {
    '6months': {
        labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun'],
        einnahmen: [150000, 145000, 155000, 148000, 162000, 158000],
        ausgaben: [95000, 88000, 92000, 85000, 89000, 94000],
        prognose: [180000, 175000, 185000, 178000, 192000, 188000]
    },
    '12months': prognoseData,
    '24months': {
        labels: ['Jan 23', 'Feb 23', 'Mär 23', 'Apr 23', 'Mai 23', 'Jun 23', 
                'Jul 23', 'Aug 23', 'Sep 23', 'Okt 23', 'Nov 23', 'Dez 23',
                'Jan 24', 'Feb 24', 'Mär 24', 'Apr 24', 'Mai 24', 'Jun 24',
                'Jul 24', 'Aug 24', 'Sep 24', 'Okt 24', 'Nov 24', 'Dez 24'],
        einnahmen: [140000, 135000, 145000, 138000, 152000, 148000, 141000, 155000, 149000, 153000, 146000, 160000,
                   150000, 145000, 155000, 148000, 162000, 158000, 151000, 165000, 159000, 163000, 156000, 170000],
        ausgaben: [85000, 78000, 82000, 75000, 79000, 84000, 77000, 81000, 78000, 83000, 76000, 85000,
                  95000, 88000, 92000, 85000, 89000, 94000, 87000, 91000, 88000, 93000, 86000, 95000],
        prognose: [170000, 165000, 175000, 168000, 182000, 178000, 171000, 185000, 179000, 183000, 176000, 190000,
                  180000, 175000, 185000, 178000, 192000, 188000, 181000, 195000, 189000, 193000, 186000, 200000]
    }
};
