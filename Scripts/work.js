// work.js
// Jack Evgeni GRunin
// miniport
// April, 2016

"use strict";

var imageCount = 1;
var total = 6;

function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	clearInterval(time); 								// clear interval stops the set interval.
	time =  window.setInterval(function photoA() { 		// givig the value of time the samfunction below starts the loop 
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	},2000);
	}
 
var time = window.setInterval(function photoA() {    // just addign the sunction to the variable so you can target it.
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	},2000);

/*$(function() {
    // configuration
    var width = 350;
    var animationSpeed = 1000;
    var pause = 5000;
    var currentSlide = 1;
    
    // cash DOM 
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');
    
    var interval;
    
    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
            currentSlide++;
            if (currentSlide === $slide.length) {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0); 
            } 
            });
        }, pause);
    }
    
    function stopSlider() {
       clearInterval(interval); 
    }
    
    //listen to mouse enter and pause
    //resume on mouseleave
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    
    startSlider();
    
});*/