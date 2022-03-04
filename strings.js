let sentence = 'Red Dead Redemption 2 | (Xbox One)';

let getConsole = (phrase) => phrase.substr(phrase.indexOf('(')+1, phrase.indexOf(')')-1);

console.log(getConsole(sentence));
