import React from 'react';

class SingleInput extends React.Component {
  constructor() {
    super();
    this.convertFromCamelCase = this.convertFromCamelCase.bind(this);
  }
  convertFromCamelCase(string) {  
    if (!string) {
      return '';
    }  
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

    return firstWordCapitalilzed + secondWord ? firstWordCapitalilzed + ' ' + this.convertFromCamelCase(secondWord) : '';
  }

  render() {
    let displayName = this.convertFromCamelCase(this.props.category);
    return (
      <div className="form-group">
        <label > {displayName} </label>
        <input placeholder={displayName} onChange={this.props.onChange} className="form-control" type="text" name={this.props.category} />
      </div>
   )
  }
}

export default SingleInput;