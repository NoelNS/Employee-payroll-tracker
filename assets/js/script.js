let employees = [];
let btn = document.querySelector('.btn');
let tBody = document.getElementById('employee-table');

const displayAverageSalary = arr => { 
    let sum = 0;

    arr.forEach(({salary})=>sum+=salary);

    let avg = arr.length ? (sum/arr.length).toLocaleString(
        'en-US', {style:'currency',currency:'USD'}
    ) : '$0.00';
    
    console.log(`\nThe average employee salary between our ${arr.length} employee(s) is ${avg}.\n`);
};

const getRandomEmployee = employees => {

    // All winners
    let allWinners = '';

    employees.forEach(({firstName, lastName}, i)=>{
        
        allWinners += i == employees.length-1
            ? `and ${firstName} ${lastName}`
            : `${firstName} ${lastName}, `;
    });

    let randomWinner = [ ... employees, {firstName:'allWinners', lastName: allWinners} ];
    
    let {firstName, lastName} = randomWinner.length ? randomWinner[Math.floor(Math.random()*randomWinner.length)] : {firstName:'',lastName:''};
    
    console.log(
        firstName == 'allWinners'
            ? `\nCongratulations to ${lastName}, our random drawing winners!\n`
            : `\nCongratulations to ${firstName} ${lastName}, our random drawing winner!\n`
    );
};

const renderEmps = employees => {   
    let arr =
        employees.length ?
        employees :
        localStorage.getItem('employees') ?
        JSON.parse(localStorage.employees) : [];

    tBody.innerHTML = '';
    arr.forEach(emp =>
        tBody.innerHTML += `
            <tr>
                <td>${emp.firstName}</td>
                <td>${emp.lastName}</td>
                <td>${emp.salary?.toLocaleString(
            'en-US', {style:'currency',currency:'USD'})}</td>
            </tr>`);

    displayAverageSalary(arr);
    getRandomEmployee(arr);

    return arr;
};

const collectEmployees = () => {
    let firstName = prompt("what is the employee's first name?");
    let lastName = prompt("what is the employee's last name?");
    salary = parseFloat(prompt("what is the employee's salary?"));

    if (!isNaN(firstName)) {
        alert('Please enter your first name');
        return collectEmployees();
    };

    if (!isNaN(lastName)) {
        alert('Please enter your last name');
        return collectEmployees();
    };

    if (isNaN(salary)) {
        alert('Please enter an integer for salary');
        return collectEmployees();
    };

    if (!salary) {
        alert('Please enter salary');
        return collectEmployees();
    };

    let employee = { firstName, lastName, salary };

    employees.push(employee);
    employees = employees.sort((a, b) => a.lastName > b.lastName ? 1 : -1)
    localStorage.employees = JSON.stringify(employees);
    employees = renderEmps(employees);

    if (confirm('Would like to add another employee?')) collectEmployees();
};

employees = renderEmps(employees);

btn.onclick = collectEmployees;