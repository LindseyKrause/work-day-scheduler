$(document).ready(function () {

    var currentDate = document.querySelector("#currentDate");
    var now = moment().format('dddd, MMMM Do YYYY');
    console.log("now");
    console.log(now);
    currentDateEl = document.createElement("h3");
    currentDateEl.innerText = now;
    currentDate.appendChild(currentDateEl);



    //color code blocks to indicate past, present, future if scheduletime = now then make it magenta, if it's in the future make it yellow, if it's in the past make it teal.


    //event listener click on save then save in local storage and make persist
    $(".save-button").on('click', function () {
        let time = $(this).attr("id");
        let textValue = $(this).siblings("textarea").val();
        console.log(time, textValue);
        var saveTask = function () {
            localStorage.setItem("time", JSON.stringify(time));
            localStorage.setItem("textValue", JSON.stringify(textValue));

        }
    })

})