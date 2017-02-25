function login() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value

  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/server', true);

  xhr.onreadystatechange = function() {
      if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
          // Request finished. Do processing here.
      }
  }

  saveName(firstName, lastName);
  document.location.href = 'index.html';
}

function saveName(firstName, lastName) {
 var name = {
   First: firstName,
   Last: lastName
 };

 name = JSON.stringify(name);
 name = btoa(name);
 localStorage.setItem('_name', name);
}
