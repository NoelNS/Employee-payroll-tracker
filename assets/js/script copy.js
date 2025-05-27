const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
    // TODO: Get user input to create and return an array of employee objects
    employees = JSON.parse(localStorage.getItem('employees')) || [];

    let newEmp = true;

    while (newEmp) {
        let firstName = prompt("What is the employee's first name?");
        let lastName = prompt("What is the employee's last name?");
        let salary = prompt("What is the employee's salary?");
        salary = isNaN(salary) ? 0 : !salary ? 0 : parseInt(salary);

        employees.push({firstName,lastName,salary});
        newEmp = confirm("Should we add another employee?");
    };

    localStorage.setItem('employees', JSON.stringify(employees));
    
    return employees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
    // TODO: Calculate and display the average salary

    let total = 0

    for (let i = 0; i < employeesArray.length; i++) {
        total += employeesArray[i].salary;    
    };

    let average = total/employeesArray.length;

    console.log(`
        ==============================
            Average Salary: $${average}.00
            Total Employees: ${employeesArray.length}
        ==============================
        
        `);

    
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];

        const newTableRow = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement("td");
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
}

const trackEmployeeData = function () {
    const employees = collectEmployees();

    displayAverageSalary(employees);


    getRandomEmployee(employees);

    employees.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
        }
    });

    displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

