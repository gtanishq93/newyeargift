// Play background music
function playBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    
    // Try to play music automatically
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Autoplay started successfully
                musicIcon.textContent = '🔊';
            })
            .catch(() => {
                // Autoplay was prevented (common on mobile)
                musicIcon.textContent = '🔇';
            });
    }
    
    // Toggle music on button click
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicIcon.textContent = '🔊';
        } else {
            bgMusic.pause();
            musicIcon.textContent = '🔇';
        }
    });
    
    // Set volume to a pleasant level
    bgMusic.volume = 0.3;
}

// Open curtains on page load
function openCurtains() {
    const curtainLeft = document.getElementById('curtainLeft');
    const curtainRight = document.getElementById('curtainRight');
    
    setTimeout(() => {
        curtainLeft.classList.add('open');
        curtainRight.classList.add('open');
    }, 500);
}

// Create floating hearts in background
function createHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heartsContainer.appendChild(heart);
    }
}

// Create confetti elements
function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const confettiCount = 15;
    const confettiTypes = ['🎉', '✨', '🎊', '💫', '⭐'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 5) + 's';
        confettiContainer.appendChild(confetti);
    }
}

// Show messages with delay
function showMessages() {
    const mainMessage = document.getElementById('mainMessage');
    const heartMessage = document.getElementById('heartMessage');
    
    // Main message appears after 2 seconds (handled by CSS animation)
    // Heart message appears after 4 seconds (handled by CSS animation)
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    playBackgroundMusic();
    openCurtains();
    createHearts();
    createConfetti();
    showMessages();
    
    // Add a subtle pulse effect to balloons on hover
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        balloon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add some sparkle effect on click
document.addEventListener('click', function(e) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.fontSize = '2rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'fadeOut 1s forwards';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

// Add fadeOut animation for sparkles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-50px) scale(2);
        }
    }
`;
document.head.appendChild(style);