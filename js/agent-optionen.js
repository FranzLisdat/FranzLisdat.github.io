
$(document).ready(function(){      
    document.getElementById("speichern-input").onclick = passValues;
    function passValues() 
        {
            var anzahlDerSpieler = document.getElementById("spieler-slider").value;
            localStorage.setItem("spielerValue",anzahlDerSpieler);

            var zeitFuersSpiel = document.getElementById("zeit-slider").value;
            localStorage.setItem("zeitValue",zeitFuersSpiel);
            
            
        }

        // Fadeout für Formbutton
        $('form').click(function(e){
            redirect = $(this).attr('action');
            e.preventDefault();      
            $(document.getElementById("all-except-nav")).fadeOut(400, function(){
                document.location.href = redirect
            });
        });

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