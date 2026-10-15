// =========================
// PART 1: VARIABLES & DATA TYPES
// =========================

// 1. var, let and const
var city = "Bengaluru";
console.log(city);

city = "Mysuru";
console.log(city);

var city = "Hubballi";
console.log(city);

let age = 22;
age = 23;
console.log(age);

const country = "India";
console.log(country);


// 2. Name, age and programming knowledge
let myName = "Purvi";
let myAge = 22;
let programmingKnowledge = true;

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(programmingKnowledge, typeof programmingKnowledge);


// 3. Array of 5 fruits
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


// 4. Object
let person = {
    name: "Purvi",
    role: "Software Engineer",
    cgpa: 8.5
};

console.log(person.name);
console.log(person.role);
console.log(person.cgpa);


// 5. prompt() and alert()
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

alert(userName);
console.log(userAge);


// =========================
// PART 2: OPERATORS
// =========================

// 6. Arithmetic operators
let num1 = 20;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);


// 7. Increment operators
let a1 = 5;

console.log(a1++); // 5
console.log(a1);   // 6
console.log(++a1); // 7


// 8. Decrement operators
let a2 = 10;
let b = a2--;
let c = --a2;

console.log(a2); // 8
console.log(b);  // 10
console.log(c);  // 8


// 9. Assignment operators
let x = 20;

x += 5;
console.log(x);

x -= 10;
console.log(x);

x *= 2;
console.log(x);

x /= 3;
console.log(x);

x %= 3;
console.log(x);


// 10. Comparison operators
console.log(5 == "5");    // true
console.log(5 === "5");   // false
console.log(10 != "10");  // false
console.log(10 !== "10"); // true


// 11. Logical operators
let personAge = 22;
let hasID = true;

console.log(personAge >= 18 && hasID);
console.log(personAge < 18 || hasID);
console.log(!hasID);


// 12. Ternary operator
let ternaryAge = Number(prompt("Enter your age:"));

let result =
    ternaryAge >= 18
        ? "You are eligible"
        : "You are not eligible";

console.log(result);


// =========================
// PART 3: TYPE CASTING & CONDITIONS
// =========================

// 13. typeof expressions
console.log(typeof ("hello" + 10));        // string
console.log(typeof (10 + true));           // number
console.log(typeof (10 + null));           // number
console.log(typeof ("hello" + undefined)); // string


// 14. Number() conversion
let inputValue = prompt("Enter a number:");
let convertedNumber = Number(inputValue);

console.log(convertedNumber + 10);


// 15. Boolean()
console.log(Boolean(""));      // false
console.log(Boolean("Hello")); // true
console.log(Boolean(0));       // false
console.log(Boolean(true));    // true


// 16. Positive or not
let number = Number(prompt("Enter a number:"));

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// 17. Time using else-if
let time = Number(prompt("Enter time from 0 to 23:"));

if (time >= 4 && time < 6) {
    console.log("Early morning");
} else if (time >= 6 && time < 12) {
    console.log("Morning");
} else if (time >= 12 && time < 17) {
    console.log("Afternoon");
} else if (time >= 17 && time < 21) {
    console.log("Evening");
} else if (
    (time >= 21 && time <= 23) ||
    (time >= 0 && time < 4)
) {
    console.log("Night");
} else {
    console.log("Invalid time");
}


// 18. Nested if
let eligibilityAge = Number(prompt("Enter age:"));
let height = Number(prompt("Enter height in cm:"));
let weight = Number(prompt("Enter weight in kg:"));

if (eligibilityAge >= 18) {
    if (height >= 150) {
        if (weight >= 45) {
            console.log("Eligible");
        } else {
            console.log("Weight requirement not met");
        }
    } else {
        console.log("Height requirement not met");
    }
} else {
    console.log("Age requirement not met");
}


// =========================
// PART 4: SWITCH & LOOPS
// =========================

// 19. Traffic light
let color = prompt("Enter traffic light color:");

switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light color");
}


// 20. Print numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}


// 21. Even numbers 2 to 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// 22. while loop 10 to 1
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}


// 23. do-while loop 1 to 10
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 10);


// 24. for-of for JavaScript
let text = "JavaScript";

for (let character of text) {
    console.log(character);
}


// 25. Student names using for-of
let students = [
    "Priya",
    "Purvi",
    "Bassu",
    "Kiran",
    "Anu"
];

for (let studentName of students) {
    console.log(studentName);
}


// 26. for-in with object
let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student) {
    console.log(key, student[key]);
}


// =========================
// PART 5: MIXED PRACTICE
// =========================

// 27. Two numbers - mathematical operations
let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

console.log("Sum:", firstNumber + secondNumber);
console.log("Difference:", firstNumber - secondNumber);
console.log("Product:", firstNumber * secondNumber);
console.log("Remainder:", firstNumber % secondNumber);


// 28. Numbers greater than 10
let numbers = [5, 15, 8, 25, 12];

for (let value of numbers) {
    if (value > 10) {
        console.log(value);
    }
}


// 29. Age eligibility
let enteredAge = Number(prompt("Enter your age:"));

if (enteredAge >= 18) {
    alert("You are eligible");
} else {
    alert("You are not eligible");
}


// 30. Calculator using switch
let operation = prompt(
    "Enter operation: addition, subtraction, multiplication or division"
);

let first = Number(prompt("Enter first number:"));
let second = Number(prompt("Enter second number:"));

switch (operation.toLowerCase()) {
    case "addition":
        console.log("Result:", first + second);
        break;

    case "subtraction":
        console.log("Result:", first - second);
        break;

    case "multiplication":
        console.log("Result:", first * second);
        break;

    case "division":
        if (second !== 0) {
            console.log("Result:", first / second);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid operation");
}