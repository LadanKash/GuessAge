

document.getElementById('submitBtn').addEventListener('click', function() {
    const age = parseInt(document.getElementById('ageInput').value);
    let message = '';

    if (isNaN(age)) {
        message = 'Please enter a valid age.';
    } else {
        if (age < 18) {
            message = 'You are under 18 years old.';
        } else if (age >= 18 && age < 65) {
            message = 'You are an adult.';
        } else {
            message = 'You are a senior citizen.';
        }
    }

    document.getElementById('message').textContent = message;
});
