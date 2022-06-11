//require Employee //Employee constructor
const Intern = require("../lib/Intern");

//instance of employee
const instance = new Intern({
  name: "Rukhsana Wasiak",
  id: "12345678",
  email: "ruksclone@hotmail.com",
  school: "school of rock",
});

//return the expected role
describe("Intern", () => {
  test("should be an instance of Intern", () => {
    const expected = "Intern";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  //get the name
  test("should return the expected name", () => {
    const expected = "Rukhsana Wasiak";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  //get the id
  test("should return the expected id", () => {
    const expected = "06111983";
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  //get the email
  test("should return the expected email", () => {
    const expected = "ruksclone@hotmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });

  //  get the office number
  test("should return the expected school", () => {
    const expected = "school of rock";
    const actual = instance.getSchool();

    expect(actual).toEqual(expected);
  });
});
