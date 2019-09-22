import { shiftAlphabet } from "./shift";

export const decrypt = (message, alphabet) => {
    debugger;

    var aEncryptedMessages = [];
    var shifts = searchShifts(message, alphabet);

    for(var j = 0; j < shifts.length; j++)
    {
        var shiftedAlphabet = shiftAlphabet(shifts[j], alphabet);
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

const searchShifts = (message, alphabet) => {

    var frequencyChars = [], numberChars = [];

    for(var i = 0; i < alphabet.length; i++) {

        var countChar = 0;

        for(var j = 0; j < message.length; j++) {
            countChar = (alphabet[i] == message[j]) ? (countChar + 1) : (countChar);
        }

        frequencyChars.push(countChar*100/message.length);

    }

    var maxFrequency = 0;
    for(var i = 0; i < frequencyChars.length; i++) {
        if(frequencyChars[i] > maxFrequency) {
            maxFrequency = frequencyChars[i];
        }
    }

    for(var i = 0; i < frequencyChars.length; i++) {
        if(frequencyChars[i] == maxFrequency) {
            numberChars.push(i);
        }
    }

    var shifts = [];
    for(var i = 0; i < numberChars.length; i++) {
        shifts.push(Math.abs(15 - numberChars[i]));
    }

    return shifts;

}