console.log("hello from index.js");
//install the dependencies
const inquirer = require("inquirer");

//import the questions

//import the object as require you want:
const {
  teamQuestions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  questionsContinue,
} = require("questions.js");

//write to file function
const { writeToFile } = require("./utils/writetofile");
//generate html cards file

//import classes
const { Manager } = require("./lib/Manager");
const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Engineer");

//init function
