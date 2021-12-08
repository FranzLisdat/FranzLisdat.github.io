$(document).ready(function(){
    // to fade in on page load
    $(document.getElementById("all-except-nav")).css("display", "none");
    $(document.getElementById("all-except-nav")).fadeIn(400); 

    var test = "A ";
    test = test.replace("A", "D");
    console.log(test);
})