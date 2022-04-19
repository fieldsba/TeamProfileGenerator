const { test } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test("checks attributes", () => {
    const intern = new Intern("Quasimodo", "34567", "tothebelltower@esmerelda.com", "Schooly McSchoolface");
    expect(intern.name).toBe("Quasimodo");
    expect(intern.id).toBe("34567");
    expect(intern.email).toBe("tothebelltower@esmerelda.com");
    expect(intern.school).toBe("Schooly McSchoolface");
});

test("checks getSchool method", () => {
    const intern = new Intern("Quasimodo", "34567", "tothebelltower@esmerelda.com", "Schooly McSchoolface");
    expect(intern.getSchool()).toBe("Schooly McSchoolface");
});

test("checks getRole method", () => {
    const intern = new Intern();
    expect(intern.getRole()).toBe("Intern");
});