"use strict"; //treats all JS code as per new version.
//alert(3+3) // will not work as we are using nodejs not browser.

// String
let name = "Alice";
console.log(name); // Output: "Alice"

// Number
let age = 30;
console.log(age); // Output: 30

// BigInt (requires BigInt support in your environment)
const bigIntNumber = 900719925124740999n;
console.log(bigIntNumber); // Output: 900719925124740999n

// Boolean
let isLoggedIn = true;
console.log(isLoggedIn); // Output: true

// undefined
let emptyVar;
console.log(emptyVar); // Output: undefined

// null
let cancelledOrder = null;
console.log(cancelledOrder); // Output: null

// Symbol (use with caution as it's not very common)
let uniqueSymbol = Symbol("uniqueID");
console.log(uniqueSymbol); // Output: Symbol(uniqueID) (unique value)
