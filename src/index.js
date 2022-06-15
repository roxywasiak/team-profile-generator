console.log("hello from index.js");
//install the dependencies
const inquirer = require("inquirer");

//import the questions
//import the object as require you want:
const {
  teamQuestions,
  employeeRoleQuestions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  questionsContinue,
} = require("./utils/questions");

//write to file function
const { writeToFile } = require("./utils/writetofile");
//generate html cards file

//import classes
const { Manager } = require("./lib/Manager");
//NOT SURE WHY THESE ARE NOT BEING READ?
const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");
const { generateHTML } = require("../utils/generatefile");

//init function
const init = async () => {
  //start the questions
  let inProgress = true;
  //empty object which the answers will get pushed too
  const teamMembers = [];
  //get inquirer to prompt
  const { teamName } = await inquirer.prompt(teamQuestions);
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );
  const manager = new Manager({ name, id, email, officeNumber });
  //add it to the teamMembers
  teamMembers.push(manager);
  //whats next now in list of my qs

  //while loop
  //if statements
  //push into teamMembers object
  while (inProgress) {
    const { employeeRoleQuestions } = await inquirer.prompt(
      employeeRoleQuestions
    );
    if (employeeRoleQuestions == "Engineer") {
      const { name, id, email, gitHubUsername } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer({ name, id, email, gitHubUsername });
      teamMembers.push(engineer);
    }
    if (employeeRoleQuestions == "Intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );
      const intern = new Intern({ name, id, email, school });
      teamMembers.push(intern);
    }
    const addNewPerson = await inquirer.prompt(questionsContinue);
    if (!addNewPerson.addAnotherEmployee) {
      inProgress = false;
    }
  }

  //get the generated file
  const newHTMLPage = generateHTML(teamName, teamMembers);

  //write to file
  writeToFile("./dis/team.profil.html");
  console.log("Your Team Profile has been created");
};
