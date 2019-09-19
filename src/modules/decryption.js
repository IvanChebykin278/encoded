import { shiftAlphabet } from "./shift";

export const decrypt = (message, alphabet) => {
    var aEncryptedMessages = [];
    for(var shift = 1; shift < alphabet.length; shift++) {
        var shiftedAlphabet = shiftAlphabet(shift, alphabet);
        var encryptedMessage = '';
        for (var i = 0; i < message.length; i++) {
            if (message[i] == ' ') {
                encryptedMessage = encryptedMessage.concat(' ');
                continue};
            var indexOfLetter = shiftedAlphabet.indexOf(message[i].toUpperCase());
            encryptedMessage = encryptedMessage.concat(alphabet[indexOfLetter]);
        }
        aEncryptedMessages.push(encryptedMessage.toLowerCase());
    }
    return aEncryptedMessages;
}