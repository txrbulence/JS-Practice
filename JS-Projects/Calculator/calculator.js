const prompt = require('prompt-sync')();
 
//Variables
var op = prompt("Please define which operation you will be using, +, -, *, / : ");
var num1 = Number(prompt("Enter the first number : "));
var num2 = Number(prompt("Enter the second number : "));

//Defining the operation, and doing the math

//Addition
if (op=="+")
  {
    const sum = num1 + num2;
console.log("The answer is :" ,sum);
  }
  //Subtraction
else if (op=="-")
 {
    const diffy = num1 - num2;
console.log("The answer is :" ,diffy);
}
//Multiplication
else if (op=="*")
{
    const product = num1 * num2;
console.log("The answer is :" ,product);
}
//Division
else if (op=="/")
{
    const quotient = num1 / num2;
console.log("The answer is :" ,quotient)
}
