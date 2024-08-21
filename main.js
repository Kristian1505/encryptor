// main.js

document.getElementById('encryptBtn').addEventListener('click', encryptText);
document.getElementById('decryptBtn').addEventListener('click', decryptText);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);

function encryptText() {
    let text = document.getElementById('encryptField').value;

    if (/^[a-z\s]+$/.test(text)) {
        let encryptedText = '';
        for (let char of text) {
            switch (char) {
                case 'e':
                    encryptedText += 'enter';
                    break;
                case 'i':
                    encryptedText += 'imes';
                    break;
                case 'a':
                    encryptedText += 'ai';
                    break;
                case 'o':
                    encryptedText += 'ober';
                    break;
                case 'u':
                    encryptedText += 'ufat';
                    break;
                default:
                    encryptedText += char;
            }
        }
        document.getElementById('resultField').value = encryptedText;
    } else {
        alert('Please use only lowercase letters without accents or special characters.');
    }
}

function decryptText() {
    let text = document.getElementById('encryptField').value;

    if (/^[a-z\s]+$/.test(text)) {
        let decryptedText = text;
        decryptedText = decryptLogic(decryptedText, 'enter', 'e');
        decryptedText = decryptLogic(decryptedText, 'imes', 'i');
        decryptedText = decryptLogic(decryptedText, 'ai', 'a');
        decryptedText = decryptLogic(decryptedText, 'ober', 'o');
        decryptedText = decryptLogic(decryptedText, 'ufat', 'u');
        
        document.getElementById('resultField').value = decryptedText;
    } else {
        alert('Please use only lowercase letters without accents or special characters.');
    }
}

function decryptLogic(text, encrypted, original) {
    let result = '';
    let i = 0;

    while (i < text.length) {
        if (text.substr(i, encrypted.length) === encrypted) {
            result += original;
            i += encrypted.length;
        } else {
            result += text[i];
            i++;
        }
    }

    return result;
}

function copyToClipboard() {
    let resultField = document.getElementById('resultField');
    navigator.clipboard.writeText(resultField.value)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}
