const bookTitle='Merchant of Venice';
const price=20;
const quantity=10;
const taxRate=8.5;

const subtotal=price * quantity;

tax=subtotal * (taxRate/100);

total=subtotal+tax;

console.log(`You bought ${quantity} copies of ${bookTitle}.`)

console.log(`Subtotal: $${subtotal.toFixed(2)}`);

console.log(`Tax: $${tax}`);

console.log(`Total: $${total}`);