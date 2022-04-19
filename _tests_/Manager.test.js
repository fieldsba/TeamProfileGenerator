const Manager = require('../lib/Manager.js');

test("checks attributes", () => {
    const manager = new Manager("Karen", "45678", "canispeaktoyour@manager.com", "307B");
    expect(manager.name).toBe("Karen");
    expect(manager.id).toBe("45678");
    expect(manager.email).toBe("canispeaktoyour@manager.com");
    expect(manager.officeNumber).toBe("307B");
});

test("checks getOfficeNumber method", () => {
    const manager = new Manager("Karen", "45678", "canispeaktoyour@manager.com", "307B");
    expect(manager.getOfficeNumber()).toBe("307B");
});

test("checks getRole method", () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe("Manager");
});