var currentDate = document.querySelector("#currentDate");
var now = moment().format('llll');
console.log("now");
console.log(now);
currentDateEl = document.createElement("h3");
currentDateEl.innerText = now;
currentDate.appendChild(currentDateEl);