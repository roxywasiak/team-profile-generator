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
    <h5 class="card-title">Rukhsana Wasiak</h5>

    <p class="card-text">Manager</p>
    <p class="card-text">EMID-1000</p>
    <p class="card-text">Office Number 1</p>
    <p class="card-text">Please get in touch if you have any concerns</p>
    <a href="mailto:ruksclone@hotmail.com" class="btn btn-primary"
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
    <h5 class="card-title">Elon Musk</h5>
    <p class="card-text">Engineer</p>
    <p class="card-text">EMID-2000</p>
    <p class="card-text">
      Please get in touch if you you would like to collaborate
    </p>
    <p class="card-text">Contact me via Github</p>
    <a href="https://github.com/elonmusk" class="btn btn-primary"
      >GitHub</a
    >
  </div>
</div>`;
};

//intern card
const generateInternCard = () => {
  ` <div class="card" style="width: 18rem">
  <img
    src="./assets/images/jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg"
    class="card-img-top"
    alt="Plain Background"
  />
  <div class="card-body">
    <h5 class="card-title">Michael Jackson</h5>
    <p class="card-text">Intern</p>
    <p class="card-text">EMID-2000</p>
    <p class="card-text">School Of Rock</p>
    <p class="card-text">
      If you would like to ge tin touch please contact me below
    </p>
    <a href="mailto:ruksclone@icloud.com" class="btn btn-primary"
      >Email</a
    >
  </div>
</div>`;
};

//go through the generated file for each role
//if statements
//return each generated card

//map over each teamMember card pass in the generated card

//return the cards and join

//export the modules
