var inquirer = require("inquirer");
var fs = require("fs");

// array of formatted user responses
var answers = ["","","","","","","",""];

//function to format user responses
function writeAnswers(response)
{

  answers[0] = "## Description" + '\n' + response.description + '\n';
  answers[1] = "## Table of Contents" + '\n' + response + '\n';
  answers[2] = "## Installation" + '\n' + response.installation + '\n';
  answers[3] = "## Usage" + '\n' + response.usage + '\n';
  answers[4] = "## License" + '\n' + response.license + '\n';
  answers[5] = "## Contributing" + '\n' + response.contributing + '\n';
  answers[6] = "## Tests" + '\n' + response.tests + '\n';
  answers[7] = "## Questions" + '\n' + response.questionsGH + '\n' + response.questionsEmail;

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
      type: "input",
      message: "Please detail instructions for the proper installation of this application:",
      name: "installation"
    },
    {
      type: "input",
      message: "Please detail usage instructions for this application:",
      name: "usage"
    },
    {
      type: "list",
      message: "Please select a license:",
      choices:["MIT","GPL","Apache"],
      name: "license"
    },
    {
      type: "input",
      message: "Please describe any methods with which to contribute to the development of this application:",
      name: "contributing"
    },
    {
      type: "input",
      message: "Please describe any tests to be performed on this application:",
      name: "tests"
    },
    {
      type: "input",
      message: "Please provide your GitHub username:",
      name: "questionsGH"
    },
    {
      type: "input",
      message: "Please provide a contact email address:",
      name: "questionsEmail"
    }

  ])
  .then(function(response) {

    fs.writeFile("README.md", "# " + response.title + '\n', function(err) {
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
