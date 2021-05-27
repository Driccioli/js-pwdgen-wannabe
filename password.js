var name = prompt("Please enter your name.");
var lastName= prompt("Enter your last name, too.")
var color= prompt("Now enter your credit card number. Just kidding, what's your favourite color?");

var password = name + lastName + color + '21';

document.getElementById("generated").innerHTML = "Your password is " + password + "...maybe I should censor it.";