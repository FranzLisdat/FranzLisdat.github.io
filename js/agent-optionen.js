
$(document).ready(function(){      
    
    document.getElementById("speichern-input").onclick = passValues;
    function passValues() 
        {
            var anzahlDerSpieler = document.getElementById("spieler-slider").value;
            localStorage.setItem("spielerValue",anzahlDerSpieler);

            var zeitFuersSpiel = document.getElementById("zeit-slider").value;
            localStorage.setItem("zeitValue",zeitFuersSpiel);
            
            location.href = "agent-start.html"
        }

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