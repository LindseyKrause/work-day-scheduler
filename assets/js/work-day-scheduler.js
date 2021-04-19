$(document).ready(function () {
    //global variables 
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
    var row = document.querySelector(".row");

    //save function
    $(".save-button").on('click', function () {
        let time = $(this).attr("id");
        let textValue = $(this).siblings("textarea").val();

        currentSchedule[time] = textValue;
        localStorage.setItem("schedule", JSON.stringify(currentSchedule));
    })

    // storedText function
    var storedText = function () {
        var textValues = document.querySelectorAll("textarea");
        var idArray = [];
        var saveSchedule = localStorage.getItem("schedule")
        saveSchedule = JSON.parse(saveSchedule);
        for (i = 0; i < textValues.length; i++) {
            let time = $(textValues[i]).siblings("button").attr("id");
            idArray.push(time);
        }
        for (i = 0; i < idArray.length; i++) {
            var findButtonId = $("#" + idArray[i]);
            console.log(findButtonId);
            findButtonId.siblings("textarea").val(saveSchedule[idArray[i]]);
        }
        console.log(idArray);
    }
    storedText();
    //hour elements 
    var hourNineEl = document.querySelector("#timeText9").innerText;
    hourNineInt = parseInt(hourNineEl);

    var hourTenEl = document.querySelector("#timeText10").innerText;
    hourTenInt = parseInt(hourTenEl);

    var hourElevenEl = document.querySelector("#timeText11").innerText;
    hourElevenInt = parseInt(hourElevenEl);

    var hourTwelveEl = document.querySelector("#timeText12").innerText;
    hourTwelveInt = parseInt(hourTwelveEl);

    var hourOneEl = document.querySelector("#timeText1").innerText;
    hourOneInt = parseInt(hourOneEl);

    var hourTwoEl = document.querySelector("#timeText2").innerText;
    hourTwoInt = parseInt(hourTwoEl);

    var hourThreeEl = document.querySelector("#timeText3").innerText;
    hourThreeInt = parseInt(hourThreeEl);

    var hourFourEl = document.querySelector("#timeText4").innerText;
    hourFourInt = parseInt(hourFourEl);

    var hourFiveEl = document.querySelector("#timeText5").innerText;
    hourFiveInt = parseInt(hourFiveEl);
    //---------------

    hourIntArr = [{ hourNineInt }, { hourTenInt }, { hourElevenInt }, { hourTwelveInt }, { hourOneInt }, { hourTwoInt }, { hourThreeInt }, { hourFourInt }, { hourFiveInt }];
    //------------- convert all hour int to moment obj
    var convertedHour = moment(hourIntArr.toString(), "LT")
    console.log(convertedHour);
    //--------set color function   
    function setColor(element, color) {
        element.style.backgroundColor = color;
    }
    //--------------- There is a shorter way...
    // let parentDivId = $(convertedHour[i]).parent().attr("id");
    // console.log(parentDivId);
    //----------------
    var compareTime = function () {
        momentTime = moment().format('h');
        let timeRow9 = document.querySelector("#timeRow9");
        let timeRow10 = document.querySelector('#timeRow10');
        let timeRow11 = document.querySelector("#timeRow11");
        let timeRow12 = document.querySelector('#timeRow12');
        let timeRow1 = document.querySelector("#timeRow1");
        let timeRow2 = document.querySelector('#timeRow2');
        let timeRow3 = document.querySelector("#timeRow3");
        let timeRow4 = document.querySelector('#timeRow4');
        let timeRow5 = document.querySelector("#timeRow5");
        //----if statements for each time to format
        if ((momentTime12) => moment(hourNineInt.toString())) {
            console.log(moment(hourNineInt.toString()))
            console.log("true");
            setColor(timeRow9, 'gray');
            setColor(timeRow10, 'green')
            setColor(timeRow11, 'green');
            setColor(timeRow12, 'green')
            setColor(timeRow1, 'green')
            setColor(timeRow2, 'green');
            setColor(timeRow3, 'green')
            setColor(timeRow4, 'green')
            setColor(timeRow5, 'green');
        }
        if (momentTime => moment(hourTenInt.toString())) {
            console.log("true");
            setColor(timeRow9, 'red')
            setColor(timeRow10, 'gray');
            setColor(timeRow11, 'green')
            setColor(timeRow12, 'green')
            setColor(timeRow1, 'green');
            setColor(timeRow2, 'green')
            setColor(timeRow3, 'green')
            setColor(timeRow4, 'green');
            setColor(timeRow5, 'green')
        }
        if (momentTime => moment(hourElevenInt.toString())) {
            console.log("true");
            setColor(timeRow9, 'magenta')
            setColor(timeRow10, 'magenta');
            setColor(timeRow11, 'gray')
            setColor(timeRow12, 'green')
            setColor(timeRow1, 'green');
            setColor(timeRow2, 'green')
            setColor(timeRow3, 'green')
            setColor(timeRow4, 'green');
            setColor(timeRow5, 'green')
        }
        if (momentTime => moment(hourTwelveInt.toString())) {
            console.log("true");
            setColor(timeRow9, 'magenta')
            setColor(timeRow10, 'magenta');
            setColor(timeRow11, 'magenta')
            setColor(timeRow12, 'gray')
            setColor(timeRow1, 'green');
            setColor(timeRow2, 'green')
            setColor(timeRow3, 'green')
            setColor(timeRow4, 'green');
            setColor(timeRow5, 'green')
        }
        if (momentTime => moment(hourOneInt.toString())) {
            console.log("true");
            setColor(timeRow9, 'magenta')
            setColor(timeRow10, 'magenta');
            setColor(timeRow11, 'magenta')
            setColor(timeRow12, 'magenta')
            setColor(timeRow1, 'gray');
            setColor(timeRow2, 'green')
            setColor(timeRow3, 'green')
            setColor(timeRow4, 'green');
            setColor(timeRow5, 'green')
        }
        if (momentTime => moment(hourTwoInt.toString())) {
            console.log("true");
            setColor(timeRow9, 'magenta')
            setColor(timeRow10, 'magenta');
            setColor(timeRow11, 'magenta')
            setColor(timeRow12, 'magenta')
            setColor(timeRow1, 'magenta');
            setColor(timeRow2, 'gray')
            setColor(timeRow3, 'green')
            setColor(timeRow4, 'green');
            setColor(timeRow5, 'green')
        }
        if (momentTime => moment(hourThreeInt.toString())) {
            console.log("true");
            setColor(timeRow9, 'magenta')
            setColor(timeRow10, 'magenta');
            setColor(timeRow11, 'magenta')
            setColor(timeRow12, 'magenta')
            setColor(timeRow1, 'magenta');
            setColor(timeRow2, 'magenta')
            setColor(timeRow3, 'gray')
            setColor(timeRow4, 'green');
            setColor(timeRow5, 'green')
        }
        if (momentTime => moment(hourFourInt.toString())) {
            console.log("true");
            setColor(timeRow9, 'magenta')
            setColor(timeRow10, 'magenta');
            setColor(timeRow11, 'magenta')
            setColor(timeRow12, 'magenta')
            setColor(timeRow1, 'magenta');
            setColor(timeRow2, 'magenta')
            setColor(timeRow3, 'magenta')
            setColor(timeRow4, 'gray');
            setColor(timeRow5, 'green')
        }
        if (momentTime => moment(hourFiveInt.toString())) {
            console.log("true");
            setColor(timeRow9, 'magenta')
            setColor(timeRow10, 'magenta');
            setColor(timeRow11, 'magenta')
            setColor(timeRow12, 'magenta')
            setColor(timeRow1, 'magenta');
            setColor(timeRow2, 'magenta')
            setColor(timeRow3, 'magenta')
            setColor(timeRow4, 'magenta');
            setColor(timeRow5, 'gray')
        }
    }
    compareTime();
})