// Handle login form submission
document.getElementById('login-form-data').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send login request to backend
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '../kaysmusic.html'; // Redirect to the landing page
        } else {
            alert('Login failed: ' + data.error);
        }
    })
    .catch(err => {
        console.error('Error:', err);
    });
});

// Handle signup form submission
document.getElementById('signup-form-data').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Send signup request to backend
    fetch('signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, password: newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Account created successfully. You can now login.');
        } else {
            alert('Error: ' + data.error);
        }
    })
    .catch(err => {
        console.error('Error:', err);
    });
});
