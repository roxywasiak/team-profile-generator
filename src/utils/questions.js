// build the team name
const teamQuestions = [
  {
    type: "input",
    message: "Enter a team name:",
    name: " teamName",
  },
];

// manager questions name id email office number
const managerQuestions = [
  {
    type: "input",
    message: " Enter your name",
    name: "name",
  },
  {
    type: "input",
    message: "Enter your id",
    name: "id",
  },
  {
    type: "input",
    message: "Enter your email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter your office number",
    name: "officeNumber",
  },
];

//employee role
const employeeRoleQuestions = [
  {
    type: "list",
    message: "Select employee role",
    name: "employeeRole",
    choices: ["Engineer", "Intern"],
  },
];

// engineer questions
const engineerQuestions = [{}];

//intern questions
const internQuestions = [{}];

//continue questions/confirm to add another etc
const questionsContinue = [{}];

//export the objects
module.exports = {
  teamQuestions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  questionsContinue,
};
