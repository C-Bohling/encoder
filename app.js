// Define list of supported characters
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.,!?/&ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.,!?/&';

// Store all used elements as variables
const form = document.getElementById('UserEntry');

// This function acts is a caesar cipher
const encode = (string, number) => {
    let encodedString = '';
    for (let letter of string.toUpperCase()) {
        if (alphabet.includes(letter)) {
            encodedLetter = alphabet[alphabet.indexOf(letter) + Number(number)];
            if (encodedLetter !== undefined) {
                encodedString += encodedLetter;
            }
        } else {
            encodedString += letter;
        }
    }
    return encodedString;
}

// Uses the encode function, but negates the number
const decode = (string, number) => {
    return encode(string, -number);
}

// Replaces inputted text with translated text
// using the encode and decode functions depending
// on the actionChoice element
const translateTextArea = (formData) => {
    const toTranslate = formData.get('textField');
    const key = formData.get('secretKey');
    const actionChoice = formData.get('actionSelect');
    const textArea = document.getElementById('textField');
    if (actionChoice === 'encode') {
        textArea.value = encode(toTranslate, key);
    } else if (actionChoice === 'decode') {
        textArea.value = decode(toTranslate, key);
    }
}

const formSubmitted = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    translateTextArea(formData);
}

// Connect events
userEntry.onsubmit = formSubmitted;