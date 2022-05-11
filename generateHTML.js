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

