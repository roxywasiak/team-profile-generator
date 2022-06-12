//require Employee //Employee constructor
const Manager = require("../lib/Manager");

//instance of employee
const instance = new Manager(
  "Rukhsana Wasiak",
  "12345678",
  "ruksclone@hotmail.com",
  "87654321",
  "manager"
);

//return the expected role
describe("Manager", () => {
  it("should be an instance of Manager", () => {
    const expected = "Manager";
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

  //  get the office number
  it("should return the expected office number", () => {
    const expected = "87654321";
    const actual = instance.getOfficeNumber();

    expect(actual).toEqual(expected);
  });
});
