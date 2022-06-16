//require Employee //Employee constructor
const Manager = require("../Manager");
const name = "Rukhsana Wasiak";
const id = "12345678";
const email = "ruksclone@hotmail.com,";
const officeNumber = "87654321";
const role = "Manager";
//instance of employee
const instance = new Manager(name, id, email, officeNumber);

//return the expected role
describe("Manager", () => {
  it("should be an instance of Manager", () => {
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

  //  get the office number
  it("should return the expected office number", () => {
    const actual = instance.getOfficeNumber();

    expect(actual).toEqual(officeNumber);
  });
});
