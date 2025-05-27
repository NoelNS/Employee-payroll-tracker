let employees = [];
let btn = document.querySelector('.btn');
let tBody = document.getElementById('employee-table');

const collectEmployees = () => {
    let firstName = prompt("what is the employee's first name?");
    let lastName = prompt("what is the employee's last name?");
    let salary = prompt("what is the employee's salary?");

    if(!isNaN(firstName)) {
        alert('Please enter your first name');
        return collectEmployees();
    };

    if(!isNaN(lastName)) {
        alert('Please enter your last name');
        return collectEmployees();
    };

    if(isNaN(salary)) {
        alert('Please enter an integer for salary');
        return collectEmployees();
    };
    
    if(!salary) {
        alert('Please enter salary');
        return collectEmployees();
    };

    employees.push({firstName,lastName,salary})
    
    tBody.innerHTML = '';
    employees.forEach(emp => 
        tBody.innerHTML += `
            <tr>
                <td>${emp.firstName}</td>
                <td>${emp.lastName}</td>
                <td>$${emp.salary}.00</td>
            </tr>`);

    if(confirm('Would like to add another employee?')) collectEmployees();
}

btn.onclick = collectEmployees;