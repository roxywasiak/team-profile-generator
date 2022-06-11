// build the team name
const teamQuestions = [
  {
    type: "input",
    message: "Enter a team name:",
    name: " teamName",
  },
];

// manager questions name id email office number
//not sure if I need office number
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
const engineerQuestions = [
  {
    type: "input",
    message: "Enter employee name",
    name: "name",
  },
  {
    type: "input",
    message: "Enter employee id",
    name: "id",
  },
  {
    type: "input",
    message: "Enter employee email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter employee github",
    name: "github",
  },
];

//intern questions
const internQuestions = [
  {
    type: "input",
    message: "Enter employee name",
    name: "name",
  },
  {
    type: "input",
    message: "Enter employee id",
    name: "id",
  },
  {
    type: "input",
    message: "Enter employee email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the employee school",
    name: "school",
  },
];

//continue questions/confirm to add another etc type confirm?
const questionsContinue = [
  {
    type: "confirm",
    message: "Do you want to add another employeee?",
    name: "addEmployee",
  },
];

//export the objects
module.exports = {
  teamQuestions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  questionsContinue,
};
