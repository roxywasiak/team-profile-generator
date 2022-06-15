//require Employee //Employee constructor
const Intern = require("../Intern");
const name = "Rukhsana Wasiak";
const id = "12345678";
const email = "ruksclone@hotmail.com";
const school = "School of rock";
const role = "Intern";

//instance of employee
const instance = new Intern(name, id, email, school, role);

//return the expected role
describe("Intern", () => {
  it("should return the expected role", () => {
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

  //  get the school
  it("should return the expected school", () => {
    const actual = instance.getSchool();

    expect(actual).toEqual(school);
  });
});
