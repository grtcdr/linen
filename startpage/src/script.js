const time=document.getElementById("time");
// This shows up next to the greeting
const username="grtcdr";

// Holds the greeting phrase, a different phrase
// is picked depending on the time of day.
const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning, " : hours < 18 ? "Afternoon, " : "Evening, "}` + username + '.';

// The page will determine what greeting to display depending
// on the time of day, as soon as it loads.
window.addEventListener('load', () => {
    time.innerHTML = formatAMPM(new Date());
    determineGreet(new Date().getHours());
    setTimeout(() => { document.getElementById("greeting").style.opacity = "1"; }, 150);
});

// Formats the given date into AM/PM format.
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

// Update time text every second.
setInterval(function () {
    time.innerHTML = formatAMPM(new Date());
}, 1000);
