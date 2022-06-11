//require Employee //Employee constructor
const Employee = require("../lib/Employee");

//instance of employee
const instance = new Employee({
  name: "Rukhsana Wasiak",
  id: "12345678",
  email: "ruksclone@hotmail.com",
});

//return the expected role
describe("Employee", () => {
  test("should be an instance of Employee", () => {
    const expected = "Employee";
    const actual = instance.getRole();
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
});
