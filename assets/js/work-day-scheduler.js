$(document).ready(function () {

    var currentSchedule = JSON.parse(localStorage.getItem("schedule")) || {};
    var currentDate = document.querySelector("#currentDate");
    var now = moment().format('dddd, MMMM Do YYYY');
    console.log("now");
    console.log(now);
    currentDateEl = document.createElement("h3");
    currentDateEl.innerText = now;
    currentDate.appendChild(currentDateEl);
    textArea = document.getElementsByTagName("textarea");
    var scheduleContainer = document.querySelector("#scheduleContainer");
console.log(textArea);
    $(".save-button").on('click', function () {
        let time = $(this).attr("id");
        let textValue = $(this).siblings("textarea").val();

        currentSchedule[time] = textValue;
        localStorage.setItem("schedule", JSON.stringify(currentSchedule));
        // saveTask();

    })
    var storedText = function () {

        var textValues = document.querySelectorAll("textarea");
        var idArray = [];
        var saveSchedule = localStorage.getItem("schedule")
        saveSchedule = JSON.parse(saveSchedule);
        console.log(saveSchedule["9"]);
        for (i = 0; i < textValues.length; i++) {
            let time = $(textValues[i]).siblings("button").attr("id");
            idArray.push(time);
        }
        for (i = 0; i < idArray.length; i++) {
            console.log(saveSchedule[idArray[i]]);
            var findButtonId = $("#" + idArray[i]);
            console.log(findButtonId);
            findButtonId.siblings("textarea").val(saveSchedule[idArray[i]]);
        }
        console.log(idArray);
    }
    storedText();
var compareTime = function(textTime) {
    var momentTime = textTime.slice(-2);
    if (momentTime === "am") {
        momentTime = parseInt(textTime[0])
    }
    else {
        momentTime = parseInt(textTime[0]) + 12
    }
    var nowHour = moment().hours();
    console.log(nowHour,momentTime);
};
compareTime("9:00am");
// backgroundColor = function () {
// if (nowHour === momentTime) {
//     textArea.style="background-color: green"
// }
// }
// document.buttons.backgroundColor = "green";
})