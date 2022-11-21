var row = 0;
var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);


function displayDetails() {
    var id = document.getElementById("id").value;
    var name= document.getElementById("name").value;
    var phoneNumber =document.getElementById("phoneNumber").value;

    if(!id || !name || !phoneNumber) {
        alert("please fill all the boxes");
        return;
    }
        console.log(id,name,phoneNumber)
        var display = document.getElementById("display");
        debugger
        var newRow = display.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = id;
        cell2.innerHTML = name;
        cell3.innerHTML = phoneNumber;
      
        row++;

    } 
        