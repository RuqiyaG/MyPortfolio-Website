document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('responseMessage');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
        responseMessage.textContent = 'Thank you for contacting!';
        responseMessage.classList.remove('error');
        responseMessage.classList.add('success');

    } else {
        responseMessage.textContent = 'Enter an email address.';
        responseMessage.classList.remove('success');
        responseMessage.classList.add('error');
    }
    document.getElementById('contactForm').reset();
});
