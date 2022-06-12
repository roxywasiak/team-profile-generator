//require Employee //Employee constructor
const Employee = require("../lib/Employee");

//instance of employee
const instance = new Employee(
  "Rukhsana Wasiak",
  "12345678",
  "ruksclone@hotmail.com"
);

//return the expected role
describe("Employee", () => {
  it("should be an instance of Employee", () => {
    const expected = "Employee";
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
});
