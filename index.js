const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer.js');
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML.js');

const team = [];

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Manager', 'Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name",
            validate: nameInput => {
                if (!(nameInput)) 
                {
                    console.log ("Employee must have a name");
                    return false;
                }
                else {return true;}
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's id number",
            validate: idInput => {
                if (!(idInput))
                {
                    console.log("ID number is required");
                    return false;
                }
                else {return true;}
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address",
            validate: emailInput => {
                if (!(emailInput)) {
                    console.log("Email address is required");
                    return false;
                }
                else {return true;}
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            when: (input) => input.role === "Manager",
            validate: officeInput => {
                if (!(officeInput)) {
                    console.log("Please enter the manager's office number");
                    return false;
                }
                else {return true;}
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (!(githubInput)) {
                    console.log("Please enter the engineer's github username");
                    return false;
                }
                else {return true;}
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the name of the intern's school",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (!(schoolInput)) {
                    console.log("Please enter the intern's school");
                    return false;
                }
                else {return true;}
            }
        },
        {
            type: 'confirm',
            name: 'addNextEmployee',
            message: "Would you like to add another team member?",
            default: false
        }
    ])      //end of inquirer
    .then(employeeData => {
        let { name, id, email, role, github, school, addNextEmployee, officeNumber } = employeeData;
        var employee;
        if (role === "Manager") {
            employee = new Manager(name, id, email, officeNumber);
        }
        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
        }
        if (role === "Intern") {
            employee = new Intern(name, id, email, school);
        }
        team.push(employee);

        if (addNextEmployee) {
            return addEmployee(team);
        }
        else {return team;}
    })
};      //end of addEmployee