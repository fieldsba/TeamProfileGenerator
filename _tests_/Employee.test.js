const { test, expect } = require('@jest/globals');
const { getMaxListeners, mainModule } = require('process');
const Employee = require('../lib/Employee.js');

test("creates new employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("checks attributes", () => {
    const employee = new Employee("Fred", 12345, "fred@mail.com");
    expect(employee.name).toBe("Fred");
    expect(employee.id).toBe(12345);
    expect(employee.email).toBe("fred@mail.com");
});

test("checks getRole method", () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe("Employee");
});

test("checks getName method", () => {
    const employee = new Employee("Fred", 12345, "fred@mail.com");
    expect(employee.getName()).toBe("Fred");
});

test("checks getId method", () => {
    const employee = new Employee("Fred", 12345, "fred@mail.com");
    expect(employee.getId()).toBe(12345);
});

test("checks getEmail method", () => {
    const employee = new Employee("Fred", 12345, "fred@mail.com");
    expect(employee.getEmail()).toBe("fred@mail.com");
});