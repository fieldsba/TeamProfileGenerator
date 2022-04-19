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