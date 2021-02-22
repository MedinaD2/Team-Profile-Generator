const { timeStamp } = require("console");
const Employee = require("../lib/Employee");

test ("New Employee generated", () => {
  const emp = new Employee();
  expect (typeof(emp)).toBe("object");
});

// RETURN EMPLOYEE EMAIL
test("Get email from getEmail()", () => {
  const testValue = "Testemail@test.com";
  const emp = new Employee("Steven", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

//EMPLOYEE ROLE
test("getRole() works", () => {
  const testValue = "Employee";
  const emp = new Employee("Joe", 1, "Testemail@test.com");
  expect(emp.getRole()).toBe(testValue);
});

// 
test("set Emplogyee Name with construcytor argument", () => {
  const name = "Joe";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

// ID WITH EMPLOYEE
test("Set ID with constructor argument", () => {
  const testValue = 100;
  const emp = new Employee("Steven", testValue);
  expect(emp.id).toBe(testValue);
});