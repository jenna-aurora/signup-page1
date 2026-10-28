let clubName = "Enigma Society";
console.log("welcome to " + clubName);
let meetingDay = "Wednesday morning";
console.log("Our meetings are held on " + meetingDay);
let greeting = sayHi();
let farewell = sayBye();

function sayHi(greeting) {
  console.log("Hi! Thanks for visiting");
}
function sayBye(farewell) {
  console.log("Goodbye!");
  console.log("Goodbye!");
}
let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our meetings are held on " + meetingDay + ".";
}

nextButton.addEventListener("click", showNextMeeting);

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  nextMeeting.textContent = "";
});
