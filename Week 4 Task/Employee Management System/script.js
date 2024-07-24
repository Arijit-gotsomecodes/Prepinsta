class Employee {
    constructor(name, age, department, salary) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
        this.initialSalary = salary;  // Save the initial salary
    }
}

let employees = [
    new Employee("John", 30, "Marketing", 50000),
    new Employee("Alice", 35, "HR", 60000),
    new Employee("Bob", 28, "IT", 70000),
    new Employee("Emily", 32, "Marketing", 55000)
];

function displayOutput(output) {
    document.getElementById('output').innerHTML = output;
}

function calculateAverageSalary() {
    let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
    let averageSalary = totalSalary / employees.length;
    displayOutput(`<strong>Average Salary:</strong> $${averageSalary.toFixed(2)}`);
}

function findEmployeesByDepartment(department) {
    let filteredEmployees = employees.filter(emp => emp.department === department);
    displayOutput(`<strong>Employees in ${department}:</strong> ${filteredEmployees.map(emp => emp.name).join(', ')}`);
}

function increaseSalary(percentage) {
    employees.forEach(emp => {
        emp.salary += emp.salary * (percentage / 100);
    });
    displayOutput(`Salaries increased by ${percentage}% successfully!`);
}

function increaseSalaryPrompt() {
    let percentage = prompt("Enter the percentage to increase salaries:");
    if (percentage !== null) {
        increaseSalary(parseFloat(percentage));
    }
}

function resetSalaries() {
    employees.forEach(emp => {
        emp.salary = emp.initialSalary;
    });
    displayOutput('Salaries reset to initial values!');
}

function sortEmployeesByAge() {
    employees.sort((a, b) => a.age - b.age);
    displayOutput(`<strong>Employees Sorted by Age:</strong> ${employees.map(emp => emp.name).join(', ')}`);
}

document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const department = document.getElementById('department').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const newEmployee = new Employee(name, age, department, salary);
    employees.push(newEmployee);
    displayOutput(`Employee ${name} added successfully!`);
    this.reset();
});
