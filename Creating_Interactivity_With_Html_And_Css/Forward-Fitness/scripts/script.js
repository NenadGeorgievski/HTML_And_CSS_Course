/*
Made by Nenad Georgievski
File Name: script.js
Date: 14.04.2022 
*/
var videoSource = document.getElementById("vid-src");
var video = document.getElementById("example");
var descriptionSource = document.getElementById("despsrc");
video.style.width = "500px";
video.style.height = "300px";

//Hamburger menu
function hamburger () {

  var menu = document.getElementById("menu-links");
  
  var logo = document.getElementById("ffc-logo");

  if(menu.style.display === "block" && logo.style.display === "none") {
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
}

function plank() {
  videoSource.src = "./media/plank.mp4";
  // descriptionSource.src = "media/plankdescriptions.vtt"; 
  video.style.display = "block";
  video.load();
}
function burpees() {
  videoSource.src = "./media/burpees.mp4";
  // descriptionSource.src = "media/burpeesdescriptions.vtt"; 
  video.style.display = "block";
  video.load();
}
function climbers() {
  videoSource.src = "./media/climbers.mp4";
  // descriptionSource.src = "media/climbersdescriptions.vtt"; 
  video.style.display = "block";
  video.load();
}

function discount () {
  var promo = document.getElementById("special");
  promo.firstChild.nodeValue = "Promo Code: 2FSTARTDIS";
  promo.style.color = "ff0000";
  promo.style.fontSize = "2em";
}

