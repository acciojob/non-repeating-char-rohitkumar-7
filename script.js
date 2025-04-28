function firstNonRepeatedChar(str) {
 // Write your code here
	const count = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    count[char] = (count[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
