
$(document).ready(function(){   

    jsonData = null;
    $(document.getElementById("speichern-input")).click(function(e){
        e.preventDefault();      
        
        var anzahlDerSpieler = document.getElementById("spieler-slider").value;
        localStorage.setItem("spielerValue",anzahlDerSpieler);
    
        var zeitFuersSpiel = document.getElementById("zeit-slider").value;
        localStorage.setItem("zeitValue",zeitFuersSpiel);

        $(document.getElementById("all-except-nav")).fadeOut(400, function(){
            document.location.href = "agent-start.html";
        });
    })
    $.getJSON('json/datenbank.json', function(data) {
        jsonData = data;
        var count = 0;
        var orteAnzahl = document.getElementById("orte-anzahl");    
        if (localStorage.getItem("allOn") === null) { 
            count = jsonData["ort"].length -1; 
            orteAnzahl.innerHTML = count;
            
        } else {
            var values = [],keys = Object.keys(localStorage), i = keys.length;
            while (i--) {
                if (keys[i] != "allOn")
                values.push(localStorage.getItem(keys[i]))
            }       
            for (var i = 0; i <values.length; i++) {
                if (values[i] == "true") {
                    count++;
                }
            }
            orteAnzahl.innerHTML = count;
        } 
    })

    var sliderSpieler = document.getElementById("spieler-slider");
    var outputsliderSpieler = document.getElementById("Spieleranzahl");
    outputsliderSpieler.innerHTML = sliderSpieler.value;

    sliderSpieler.oninput = function() {
    outputsliderSpieler.innerHTML = this.value;
    }

    var sliderZeit = document.getElementById("zeit-slider");
    var outputsliderZeit = document.getElementById("Zeit");
    outputsliderZeit.innerHTML = sliderZeit.value;

    sliderZeit.oninput = function() {
    outputsliderZeit.innerHTML = this.value;
    }

})