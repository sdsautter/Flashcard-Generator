'use strict';
var inquirer = require("inquirer");
var fs = require("fs");
var basicArray = require("./BasicQuestions.js");
var clozeArray = require("./ClozeQuestions.js");
var cardCreator = require("./CardCreator.js");
var basicClone = basicArray.slice(0);
var clozeClone = clozeArray.slice(0);

var count = 0;

inquirer.prompt([{
    name: 'action',
    message: 'Choose a flash card type:',
    choices: ['Basic Card', 'Cloze Card', 'Create a Card'],
    type: 'list'
}]).then(function(userResponse) {
    if (userResponse.action === "Basic Card") {

        basicCardDisplay();

    } else if (userResponse.action === "Cloze Card") {
        clozeCardDisplay();
    } else if (userResponse.action === "Create a Card") {
        cardCreator();
    }
})

function basicCardDisplay() {
    fs.readFile('./BasicCards.txt', 'UTF8', (err, data) => {
        if (err) throw err;
        basicClone = basicArray.slice(0);

        if (count < basicArray.length) {
            var index = Math.floor(Math.random() * basicClone.length);
            console.log("#".repeat(40));
            console.log(basicClone[index].front);
            inquirer.prompt([{
                name: "show",
                message: "See Back?",
                type: "confirm"
            }]).then(function(response) {
                if (response.show) {
                	console.log(basicClone[index].back);
                }
                console.log("#".repeat(40) + "\n");
                basicClone.splice(index, 1);
                count++;
                basicCardDisplay();
            })
        }
    });

}

function clozeCardDisplay() {
    if (count < clozeArray.length) {
        var index = Math.floor(Math.random() * clozeClone.length);
        console.log("#".repeat(40));
        clozeClone[index].showIncomplete();
        inquirer.prompt([{
            name: "show",
            message: "See full sentence?",
            type: "confirm"
        }]).then(function(response) {
            if (response.show) clozeClone[index].showComplete();
            console.log("#".repeat(40) + "\n");
            clozeClone.splice(index, 1);
            count++;
            clozeCardDisplay();
        })
    }
}
