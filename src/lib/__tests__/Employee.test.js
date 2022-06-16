//require Employee //Employee constructor
const Employee = require("../Employee");
const name = "Rukhsana Wasiak";
const id = "12345678";
const email = "ruksclone@hotmail.com,";
const role = "Employee";
//instance of employee
const instance = new Employee(name, id, email);

//return the expected role
describe("Employee", () => {
  it("should be an instance of Employee", () => {
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
});
