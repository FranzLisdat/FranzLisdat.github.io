
$(document).ready(function(){
    document.getElementById("start-button").onclick = startFunktion;
    document.getElementById("weiter-button").onclick = weiterFunktion;
    var anweisung = "Kann Losgehen!";
    var weiterButtonText = "Los!";
    var Spieleranzahl = localStorage.getItem("spielerValue");
    var zeitFuersSpiel = localStorage.getItem("zeitValue");
    var spielOrtString;
    var spielOrtStringAbspeicherung = ""; 
    var personen = [];
    var rollenText = "";
    var verbleibeneSpieler = 0;

    document.getElementById("anweisung").innerHTML = anweisung;
    document.getElementById("weiter-button").innerHTML = weiterButtonText;

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    $.getJSON('json/datenbank.json', function(data) {
        var randomNumber = Math.floor(Math.random() * data.ort.length);
        spielOrtString = Object.keys(data.ort[randomNumber]);
        personen = data["ort"][randomNumber][spielOrtString];
        shuffle(personen.person);
        personen.person.splice(0,13-Spieleranzahl);
        personen.person.push({id:12,bezeichnung:"Agent"});
        spielOrtStringAbspeicherung = spielOrtString;
        }).then(function(){
        verbleibeneSpieler = personen.person.length;
        document.getElementById("result").innerHTML = "noch : " + verbleibeneSpieler + " Rolle (n) zu vergeben!"
        });

    function weiterFunktion(){
        if (personen.person.length!= 0){
            if (rollenText === "") {
                anweisung = "Merk dir die Infos!";
                weiterButtonText = "Habs!"
                spielOrtString = spielOrtStringAbspeicherung;
                var randomNumberFuerPerson = Math.floor(Math.random() * personen.person.length);
                rollenText = personen.person[randomNumberFuerPerson].bezeichnung;
                personen.person.splice(randomNumberFuerPerson,1);
                if (rollenText == "Agent"){
                    spielOrtString = "???";    
                    }
            }   else if (rollenText !== ""){
                    anweisung = "Weitergeben!";
                    weiterButtonText = "Zeig her!";
                    rollenText = "";
                    spielOrtString = "";
                }
            // Update alle Infos auf der HTML
            document.getElementById("weiter-button").innerHTML = weiterButtonText;
            document.getElementById("anweisung").innerHTML = anweisung;
            document.getElementById("textfeld").innerHTML = rollenText;
            document.getElementById("spiel-ort").innerHTML = spielOrtString;
        //Alles hidden machen und Timer zeigen
        } else {
            anweisung = "Starte den Timer!"
            document.getElementById("anweisung").innerHTML = anweisung;
            hideText = document.getElementById("spiel-anzeigeId");
            hideText.classList.add("hidden");
            showText = document.getElementById("start-button");
            showText.classList.remove("hidden");
            document.getElementById("demo").innerHTML = zeitFuersSpiel + "m " + "0s ";
            
        }
        verbleibeneSpieler = personen.person.length;
        if (verbleibeneSpieler != 0){
            document.getElementById("result").innerHTML = "noch : " + verbleibeneSpieler + " Rolle (n) zu vergeben!";
        } else {
            document.getElementById("result").innerHTML = "alle Rollen wurden vergeben!";
        }
    }


    function startFunktion(){
        anweisung = "Timer läuft!!"
        document.getElementById("anweisung").innerHTML = anweisung;
        document.getElementById("result").classList.add("hidden");
        startButton = document.getElementById("start-button");
        startButton.classList.add("hidden");
        timer();
        document.getElementById("neustart-button").classList.remove("hidden");
    }

    function timer(){
        // Zeit für das Spiel in Minuten
        var now = new Date().getTime();
        var countDownDate = now + (zeitFuersSpiel*1003*60);
        // Update the count down every 1 second
        var x = setInterval(function() {   
        // Find the distance between now and the count down date
        now = new Date().getTime();
        var distance = countDownDate - now;
        // Time calculations minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Zeit vorbei!";
            }
        }, 1000);
    }
})