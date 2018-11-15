var nameP = document.getElementById("name-p");

var email = document.getElementById("email");

var add = document.getElementById("add");				

var clear = document.getElementById("clear");   

var form = document.getElementsByClassName("right");

add.addEventListener("click", function(event){  
  event.preventDefault();
  if (nameP.value != "" && email.value != "") {
  form[0].innerHTML = "<h3>"  + nameP.value + "</h3>" + "<h3>" + email.value + "</h3>" /*when user type his name and email, and press add, his name and email appears in the empty section
  also it separates name and email, puting the email under the name*/
}
})
