// Write function getLengthOfChar() that returns the number of identical characters "char" from the string

var str = "In any programming language, code needs to make decisions and carry out actions accordingly depending on different inputs."

var char = "a";

function getLengthOfChar() {
  var arr = str.split("");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      newArr += arr[i];
    }
  }
  return newArr.length;
}


console.log(getLengthOfChar()); // 9
