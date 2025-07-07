const kms = Number(prompt('How many kilometers do you want to travel for?'))
const age = Number(prompt('What is your age?'))

let start_price = kms * 0.21;
console.log(`The standard price for a train ticket for a distance of ${kms}km is ${start_price}`)

let price;
let discount;

if (age < 18) {
    discount = 0.2
} else if (age > 65) {
    discount = 0.4 
}


price = (start_price - (start_price * discount)).toFixed(2)
console.log(`The price of your ticket is: € ${price}`)

document.writeln(`The price of your ticket is: € ${price}`)

