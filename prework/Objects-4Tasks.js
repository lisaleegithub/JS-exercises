// Task 1: Hello, object
// Write the code, one line for each action:
// Create an empty object user.
const user = {};

// Add the property name with the value John.
user.name = "John";

// Add the property surname with the value Smith.
user.surname = "Smith";

// Change the value of the name to Pete.
user.name = "Pete";

// Remove the property name from the object.
delete user.name;


// Task 2: Check for emptiness
// Write the function isEmpty(obj) which returns true 
// if the object has no properties, false otherwise.
function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

// test task 2
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false


// Task 3: Sum object properties
// Write the code to sum all salaries and store in the variable sum. 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
  var sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  console.log(sum);


// Task 4: Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  // my code
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      }
    }
  }
  multiplyNumeric(menu);
  
  // test task 4
  console.log(menu.width); // 400
  console.log(menu.height); // 600
  console.log(menu.title); // My menu