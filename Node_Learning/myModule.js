const division=(a, b)=> {
    return a / b;
  }

const add = (a, b) => {
  return a + b;
};
const multiply = (a, b) => {
  return a * b;
};

//way1 to export
// module.exports = {
//   addition: add,
//   multiplication: multiply,
//   division:division,
// }; //now add function is avilable in everywhere
//it return the function in the form of a Object

//way2 to export
//use export word in function

exports.division=(a, b)=> {
    return a / b;
  }

exports.add = (a, b) => {
  return a + b;
};
exports.multiply = (a, b) => {
  return a * b;
};