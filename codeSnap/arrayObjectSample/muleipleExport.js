const variable = "some value";
function fnDoSometing() {
  console.log("some function");
}

// exporting a variable and a function
module.exports = {
  variable: variable,
  fnDoSometing: fnDoSometing,
};

// this is also valid
module.exports = {
  variable,
  fnDoSometing,
};
