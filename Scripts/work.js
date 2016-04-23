// work.js
// Jack Evgeni GRunin
// miniport - slider
// April, 2016

"use strict";

var imageCount = 1;
var total = 3;

function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	
    if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	
    // clear interval stops the set interval
    image.src = "Images/img"+ imageCount +".jpg";
	clearInterval(time); 				
	
    // value of time starts the loop
    time =  window.setInterval(function photoA() {  
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	},5000);
	}

// assigning the funtion to variable for targeting 
var time = window.setInterval(function photoA() { 
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	},5000);