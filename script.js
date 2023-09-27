const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

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
    addEmployee(employee)
});

// addemployee takes the details of the employee (object) and add this object to the table

function addEmployee(employee) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${employee.name}</td>
    <td>${employee.Email}</td>
    <td>${employee.ID}</td>
    <td>${employee.Company}</td>
    <td>${employee.Designation}</td>`;
    tbody.appendChild(tr);
}
