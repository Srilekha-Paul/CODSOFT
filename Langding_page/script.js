const menuBTN = document.getElementById("menu-btn");

const navlinks = ocument.getElementById("nav_links");

const menuBTNicon = menuBTN.querySelector("i");
menuBTN.addEventListener("click", (e) =>{
    navlinks.classList.toggle("open");

    
})