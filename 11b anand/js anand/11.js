function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function isPalindrome(n) {
  const str = n.toString();
  return str === str.split('').reverse().join('');
}

function isPalindromePrime(n) {
  return isPrime(n) && isPalindrome(n);
}


console.log(isPalindromePrime(131)); 
