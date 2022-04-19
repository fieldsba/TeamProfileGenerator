const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test("creates new engineer object", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

test("checks attributes", () => {
    const engineer = new Engineer("Sam", "23456", "sam@mail.com", "SamTheEngineer");
    expect(engineer.name).toBe("Sam");
    expect(engineer.id).toBe("23456");
    expect(engineer.email).toBe("sam@mail.com");
    expect(engineer.github).toBe("SamTheEngineer");
});

test("checks getGithub method", () => {
    const engineer = new Engineer("Sam", "23456", "sam@mail.com", "SamTheEngineer");
    expect(engineer.getGithub()).toBe("SamTheEngineer");
});

test("checks getRole method", () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer");
});