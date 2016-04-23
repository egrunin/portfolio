// EG Sites
// Jack Evgeni Grunin 200310426
// miniport/Scripts/app.js
// javascript for work/contact page

"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    if (document.getElementById("about") != null) {
        console.log("About Page");
    } else if (document.getElementById("work") != null) {
        console.log("Work Page");
    } else if (document.getElementById("contact") != null) {
        console.log("Contact Page");
        //declare variables and create a reference to form elements
        var customerName = document.getElementById("customerName");
        var phone = document.getElementById("phone");
        var email = document.getElementById("email");
        var intent = document.getElementById("intent");
        var comment = document.getElementById("comment");
        var submitButton = document.getElementById("submitButton");
        submitButton.pre

        // dropdown event listener
        intent.addEventListener("change", function showSelected(val) {
            document.getElementById('intent').innerHTML = "Your intent is - " + val;
        }); // end dropdown even listener
        
        submitButton.addEventListener("click", function(event){
            event.preventDefault();
            console.log("Name: " + customerName.value);
            console.log("Phone: " + phone.value);
            console.log("Email: " + email.value);
            console.log("Intent: " + intent.value);
            console.log("Comment: " + comment.value);
        });  
    }
    

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

})();
