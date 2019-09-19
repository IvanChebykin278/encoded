export const shiftAlphabet = (shift, alphabet) => {
    var shiftedAlphabet = ''; //новый алфавит 
    for (var i = 0; i < alphabet.length; i++) {
        //console.log(i, alphabet[i+shift]);
        var currentLetter = (alphabet[i + shift] === undefined) ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift]); //Текущая буква со сдвигом, если выходим за рамки длины алфавита - берем с начала алфавита

        shiftedAlphabet = shiftedAlphabet.concat(currentLetter);
    }
    return shiftedAlphabet;
}