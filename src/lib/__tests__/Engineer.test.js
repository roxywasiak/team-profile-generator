//require Employee //Employee constructor
const Engineer = require("../Engineer");
const name = "Rukhsana Wasiak";
const id = "12345678";
const email = "ruksclone@hotmail.com,";
const github = "getGithubUsername";
const role = "Engineer";

//instance of employee
const instance = new Engineer(name, id, email, github, role);

//return the expected role
describe("Engineer", () => {
  it("should be an instance of Engineer", () => {
    const actual = instance.getRole();

    expect(actual).toEqual(role);
  });

  //get the name
  it("should return the expected name", () => {
    const actual = instance.getName();

    expect(actual).toEqual(name);
  });

  //get the id
  it("should return the expected id", () => {
    const actual = instance.getId();

    expect(actual).toEqual(id);
  });

  //get the email
  it("should return the expected email", () => {
    const actual = instance.getEmail();

    expect(actual).toEqual(email);
  });

  //  get the github
  it("should return the expected gitHubUsername", () => {
    const actual = instance.getGithubUsername();

    expect(actual).toEqual(github);
  });
});
