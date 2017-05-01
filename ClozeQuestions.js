var ClozeCard = require("./ClozeCard.js");

var clozeArray = [];

var washington = new ClozeCard("George Washington", "George Washington was the first president of the USA");
clozeArray.push(washington);
var hamilton = new ClozeCard("Alexander Hamilton", "The national bank was established by Alexander Hamilton.")
clozeArray.push(hamilton);

module.exports = clozeArray;