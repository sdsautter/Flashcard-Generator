var inquirer = require("inquirer");
var fs = require("fs");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

function cardCreator() {
    inquirer.prompt([{
        name: 'create',
        message: 'Which card type would you like to create?:',
        choices: ['Basic Card', 'Cloze Card'],
        type: 'list'
    }]).then(function(userResponse) {
        if (userResponse.create === "Basic Card") {
            basicCreator();
        } else if (userResponse.create === "Cloze Card") {
            clozeCreator();

        }
    })
}

function basicCreator() {
    inquirer.prompt([{
        name: 'front',
        message: 'Front of the flash card:',
        type: 'input'
    }, {
        name: 'back',
        message: 'Back of the flash card:',
        type: 'input'
    }]).then(function(userResponse) {
        var newBasic = new BasicCard(userResponse.front, userResponse.back);
        newBasic = JSON.stringify(newBasic);
        fs.appendFile("BasicCards.txt", newBasic + "\n", function(err) {
            if (err) console.log(err);
            else console.log("Content Added!");
        });
    });
}

function clozeCreator() {
    inquirer.prompt([{
        name: 'sentence',
        message: 'What is your factual statement:',
        type: 'input'
    }, {
        name: 'answer',
        message: 'Which word do you want to hide:',
        type: 'input'
    }]).then(function(userResponse) {
        var newCloze = new ClozeCard(userResponse.answer, userResponse.sentence);
        newCloze = JSON.stringify(newCloze);
        fs.appendFile("ClozeCards.txt", newCloze + "\n", function(err) {
            if (err) console.log(err);
            else console.log("Content Added!");
        });
    });
}

module.exports = cardCreator;
