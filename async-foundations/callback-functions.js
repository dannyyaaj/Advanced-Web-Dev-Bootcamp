//callback function is a function that is passed into another function as a parameter, then invoked by that other function

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