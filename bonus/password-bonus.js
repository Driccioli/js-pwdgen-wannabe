var food=prompt("What's your favourite food?");
var favthing = prompt("What's your favourite thing?");
var movie =prompt("What's the last movie you saw?");

var password1 = food + Math.floor(Math.random() * 100) + favthing + Math.floor(Math.random() * 100) + movie;
var password2 = favthing + Math.floor(Math.random() * 100) + food +Math.floor(Math.random() * 100) + movie;
var password3 = movie + Math.floor(Math.random() * 100) + favthing + Math.floor(Math.random() * 100) + food;

document.getElementById("password1").innerHTML = "Password 1: " + password1+"!";
document.getElementById("password2").innerHTML = "Password 2: " + password2+"?";
document.getElementById("password3").innerHTML = "Password 3: " + password3+"...";