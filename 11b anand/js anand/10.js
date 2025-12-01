let n = 21;
function isPalindrome(n) {
  return n.toString() === n.toString().split('').reverse().join('');
}
const result = isPalindrome(n);
console.log(result);