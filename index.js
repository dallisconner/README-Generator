var inquirer = require("inquirer");
var fs = require("fs");

// array of formatted user responses
var answers = [];

//function to format user responses
function writeAnswers(response)
{

  answers[0] = response.title;

}

// function to write README file
function writeToFile() {

  answers.forEach(element =>

    fs.appendFile("README.md",element + '\n', function(err) {
      if (err) {
        return console.log(err);
      }
    }

  ));
    
}


// function to initialize program
function init() {

    inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your application?",
      name: "title"
    },
    {
      type: "input",
      message: "Please write a brief description of your application:",
      name: "description"
    },
    {
      type: "list",
      message: "Please select a license:",
      choices:["MIT","GPL","Apache"],
      name: "license"
    }
  ])
  .then(function(response) {

    fs.writeFile("README.md", "#" + response.title + '\n', function(err) {
      if (err) {
        return console.log(err);
      }
    });

    writeAnswers(response);
    writeToFile();

  });

}

// function call to initialize program
init();
