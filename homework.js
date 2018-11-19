// #### Episode 1

// ```js

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
// ```
// 1: * We have a constant variable called 'scenario' and a hash has been put into it.
// * Another constant variable is declared and an anonymous function is put into it.
// * This function looks into the scenario hash and returns back the 'murderer' key as a string (using string interpolation) when the variable is called.
// * Another constant variable is declared called 'verdict'. 'verdict' is calling the 'declareMurderer' variable and prints it to the terminal.
// The outcome will be 'The murderer is Miss Scarlet'.


// #### Episode 2

// ```js
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   const murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ```
// 2: * My verdict  is that the murderer here is 'Professor Plum'.
// * The episode tries to imply that the 'murderer' variable will be changed when 'changeMurderer' is called. BUT it was trying to reassign a variable that it does not have access to within the scope of the function.
// * Though I initially did not spot the lack of declaration on the 'murderer' variable within the changeMurderer variable. This caused it to fail.


// #### Episode 3
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// 3: * The first verdict will declare 'Mrs Peacock' the murderer, while the second will say 'Professor Plum'. This is because the secondVerdict only has access to the 'murderer' variable at the top. While the firstVerdict has access to another variable of the same name but only within the scope of the function.


// #### Episode 4

// ```js
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// ```
// 4: * First log will say 'Miss Scarlet', 'Professor Plum', 'Colonel Mustard'.
// * Second will say 'Mrs Peacock'
// * Reasons: suspectOne and suspectTwo are being brought inside the function as these work within the limits of the let variable. suspectThree however is directly taking from a variable of the same name within the function. And therefor this is used.

// #### Episode 5

// ```js
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// ```
// 5: * 'The weapon is the Revolver'
// * This will be printed because the changeWeapon function has access to the scenario hash and the key is being reassigned a new value.

// #### Episode 6

// ```js
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // ```
// 6: * This will fail because the function within changeMurderer variable has not ended. ({}) and the 'murderer' variable already exists and cannot be used within the function.
// * WELL I was wrong.

// #### Episode 7

// ```js
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ```
// 7: * My prediction was 'Mr Green'.
// * Reasons: It has been changed multiple times BUT the changeMurderer function is called just befor the declareMurderer.


// #### Episode 8

// ```js
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// // ```
// 8: My thoughts were totally off. I had predicted 'lead pipe' but I can now see why it isnt. The first function called is changeScenario. This then leads to everything being called in order. Therefore the Murderer is 'colonel mustard' and the weapon is 'candle stick'

// EPISODE 9
// ```js
// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
// 
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
// ```
// I think declareMurderer is called and it hits the first response that fits. murderer variable at the top.
