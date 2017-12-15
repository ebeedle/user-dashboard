 const convertFromCamelCased = string => {    
    let chars = string.split('');
    let indexOfCapitalLetter;
    let firstWord;
    let secondWord;
    for (let i = 1; i < chars.length; i++) {
      let char = chars[i];
      if (char.toUpperCase() === char) {
        indexOfCapitalLetter = i;
        break;
      }
    }

    firstWord = chars.slice(0, indexOfCapitalLetter).join('');
    let firstWordCapitalilzed = firstWord.replace(chars[0], chars[0].toUpperCase());
    if (indexOfCapitalLetter !== undefined) {
      secondWord = chars.slice(indexOfCapitalLetter, string.length).join('');
    }
    if (secondWord) {
      return firstWordCapitalilzed + ' ' + convertFromCamelCased(secondWord);
    } else {
      return firstWordCapitalilzed
    }
  }

let x = convertFromCamelCased('johnWolfeBenDan')
console.log('x :', x)