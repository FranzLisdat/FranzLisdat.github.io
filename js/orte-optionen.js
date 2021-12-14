
var toggle;

// == jQuery(document).ready(function($){
$(document).ready(function(){   
 
    var jsonData = null;
    toggle = function toggle(source) {
        toggleAllLocalStorage(); 
        checkboxes = document.getElementsByName('ortCheckbox');
        for(var i=0, n=checkboxes.length;i<n;i++) {
            checkboxes[i].checked = source.checked;
          }
    }
    
    // Slider button für jeden Ort erstellen und in die Tabelle machen
    // HTML Format:    

    //  <label class="switch">
    //  <input type="checkbox" id="" >
    //  <span class="slider-round"></span>
    //  </label>
    
    var labelAllSwitch = document.createElement("label");
    var checkboxAllSwitch = document.createElement("input");
    var spanAllSwitch = document.createElement("span");

    checkboxAllSwitch.setAttribute("id","alleCheckbox");
    checkboxAllSwitch.setAttribute("type","checkbox");
    checkboxAllSwitch.setAttribute("onClick","toggle(this)");

    labelAllSwitch.setAttribute("class","alleSwitchLabel");
    spanAllSwitch.setAttribute("class", "slider-round");

    $(labelAllSwitch).append(checkboxAllSwitch);
    $(labelAllSwitch).append(spanAllSwitch);
    $(document.getElementById("alleButton")).append(labelAllSwitch);


    // check Localstorage und setzte den AlleSwitch auf Aus oder An
    if (localStorage.getItem("allOn") === null) {
        localStorage.setItem("allOn", "true");
        document.getElementById("alleCheckbox").setAttribute("checked", "true");
       
    } else if (localStorage.getItem("allOn") == "true") {
        document.getElementById("alleCheckbox").setAttribute("checked","true");
       
    } else if (localStorage.getItem("allOn") == "false") {
        //document.getElementById("alleCheckbox").setAttribute("checked","false");
        
    }

    // JSON Datenbank wird geladen etc ------------------------
    $.getJSON('json/datenbank.json', function(data) {

        jsonData = data;

        // Erschaffe Tabelle
        var table = document.createElement("table")
        table.setAttribute("id","customTabelle");

        // Überschrift
        var tr = table.insertRow(-1);
        var thOrt = document.createElement("th");
        var thAnAus = document.createElement("th");
        thOrt.innerHTML = "Ort";
        thAnAus.innerHTML = "An/Aus";
        tr.appendChild(thOrt);
        tr.appendChild(thAnAus);


        // Für jeden Ort muss ein Eintrag in die Liste + Checkbox + abspeichern im Localstorage
        for (var i = 0; i < data.ort.length; i++ ){
            var ort = Object.keys(data.ort[i]);
            var tr1 = table.insertRow(-1);
            // Name des Ortes
            var tdName = document.createElement("td");
            tdName.innerHTML = ""+ort;
            tdName.setAttribute("id", "customTd");
            // Checkbox für den Ort
            var tdButton = document.createElement("td");
            tdButton.setAttribute("id", "customTd");


            // Slider button für jeden Ort erstellen und in die Tabelle machen
            // HTML Format:    

            //  <label class="switch">
            //  <input type="checkbox" id="" name="ortCheckbox">
            //  <span class="slider-round"></span>
            //  </label>

            var label = document.createElement("label");
            var checkbox = document.createElement("input");
            var span = document.createElement("span");
            // Dem Label, der Checkbox und dem Span die classen etc geben
            label.setAttribute("class","switch");
            checkbox.setAttribute("id",ort);
            checkbox.setAttribute("type","checkbox");
            checkbox.setAttribute("name","ortCheckbox");
            //label.setAttribute("for",ort);
            span.setAttribute("class", "slider-round");

            // Wenn noch kein LocalStorage dafür angelegt wurde
            if (localStorage.getItem(ort) === null) {
                checkbox.setAttribute("checked", "true");
                localStorage.setItem(ort,true);
            // Wenn es schon local Storage dafür gibt und es true ist
            } else if (localStorage.getItem(ort) == "true") {

            checkbox.setAttribute("checked", "true");
            // Wenn es schon local Storage dafür gibt und es false ist
            } else if (!localStorage.getItem(ort)) {
            checkbox.setAttribute("checked", "false")
            }
            
            // Checkbox und span sind innerhalb des Labels 
            $(label).append(checkbox);
            $(label).append(span);

            // Alles zsm dem tdButton anhängen
            
            $(tdButton).append(label);
        

            tr1.appendChild(tdName);
            tr1.appendChild(tdButton);
            
            // Ins HTML Einfügen
            var insert = document.getElementById("tabelle");
            insert.innerHTML = "";
            insert.appendChild(table);
            
        } 

    }).then(function(){

        // Wenn irgendein der Orte Button gedrückt wird, update alle LocalStorage
        $(document.getElementsByName("ortCheckbox")).click(function(e){
            updateAllLocalStorageBoxed();
        })
    });

    function updateAllLocalStorageBoxed(){
    for (var i = 0; i < jsonData.ort.length; i++){
        var ort = Object.keys(jsonData.ort[i]);
        checkboxChecked = document.getElementById(ort).checked;
        localStorage.setItem(ort,checkboxChecked);
     }
    }

    function toggleAllLocalStorage(){
        // Wenn allOn = true
        if (localStorage.getItem("allOn") == "true"){
            for (var i = 0; i < jsonData.ort.length; i++){
                var ort = Object.keys(jsonData.ort[i]);
                document.getElementById(ort).setAttribute("checked","false");
                localStorage.setItem(ort,false);
                localStorage.setItem("allOn",false);
            }
        } else {
            for (var i = 0; i < jsonData.ort.length; i++){
                var ort = Object.keys(jsonData.ort[i]);
                document.getElementById(ort).setAttribute("checked",true);
                localStorage.setItem(ort,true);
                localStorage.setItem("allOn",true);
            }
        }
    }

})
