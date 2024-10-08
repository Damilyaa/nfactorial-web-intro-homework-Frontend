var input = prompt("Enter a number:", "");

if (!isNaN(input) && input !== "") {
  alert("You entered " + input);
} else {
  alert("Error: Input a number!");
}