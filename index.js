"use strict";

const URL = "https://api.weatherapi.com/v1";
let key = "c583ae563f4e44adbf7122055240203";
let city = "Toshkent";
let baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${key}&days=5&q=${city}`;

//--------------------------------variables

let darkMode = document.querySelector(".animation");
let body = document.querySelector("body");
let darkModeBtnActive = document.querySelector(".circle");
let nowTime = document.querySelector("#nowTime");
let cityLocation = document.querySelectorAll("#location")
let sunrise  = document.querySelector("#sunrise")
let sunset  = document.querySelector("#sunset")


// --------------------------------time
function updateTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let timeString = hours + ":" + minutes + ":" + seconds;

  nowTime.innerHTML = timeString;
}

updateTime();
setInterval(updateTime, 1000);

// ------------------------------- month,year,day
function date() {
  let currentDate = new Date();

  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  let dateString = day + "." + month + "." + year;

  let dateElement = document.getElementById("currentDate");

  dateElement.innerHTML = dateString;
}
date();


// --------------------------------URL

async function getURL() {
    try {
        let res = await fetch(baseURL);
        let result = await res.json();
        console.log(result);
        return result;
    } catch (error) {
    }
}

getURL();
// -------------------------------functions

darkMode.addEventListener("click", (el) => {
  body.classList.toggle("darkMode");
  darkModeBtnActive.classList.toggle("circleMove");
});

cityLocation[0].innerHTML = `${city}`
cityLocation[1].innerHTML = `${city}`


async function getSunrise(){
    if(`${sunrise}`.length){
        sunrise.innerHTML = `${sunrise}`
    }
}






