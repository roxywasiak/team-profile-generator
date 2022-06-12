//require Employee //Employee constructor
const Engineer = require("../lib/Engineer");

//instance of employee
const instance = new Engineer(
  "Rukhsana Wasiak",
  "12345678",
  "ruksclone@hotmail.com",
  "engineer",
  "roxy"
);

//return the expected role
describe("Engineer", () => {
  it("should be an instance of Engineer", () => {
    const expected = "Engineer";
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

  //  get the github
  it("should return the expected gitHubUsername", () => {
    const expected = "roxy";
    const actual = instance.getGithubUsername();

    expect(actual).toEqual(expected);
  });
});
