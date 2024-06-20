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
console.log(emptyVar); // Output: undefined/ value not assigned

// null = standalone value
let cancelledOrder = null;
console.log(cancelledOrder); // Output: null

// Symbol (use with caution as it's not very common)
let uniqueSymbol = Symbol("uniqueID");
console.log(uniqueSymbol); // Output: Symbol(uniqueID) (unique value)
//undefined is a datatype
//null is an object
// Object
const person = {
    firstName: "Bob",
    lastName: "Smith",
    age: 25
  };
  console.log(person); // Output: { firstName: "Bob", lastName: "Smith", age: 25 }
  
  // Array
  const colors = ["red", "green", "blue"];
  console.log(colors[1]); // Output: "green" (accessing element by index)
  
  // Function
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Charlie"); // Output: Hello, Charlie!
  