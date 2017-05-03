var ClozeCard = require("./ClozeCard.js");

var clozeArray = [];

var washington = new ClozeCard("George Washington", "George Washington was the first president of the USA");
clozeArray.push(washington);
var hamilton = new ClozeCard("Alexander Hamilton", "The national bank was established by Alexander Hamilton.");
clozeArray.push(hamilton);
var paine = new ClozeCard("Thomas Paine", "Although he was born outside of the United States, Thomas Paine, the author of Common Sense, helped push the USA into revolution.");
clozeArray.push(paine);
var franklin = new ClozeCard("Benjamin Franklin", "Benjamin Franklin can be found on the $100 bill in spite of the fact that he was never president.");
clozeArray.push(franklin);
var foster = new ClozeCard("Jodie Foster", "In order to impress Jodie Foster, John Hinckley tried to assassinate Ronald Reagan.");
clozeArray.push(foster);

module.exports = clozeArray;