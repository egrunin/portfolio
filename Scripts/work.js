// work.js
// Jack Evgeni GRunin
// miniport
// April, 2016

(function() {

    "use strict";
    var imagecount = 1;
    var total = 3;
    
    function slide(y) {
        var Image = document.getElementById('img');
        imagecount = imagecount + y;
        Image.src = "images/img" + imagecount + ".jpg";
    }
    
    
})();