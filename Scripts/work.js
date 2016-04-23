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
    
    
// mouseover/mouseout functions for Percolator page
    document.getElementById("percolator").addEventListener("mouseover", mouseOverperc);
    document.getElementById("percolator").addEventListener("mouseout", mouseOutperc);

    var percInfo = "My first EVER webpage!";

    function mouseOverperc() {
        document.getElementById("percolator").innerHTML = percInfo;
        document.getElementById("percolator").style.color = "violet";
    };
    function mouseOutperc() {
        document.getElementById("percolator").style.color = "red";
    };



    // mouseover/mouseout functions for Patent page
    document.getElementById("patent").addEventListener("mouseover", mouseOverpat);
    document.getElementById("patent").addEventListener("mouseout", mouseOutpat);

    var patInfo = "My first EVER page design!";

    function mouseOverpat() {
        document.getElementById("patent").innerHTML = patInfo;
        document.getElementById("patent").style.color = "violet";
    };
    function mouseOutpat() {
        document.getElementById("patent").style.color = "red";
    };



    // mouseover/mouseout functions for CMS page
    document.getElementById("perscms").addEventListener("mouseover", mouseOverprod);
    document.getElementById("perscms").addEventListener("mouseout", mouseOutprod);

    var prodInfo = "My first EVER server side script!";

    function mouseOverprod() {
        document.getElementById("perscms").innerHTML = prodInfo;
        document.getElementById("perscms").style.color = "violet";
    };
    function mouseOutprod() {
        document.getElementById("perscms").style.color = "red";
    };