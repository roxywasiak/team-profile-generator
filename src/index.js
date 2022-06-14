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
const { generateHTML } = require("./utils/generatefile");

//init function
const init = () => {
  //start the questions
  let inProgress = true;
  //empty object which the answers will get pushed too
  const teamMembers = [];
//get inquirer to prompt
  const {teamName} = await inquirer.prompt(teamQuestions);
  const {name, id, email, officeNumber,} = await inquirer.prompt{
    managerQuestions
  };
  const manager = new Manager ({name, id, email,officeNumber});
  //add it to the teamMembers
  teamMembers.push(manager);

  //while loop
  while (inProgress)
  //whats next now in list of my qs

  //if statements

  //get the generated file
  const newHTMLPage = generateHTML(teamName, teamMembers);

  //write to file
  writeToFile("./dis/team.profil.html",);
  console.log("Your teampage has been created");

};
