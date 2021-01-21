// Create a function that returns the first 3 letters of a string.
//
// Examples:
//
// first3("Techtonica") --> "Tec"
//
// first3("Baby Yoda") --> "Bab"
//
// * Hint: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

function first3(string){
  return(
    string[0]+string[1]+string[2]
  )
}
console.log(first3("wisteria"))
module.exports = first3;
