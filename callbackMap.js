var words = ["ground", "control", "to", "major", "tom"];

var lengthOfWord = words.map(function(word) {
  return word.length;
});

console.log(lengthOfWord);

var upperCaseWord = words.map(function(word) {
  return word.toUpperCase();
});

console.log(upperCaseWord);

var reverseWord = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(reverseWord);

