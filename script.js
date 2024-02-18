let daysInYear = document.getElementById("days__in__year")
let dayOfYear = document.getElementById("day__of__year")

let countdownDate = new Date("January 1, 2025 00:00:00").getTime();

var x = setInterval(function() {
    // this var will get the current time and date 
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    dayNumber = 366 - days;

    document.getElementById("day__of__year").innerHTML = dayNumber;
    
    // this will clear the interval and set everything to zero when the date arrives 
    if(distance < 0) {
        clearInterval(x);

        document.getElementById("day__of__year").innerHTML = "00";
    }
    
    
}, 1000);



// the code below is to update the year 

let currenYear = new Date().getFullYear();
let currentDay = new Date().getDate();
let lastDay = new Date(new Date().getFullYear(), 11, 31);

function leapYear(year) {
    // here we will return the year if the below condiitons are met
    if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
        daysInYear.innerHTML = "366";
    } else {
        daysInYear.innerHTML = "365";
    }
}
// then here we will call the function 
leapYear(currenYear);



