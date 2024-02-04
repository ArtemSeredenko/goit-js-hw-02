function checkForSpam(message) {
  const lowerCase = message.toLowerCase();
  let boolMessage;
  if (lowerCase.includes('spam') || lowerCase.includes('sale')) {
    boolMessage = 'true';
  } else {
    boolMessage = 'false';
  }
  return boolMessage;
}

console.log(checkForSpam('Последняя технология новостей')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
