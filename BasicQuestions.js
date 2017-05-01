var BasicCard = require("./BasicCard.js");

var basicArray = [];

var cheese = new BasicCard("Cheese", "Delicious and made of milk.");
basicArray.push(cheese);
var feet = new BasicCard("Feet", "Has 12 inches.");
basicArray.push(feet);
var toyota = new BasicCard("Toyota", "Japanese car company.");
basicArray.push(toyota);
var samurai = new BasicCard("Samurai", "Japanese warrior.");
basicArray.push(samurai);
var ninja = new BasicCard("Ninja", "Japanese assassin");
basicArray.push(ninja);

// console.log(basicArray); 

module.exports = basicArray;