var entry =document.getElementById("entry")
entry.addEventListener("click",displayDetails);

var row = 1;

function displayDetails() {
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById ("surname").value;
    var email = document.getElementById ("email").value;
    var phonenumber = document.getElementById ("phonenumber").value;
    var reference = document.getElementById ("reference").value;

    if (!firstname || !surname || !email || !phonenumber || !reference) {
        alert("Please fill all the boxes.")
        return;
    }
    var display = document.getElementById("display");

    var newRow =display.insertRow(row);

    var cell1 = newRow.insertCell (0);
    var cell2 = newRow.insertCell (1);
    var cell3 = newRow.insertCell (2);
    var cell4 = newRow.insertCell (3);
    var cell5 = newRow.insertCell (4);

    cell1.innerHTML = firstname;
    cell2.innerHTML = surname;
    cell3.innerHTML = email;
    cell4.innerHTML = phonenumber;
    cell5.innerHTML = reference;

    row++;
}