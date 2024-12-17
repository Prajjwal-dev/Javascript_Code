const outputElement = document.getElementById('output');

async function hackerman() {
    const messages = [
        "Initializing Hack program...",
        "Hacking Ashish's username...",
        "Username found: aashish17...",
        "Connecting to Facebook..."
    ];

    for (const message of messages) {
        await displayMessage(message);
    }
}

function displayMessage(message) {
    return new Promise((resolve) => {
        const typingIndicator = document.createElement('span');
        typingIndicator.classList.add('typing');
        typingIndicator.textContent = ' _';
        outputElement.appendChild(document.createTextNode(message));
        outputElement.appendChild(typingIndicator);

        setTimeout(() => {
            typingIndicator.remove();
            outputElement.appendChild(document.createTextNode('\n'));
            resolve();
        }, 2000);
    });
}

// Start the fake hacking program
hackerman();
