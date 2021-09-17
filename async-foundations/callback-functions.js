//callback function is a function that is passed into another function as a parameter, then invoked by that other function

//higher order function is a function that accepts a callback function as a parameter

function callback() {
  console.log("Coming from callback");
}

function higherOrder(fn) {
  console.log("About to call callback");
  fn();
  console.log("Callback has been invoked");
}

higherOrder(callback);

//If we run the function higherOrder, the console will print the following:

//About to call callback
//Coming from callback
//Callback has been invoked


//What are callbacks used for?
//Advanced Array Methods
//Browser events
//AJAX requests
//React development


//Code reuse with callbacks
function sendMessage(message, callback) {
  return callback(message);
}

sendMessage("message for console", console.log);
sendMessage("message for alert", alert);
let answer = sendMessage("Are you sure?", confirm);


//Callbacks with function declarations
function greet(name, formatter) {
  return `Hello, ${formatter(name)}`;
}

function upperCaseName(name) {
  return name.toUpperCase();
}

//returns "Hello, DANNY"
greet("Danny", upperCaseName);

//Callbacks with anonymous function - common pattern in JavaScript code bases
function hello(name, formatter) {
  return `Hello, ${formatter(name)}`;
}

//returns "Hello, DANNY"
hello("Danny", function(name) {
  return name.toUpperCase();
});

//returns "Hello, Danny!!!"
hello("Danny",function(name) {
  return name + "!!!";
})
