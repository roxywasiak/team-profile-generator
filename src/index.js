const path = require("path");
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
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { generateHTML, makeHTMLShell } = require("./utils/generatefile");

//init function
const init = async () => {
  //start the questions
  let inProgress = true;
  //empty object which the answers will get pushed too
  const teamMembers = { interns: [], engineers: [] };
  //get inquirer to prompt
  const { team } = await inquirer.prompt(teamQuestions);
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );
  const manager = new Manager(name, id, email, officeNumber);
  //add it to the teamMembers
  teamMembers.manager = manager;

  //whats next now in list of my qs

  //while loop
  //if statements
  //push into teamMembers object
  while (inProgress) {
    const { employeeRole } = await inquirer.prompt(employeeRoleQuestions);
    if (employeeRole == "Engineer") {
      const { name, id, email, gitHubUsername } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer(name, id, email, gitHubUsername);
      teamMembers.engineers.push(engineer);
    }
    if (employeeRole == "Intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );
      const intern = new Intern(name, id, email, school);
      teamMembers.interns.push(intern);
    }
    const addNewPerson = await inquirer.prompt(questionsContinue);
    console.log(addNewPerson);
    if (!addNewPerson.addEmployee) {
      inProgress = false;
    }
  }
  if (!inProgress) {
    const newHTMLPage = generateHTML(team, teamMembers);
    const html = makeHTMLShell(newHTMLPage);
    console.log(newHTMLPage);
    //write to file
    writeToFile(path.join(__dirname, "../dist/index.html"), html);
    console.log("Your Team Profile has been created");
  }
  //get the generated file
};

//make sure to call the initialise otherwise your code won't run
init();
