const form = document.getElementById("form");

form.addEventListener("submit",(event) => {
    event.preventDefault();
    let employee ={
        name : event.target.name.value,
        Email : event.target.Email.value,
        ID : event.target.employeeID.value,
        Company : event.target.employeecompany.value,
        Designation : event.target.employeedesignation.value,
    };
    console.log(employee);


})