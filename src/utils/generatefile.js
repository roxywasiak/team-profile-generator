//import the classes
const { Engineer, Intern, Manager } = require("./lib/index");

//generate the cards with the html

//manager card
const generateManagerCard = (manager) => {
  return `<div class="card" style="width: 18rem">
  <img
    src="./assets/images/jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg"
    class="card-img-top"
    alt="Plain Background"
  />
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>

    <p class="card-text">${manager.role}</p>
    <p class="card-text">${manager.id}</p>
    <p class="card-text">${manager.officeNumber}</p>
    <p class="card-text">Please get in touch if you have any concerns</p>
    <a href="mailto:${manager.email}" class="btn btn-primary"
      >Email</a
    >
  </div>
</div>`;
};

//engineer card
const generateEngineerCard = (engineer) => {
  return ` <div class="card" style="width: 18rem">
  <img
    src="./assets/images/jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg"
    class="card-img-top"
    alt="Plain Background"
  />
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">${engineer.role}</p>
    <p class="card-text">${engineer.id}</p>
    <p class="card-text">
      Please get in touch if you you would like to collaborate
    </p>
    <p class="card-text">Contact me via Github</p>
    <a href="https://github.com/${engineer.gitHubUsername}" class="btn btn-primary"
      >GitHub</a
    >
  </div>
</div>`;
};

//intern card
const generateInternCard = (intern) => {
  return ` <div class="card" style="width: 18rem">
  <img
    src="./assets/images/jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg"
    class="card-img-top"
    alt="Plain Background"
  />
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <p class="card-text">${intern.role}</p>
    <p class="card-text">${intern.id}</p>
    <p class="card-text">${intern.school}</p>
    <p class="card-text">
      If you would like to ge tin touch please contact me below
    </p>
    <a href="mailto:${intern.email}" class="btn btn-primary"
      >Email</a
    >
  </div>
</div>`;
};

//go through the generated file for each role
const generateHTML = (teamName, teamMembers) => {
  const generateNewCard = (teamMember) => {
    //if statements
    if (teamMember instanceof Manager) {
      //return each generated card
      return generateManagerCard(teamMember);
    }
    if (teamMember instanceof Engineer) {
      return generateEngineerCard(teamMember);
    }
    if (teamMember instanceof Intern) {
      return generateInternCard(teamMember);
    }
  };
  //map over each teamMember card pass in the generated card
  const teamMembersCards = teamMembers.map(generateNewCard);
  //need to add the big file copied over with template literals except the 4 SECTIONS?
  //return the cards and join
  const cardContainer = teamMembersCards.join("");
  return ``;
};

//export the modules
module.exports = {
  generateHTML,
  cardContainer,
};
