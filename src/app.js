/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let whoOpt = Math.floor(Math.random() * who.length);
  let actionOpt = Math.floor(Math.random() * action.length);
  let whatOpt = Math.floor(Math.random() * what.length);
  let whenOpt = Math.floor(Math.random() * when.length);

  //
  console.log("Hello Rigo from the console!");
  document.getElementById(
    "excuse"
  ).innerHTML = `${who[whoOpt]} ${action[actionOpt]} ${what[whatOpt]} ${when[whenOpt]}`;
};
