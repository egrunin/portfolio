// work.js
// Jack Evgeni GRunin
// miniport
// April, 2016

"use strict";

$(function() {
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
    
});