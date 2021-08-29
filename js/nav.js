
$(document).ready(function(){
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
  
    
 