$(document).ready(function(){
    
   document.getElementById("start-button").onclick = startFunktion;

    function startFunktion(){
        console.log("Start Button gedrückt!")
    }

    
    var myJsonData;
    var newJsonData = {"firstName":"Franz","lastName":"Test","job":"Programmer","roll":25};
    console.log("newJsonData: " + newJsonData);

    $.getJSON('json/test.json', function(data) {
    myJsonData = data;
    }).then(function(){
        console.log(myJsonData);
        JSON.stringify(newJsonData);
        console.log(JSON.stringify(newJsonData));
    })
  
    
})
