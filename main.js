console.log(customers.results)


function pullData(i){
  let newEntry = customers.results(i);
  let firstName= newEntry.name.first;
  let lastName=newEntry.name.last;
  let photo = newEntry.picture.medium;
  let email = newEntry.email;
  let streetAddress = newEntry.location.street;
  let cityAddress = newEntry.location.city;
  let stateAddress = newEntry.locatiomn.state;
  let zip = newEntry.location.postcode;
  let phoneNumber = newEntry.phone;
  let ssn = newEntry.id.value;
}

function createEntry(){
  let directoryPage =
    // img src="${photo}"; class="photop"
    // <h2 class = "name">${firstName}; ${lastName}</h2>;
    <p>${email}</p>;
    <p>${streetAddress}  </p>;
    <p>${cityAddress} ${stateAddress} ${zip} </p>;
    <p> ${phoneNumber} </p>;
    <br>;
    <p> ${ssn}</p>;
}

for (i = 0; i < customers.length;i++) {
  pullData(i);
  createEntry();
  let employee_entryBox = document.querySelector(".employee_entryBox");
  addEntry = document.createElement("div");
  addEntry.setAttribute("class", "employee_entryBox" );
  addEntry.innerHTML = directoryPage;
  employee_entryBox.appendChild(addEntry);
}
