```javascript
function showWelcomeMessageIfFirstTime() {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
        alert('Welcome! Thanks for visiting our site for the first time.');
        localStorage.setItem('hasVisited', 'true');
    }
}

// Call this function on page load
window.addEventListener('DOMContentLoaded', showWelcomeMessageIfFirstTime);
```