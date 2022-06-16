//import the classes

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
    <a href="https://github.com/${engineer.github}" class="btn btn-primary"
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
      If you would like to get in touch please contact me below
    </p>
    <a href="mailto:${intern.email}" class="btn btn-primary"
      >Email</a
    >
  </div>
</div>`;
};

//go through the generated file for each role
const generateHTML = (teamName, teamMembers) => {
  const generatedCards = {
    manager: generateManagerCard(teamMembers.manager),
    interns: teamMembers.interns.map(generateInternCard),
    engineers: teamMembers.engineers.map(generateEngineerCard),
    teamName,
  };

  console.log(generatedCards);
  //need to add the big file copied over with template literals except the 4 SECTIONS?
  //return the cards and join

  return generatedCards;
};

const makeHTMLShell = (teamData) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Team Profile Generator</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./styles.css" />
    </head>
    <body>
      <h1 class="text-center m-3">⚡️${teamData.teamName}⚡️</h1>
      <div class="d-flex flex-row flex-wrap justify-content-center">
        <!-- main cards -->
        ${teamData.manager}
        ${teamData.interns.join("")}
        ${teamData.engineers.join("")}
    </div>
    </body>
  </html>`;
};

//export the modules
module.exports = {
  generateHTML,
  makeHTMLShell,
};
