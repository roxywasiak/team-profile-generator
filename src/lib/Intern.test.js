//require Employee //Employee constructor
const Intern = require("../lib/Intern");

//instance of employee
const instance = new Intern(
  "Rukhsana Wasiak",
  "12345678",
  "ruksclone@hotmail.com",
  "school of rock",
  "intern"
);

//return the expected role
describe("Intern", () => {
  it("should return the expected role", () => {
    const expected = "Intern";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  //get the name
  it("should return the expected name", () => {
    const expected = "Rukhsana Wasiak";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  //get the id
  it("should return the expected id", () => {
    const expected = "12345678";
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  //get the email
  it("should return the expected email", () => {
    const expected = "ruksclone@hotmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });

  //  get the school
  it("should return the expected school", () => {
    const expected = "school of rock";

    const intern = new Intern(instance);
    const actual = instance.getSchool();

    expect(actual).toEqual(expected);
  });
});
