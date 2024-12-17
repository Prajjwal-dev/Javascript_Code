class PasswordGenerator {
    constructor(length = 12) {
        this.length = length;
        this.lowercase = 'abcdefghijklmnopqrstuvwxyz';
        this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.numbers = '0123456789';
        this.specialCharacters = '!@#$%^&*()_+{}[]<>?/|';
        this.allCharacters = this.lowercase + this.uppercase + this.numbers + this.specialCharacters;
    }

    generate() {
        let password = '';
        // Ensure at least one of each required character type
        password += this.getRandomCharacter(this.lowercase);
        password += this.getRandomCharacter(this.uppercase);
        password += this.getRandomCharacter(this.specialCharacters);

        // Fill the rest of the password length with random characters
        for (let i = 3; i < this.length; i++) {
            password += this.getRandomCharacter(this.allCharacters);
        }

        // Shuffle the password to ensure randomness
        return this.shufflePassword(password);
    }

    getRandomCharacter(charSet) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        return charSet[randomIndex];
    }

    shufflePassword(password) {
        return password.split('').sort(() => Math.random() - 0.5).join('');
    }
}

// Function to generate password and display it
function generatePassword() {
    const generator = new PasswordGenerator(12); // You can change the length here
    const password = generator.generate();
    document.getElementById('password').value = password;
}
