// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h5>JS</h5>`;


// let user = {
//   name="john",
//   age=23
// }
var id = Symbol("id");
var user = {
  age:23,
  name:"Tharak",
  [id]:1234,
};

console.log(user[id])
console.log(user)
console.log("saj,dchdkajddk")

// user[id] = "dasu";
// console.log(user[id])