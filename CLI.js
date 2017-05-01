'use strict';
var inquirer = require("inquirer");
var basicArray = require("./BasicQuestions.js");
var clozeArray = require("./ClozeQuestions.js");
var basicClone = basicArray.slice(0);
var clozeClone = clozeArray.slice(0);

var count = 0;

inquirer.prompt([{
    name: 'action',
    message: 'Choose a flash card type:',
    choices: ['Basic Card', 'Cloze Card'],
    type: 'list'
}]).then(function(userResponse) {
    if (userResponse.action === "Basic Card") {

        basicCardDisplay();

    } else if (userResponse.action === "Cloze Card") {
        clozeCardDisplay();
    }
})

function basicCardDisplay() {
    if (count < basicArray.length) {
        var index = Math.floor(Math.random() * basicClone.length);
        console.log("#".repeat(40));
        basicClone[index].showFront();
        inquirer.prompt([{
            name: "show",
            message: "See Back?",
            type: "confirm"
        }]).then(function(response) {
            if (response.show) basicClone[index].showBack();
            console.log("#".repeat(40) + "\n");
            basicClone.splice(index, 1);
            count++;
            basicCardDisplay();
        })
    }
}

function clozeCardDisplay() {
    if (count < clozeArray.length) {
        var index = Math.floor(Math.random() * clozeClone.length);
        console.log("#".repeat(40));
        clozeClone[index].showIncomplete();
        inquirer.prompt([{
            name: "show",
            message: "Do you want to see the back of this card?",
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