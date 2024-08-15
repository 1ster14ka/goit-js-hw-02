function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let amountCredits = customerCredits - quantity * pricePerDroid;
  if (amountCredits < 0) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${
      quantity * pricePerDroid
    } credits!`;
  }
}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));
