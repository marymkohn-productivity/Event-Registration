// This program register runners for a race and gives them instructions on race day.

// random number generator
let raceNumber = Math.floor(Math.random() * 1000);

// conditionals
var earlyRunner = true;
var ageRunner = 18;

// control flow statement gives adult runners a four digit number
if (ageRunner >= 18 && earlyRunner == true) {
  console.log((raceNumber += 1000));
} else {
  console.log(raceNumber);
}

// control flow statement determines when runner will be scheduled to run
if (ageRunner >= 18 && earlyRunner == true) {
  console.log("Time of race: 9:30 AM." + " Your race number is " + raceNumber);
} else if (ageRunner >= 18 && earlyRunner !== true) {
  console.log("Time of race: 11:00 AM." + " Your race number is " + raceNumber);
} else {
  console.log(
    "Youth registrants run at 12:30 PM." + " Your race number is " + raceNumber
  );
}
