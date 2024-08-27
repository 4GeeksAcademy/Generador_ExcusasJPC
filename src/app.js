/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const p = document.getElementById("excuse");
  p.innerText = Generador();
};

let who_arr = ["The dog", "My grandma", "The mailman", "My bird"];
let action_arr = ["ate", "peed", "crushed", "broke"];
let what_arr = ["my homework", "my phone", "the car"];
let when_arr = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function Generador() {
  let who_position = Math.floor(Math.random() * who_arr.length);
  let action_position = Math.floor(Math.random() * action_arr.length);
  let what_position = Math.floor(Math.random() * what_arr.length);
  let when_position = Math.floor(Math.random() * when_arr.length);

  let excuse = `${who_arr[who_position]} ${action_arr[action_position]} ${what_arr[what_position]} ${when_arr[when_position]}`;
  return excuse;
}
