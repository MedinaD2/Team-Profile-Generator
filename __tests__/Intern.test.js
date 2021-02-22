const Intern = require("../lib/Intern");

// CAPTURE SCHOOL
test("Provide School from the constructor argument", () => {
  const testValue = "UofA";
  const emp = new Intern("Joe", 1, "Testemail@test.com", testValue);
  expect(emp.school).toBe(testValue);
});

// EMPLOYEE INTERN ROLE
test("getRole() worked!", () => {
  const testValue = "Intern";
  const emp = new Intern("Joe", 1, "Testemail@test.com", "Juliard");
  expect(emp.getRole()).toBe(testValue);
});

test("Get School from getSchool()", () => {
  const testValue = "UofA";
  const emp = new Intern("Joe", 1, "Testemail@test.com", testValue);
  expect(emp.getSchool()).toBe(testValue);
});