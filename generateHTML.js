var createManagerCard = function (Manager) {
    return `
    <div class="card-container">
        <div class="card-header">
            <h3>${Manager.name}</h3>
            <hr></hr>
            <h4>Manager</h4>
        </div>
        <div class='card-content'>
            <p class="id">ID: ${Manager.id}</p>
            <p class="email">Email: ${Manager.email}</p>
            <p class="office">Office Number: ${Manager.officeNumber}</p>
        </div>
    </div> `
};

var createEngineerCard = function (Engineer) {
    return `
    <div class="card-container">
        <div class="card-header">
            <h3>${Engineer.name}</h3>
            <hr></hr>
            <h4>Engineer</h4>
        </div>
        <div class='card-content'>
            <p class="id">ID: ${Engineer.id}</p>
            <p class="email">Email: ${Engineer.email}</p>
            <p class="github">Github Username: ${Engineer.github}</p>
        </div>
    </div> `
};

var createInternCard = function (Intern) {
    return `
    <div class="card-container">
        <div class="card-header">
            <h3>${Intern.name}</h3>
            <hr></hr>
            <h4>Intern</h4>
        </div>
        <div class='card-content'>
            <p class="id">ID: ${Intern.id}</p>
            <p class="email">Email: ${Intern.email}</p>
            <p class="school">School: ${Intern.school}</p>
        </div>
    </div> `
};

generateHTML = (data) => {
    var pageArray = [];

    for (i = 0; i < data.length; i++) {
        var employee = data[i];
        var role = employee.getRole();

        switch(role) {
            case 'Manager':
                var managerCard = generateManager(employee);
                pageArray.push(managerCard);
                break;

            case 'Engineer': 
                var engineerCard = generateEngineer(employee);
                pageArray.push(engineerCard);
                break;

            case 'Intern':
                var internCard = generateIntern(employee);
                pageArray.push(internCard);
                break;
        }
    } 

    const employeeCards = pageArray.join('');

    const createTeam = generateTeamPage(employeeCards);
    return createTeam;
}


