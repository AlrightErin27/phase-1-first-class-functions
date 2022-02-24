// The receivesAFunction function should:
// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function
// The returnsANamedFunction function should:

function receivesAFunction(cb) {
  cb();
}

// take no arguments
// return a named function
// The returnsAnAnonymousFunction function should:
function returnsANamedFunction() {
  return function namedFxn() {
    console.log("named fxn");
  };
}

// take no arguments
// return an anonymous function
function returnsAnAnonymousFunction() {
  return () => console.log("anonymous fxn");
}
