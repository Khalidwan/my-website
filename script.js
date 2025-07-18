document.addEventListener('DOMContentLoaded', function() {
    
    // ======== Reliable Timer-Based Chatbot Trial ========
    const activationOverlay = document.getElementById('activation-overlay');
    const startChatBtn = document.getElementById('start-chat-btn');
    const upgradePopup = document.getElementById('upgrade-popup');
    
    // Trial duration in milliseconds (e.g., 45 seconds)
    const trialDuration = 45000;
    
    if (startChatBtn) {
        startChatBtn.addEventListener('click', () => {
            // Hide the activation overlay
            activationOverlay.style.opacity = '0';
            activationOverlay.style.visibility = 'hidden';
            
            // Start the timer to show the upgrade popup
            setTimeout(showUpgradePopup, trialDuration);
        });
    }
    
    // Function to show the upgrade popup
    window.showUpgradePopup = function() {
        if (upgradePopup) {
            upgradePopup.style.display = 'block';
        }
    }
    
    // Function to close the upgrade popup
    window.closePopup = function() {
        if (upgradePopup) {
            upgradePopup.style.display = 'none';
        }
    }
});