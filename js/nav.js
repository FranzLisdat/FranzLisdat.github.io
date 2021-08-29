
$(document).ready(function(){

    var path = window.location.pathname;

    if (path == "/index.html"){
        document.getElementById("index").classList.add("current");
    } else if (path == "/agent.html" || path == "/agent-optionen.html" || path == "/agent-start.html") {
        document.getElementById("agent").classList.add("current");
    }
    
    const mobileBtn = document.getElementById("mobile-cta");
    nav = document.querySelector("nav"); // does the same but without the ID
    mobileBtnExit = document.getElementById("mobile-exit");
    
    mobileBtn.addEventListener("click", () => {
        nav.classList.add("menu-btn");
    })
    
    mobileBtnExit.addEventListener("click", () => {
        nav.classList.remove("menu-btn");
    })
})
  
    
 