document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.email-input');
    const joinButton = document.querySelector('.join-button');
    const signupForm = document.querySelector('.signup-form');

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email) {
            showMessage('Please enter your email address.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        joinButton.textContent = 'Joining...';
        joinButton.disabled = true;
        
        setTimeout(() => {
            showMessage('Thank you! You\'ve been added to the waitlist.', 'success');
            emailInput.value = '';
            joinButton.textContent = 'Join Waitlist';
            joinButton.disabled = false;
        }, 1500);
    }

    // Show message function
    function showMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageElement = document.createElement('div');
        messageElement.className = `message message-${type}`;
        messageElement.textContent = message;
        
        // Insert after the form
        signupForm.parentNode.insertBefore(messageElement, signupForm.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }

    // Add event listeners
    signupForm.addEventListener('submit', handleSubmit);
    joinButton.addEventListener('click', handleSubmit);
    
    // Add enter key support
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    });

    // Add focus effects
    emailInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    emailInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});
