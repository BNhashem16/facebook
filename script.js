document.querySelector('.login').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the response data
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

