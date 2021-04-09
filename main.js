// Request for input
const input1 = parseFloat(prompt("Enter first number: "));
const input2 = parseFloat(prompt("Enter second number: "));

// Operators
const operator = prompt(
  "Enter an operator: \n+: Addition\n-: Substraction\n/: Division\n*: Multiplication\n^: Power"
);

if (operator === "+") {
  alert(input1 + input2);
} else if (operator === "-") {
  alert(input1 - input2);
} else if (operator === "/") {
  alert(input1 / input2);
} else if (operator === "*") {
  alert(input1 * input2);
} else if (operator === "^") {
  alert(input1 ** input2);
} else {
  alert("Operator not recognized!");
}
