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
    // var time = document.getElementById(9, 10, 11,);
    // var scheduleObj = { time, textarea};
    // console.log("scheduleObj");

    //color code blocks to indicate past, present, future if scheduletime = now then make it magenta, if it's in the future make it yellow, if it's in the past make it teal.


    //event listener click on save then save in local storage and make persist
    $(".save-button").on('click', function () {
        let time = $(this).attr("id");
        let textValue = $(this).siblings("textarea").val();
        // console.log(time, textValue);
        // var saveTask = function () {
        // localStorage.setItem('time', JSON.stringify(time));
        // localStorage.setItem('textValue', JSON.stringify(textValue));

        // }
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
for (i = 0; i < textValues.length; i++){
    let time = $(textValues[i]).siblings("button").attr("id");
    idArray.push(time);
}
for(i = 0; i < idArray.length; i++) {
    console.log(saveSchedule[idArray[i]]);
    var findButtonId = $("#" + idArray[i]);
    console.log(findButtonId);
    findButtonId.siblings("textarea").val(saveSchedule[idArray[i]]);
    //find the button with id of idarrayi, then find sibling textarea, set textarea.value=currentschedulei
}
// var findButtonIds = function() {
//     for (i = 0; i < idArray.length; i++) {

//     }
//     // var findSiblingTextArea = ($findButtonId[i].siblings("textarea"));
//     console.log("findSiblingTextArea");
//     console.log("findButtonId");
// }
console.log(idArray);
// findButtonIds();
// console.log("textValues", textValues);
        // for (textValue in currentSchedule) {
        //     // console.log(textValue);
        //     localStorage.getItem("schedule", "schedule.value")
        //     // console.log(currentSchedule, currentSchedule.value);
        // }
    
        // textArea.appendChild("currentSchedule").value;
        // writeTextValue = function (onload) {
        //     for (textValue({i}) in currentSchedule({i}) 
        //     scheduleContainer.createElement("textValue", textValue);
        // }
    }
storedText();

    //FOR IN -for something inside of an object do something
    //for time in current schedule get the value of the id and update text content with value

    //object.entries (schedule)  --this give you an array inside the object
    //for or for each, do something. 
    // compare time to now and change color accordingly 
    // var backColor = function() {
    //     if 
    // }
})