function toggle(source) {
checkboxes = document.getElementsByName('foo');
for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}
$(document).ready(function(){
    

//  // check Localstorage und setzte den AlleSwitch auf Aus oder An
//  if (localStorage.getItem("kino") == null) {
//     localStorage.setItem("kino", "true");
//     //document.getElementById("kino").setAttribute("checked", "true");
//     //console.log(1)
   
// } else if (localStorage.getItem("kino") == "true") {
//     //document.getElementById("kino").setAttribute("checked","true");
//     //console.log(2)

   
// } else if (localStorage.getItem("kino") == "false") {
//     //document.getElementById("kino").setAttribute("checked",false);
//     console.log(3)

// }

//     $(document.getElementsByClassName("slider-round")).click(function(e){
                
//         //localStorage.setItem("bar",$("#bar").is(':checked'));
//         //console.log("Kino: " + localStorage.getItem("kino"));
//         //console.log("Bar: " + localStorage.getItem("bar"));

//         for (var i = 0; i < 3; i++) {

//             if($("#kino"+i).is(':checked')) {
//                 //$("#txtAge").show();  // checked
//                 console.log("1");
//                 //localStorage.setItem("kino",false);
//                 document.getElementById("kino").removeAttribute("checked");
//             }
//             else {
//                 //localStorage.setItem("kino",true);
//                 //$("#txtAge").hide();  // unchecked
//                 console.log("2")
//             }

//         }

//     })


})
