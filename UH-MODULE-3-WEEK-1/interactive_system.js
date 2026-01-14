//Variable 'name' will save the name that we asked for to the user
// the method 'prompt' will show a window asking the user for the data
let name = prompt("What's your name?: ");

//Variable 'age' will save the age that we asked for to the user
let age = prompt("What's your age?: ");

//This variable will be used to make sure the while structure won't finish until it change states to 'false'
let flag = true;
// while structure to verify if the user gives us a valid number and asks again for the data if it's not a number
while (flag) {
    // if structure of control to verify the variable 'age' using inNaN that give us the true or false if the
    // variable is or not a number
    if ( isNaN(age) ) {
        // 'alert' and 'console.log() will show an error message to the user to enter valid data for age
        alert("Error: Please enter a valid age in numbers.");
        console.log("Error: Please enter a valid age in numbers.");
        //We use the method 'prompt' again to ask for the age
        age = prompt("What's your age?: ");
    } else {
        // if the variable 'age' is a valid number, the variable 'flag' will be change to false, ending the cycle
        flag = false;
    }
}

// Verify if the age is less than 18
// If age is less than 18, the system will show a message for an underage user
if (age < 18) {
    alert(`Hello ${name}, you are underage. Keep learning and enjoying coding!`);
    console.log(`Hello ${name}, you are underage. Keep learning and enjoying coding!`);
} else { // If the age is more or same than 18, the system will show a message for a legally aged user
    alert(`Hello ${name}, you are of legal age. Get ready for great opportunities in the world of programming!`);
    console.log(`Hello ${name}, you are of legal age. Get ready for great opportunities in the world of programming!`);
}





