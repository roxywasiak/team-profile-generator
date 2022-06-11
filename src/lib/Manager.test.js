//require Employee //Employee constructor
const Manager = require("../lib/Manager");

//instance of employee
const instance = new Manager({
  name: "Rukhsana Wasiak",
  id: "12345678",
  email: "ruksclone@hotmail.com",
  officeNumber: "87654321",
});

//return the expected role
describe("Manager", () => {
  test("should be an instance of Manager", () => {
    const expected = "Manager";
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
  test("should return the expected office number", () => {
    const expected = "ruksclone@hotmail.com";
    const actual = instance.getOfficeNumber();

    expect(actual).toEqual(expected);
  });
});
