var number1 = parseInt(prompt("Enter the first number"));
var number2 = parseInt(prompt("Enter the second number"));
var operator = prompt("Enter operator +, -, *, /");
var result;

if (isNaN(number1) || isNaN(number2)) {
  alert("Incorrect Input. Refresh and input a digit value");
} else if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else if (operator == "/") {
  result = number1 / number2;
}
alert(number1 + " " + operator + " " + number2 + " " + "=" + " " + result);
