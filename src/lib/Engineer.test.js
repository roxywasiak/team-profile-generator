//require Employee //Employee constructor
const Engineer = require("../lib/Engineer");

//instance of employee
const instance = new Engineer({
  name: "Rukhsana Wasiak",
  id: "12345678",
  email: "ruksclone@hotmail.com",
});

//return the expected role
describe("Engineer", () => {
  test("should be an instance of Engineer", () => {
    const expected = "Engineer";
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

  //  get the github
  test("should return the expected github username", () => {
    const expected = "roxywasiak";
    const instance = new Engineer({ github: "roxywasiak" });
    const actual = instance.getOfficeNumber();

    expect(actual).toEqual(expected);
  });
});
