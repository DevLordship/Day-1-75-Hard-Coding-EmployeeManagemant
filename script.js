const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

// array that maintain the all employees details as objects
const employees = [];

// catching the form submission

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let employee = {
        name: event.target.name.value,
        Email: event.target.Email.value,
        ID: event.target.employeeID.value,
        Company: event.target.employeecompany.value,
        Designation: event.target.employeedesignation.value,
    };
    // console.log(employee);
    addEmployee(employee);
});

// addemployee takes the details of the employee (object) and add this object to the table

function addEmployee(employee) {
    // checking for the duplicates

    for (let index = 0; index < employees.length; index++) {
        let e = employees[index];
        if (e.Email === employee.Email) {
            alert("Employee email already existes");
            return;
        } else if (e.ID === employee.ID) {
            alert("Employee ID already existes");
            return;
        }
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${employee.name}</td>
    <td>${employee.Email}</td>
    <td>${employee.ID}</td>
    <td>${employee.Company}</td>
    <td>${employee.Designation}</td>
    <td><button class="delete-button" onclick="deleteEmployee(this)" data-empid="${employee.ID}">Delete</button></td>
    
    
    
    `;
    tbody.appendChild(tr);
    employees.push(employee);
    // resetting the form after adding the employee
    form.reset();
}

// deleteEmployee deletes an employee

function deleteEmployee(buttonRef) {
    let empId = buttonRef.getAttribute("data-empid");

    // deleting the corrosponding abject using the employee id from the employees database
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].ID === empId) {
            employees.splice(i, 1);
            break;
        }
    }
    // deleting the corrosponding abject using the employee id from the dom

    let parentTd = buttonRef.parentNode;
    let parentTr = parentTd.parentNode;
    parentTr.remove();
}
