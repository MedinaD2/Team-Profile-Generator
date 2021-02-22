// requires/connects necessary constructor functions/modules.
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// returns test for office number w/ fake name, employee number and email.
test("Office Number set by constructor argument", () => {
  const testValue = 68;
  const emp = new Manager("Ryan", 1, "Testemail@test.com", testValue);
  expect(emp.officeNumber).toBe(testValue);
});
