const mobileMenu = document.querySelector("#mobile-menu");
const navToggle = document.querySelector(".mobile-nav-links")
let menuIsOpen = Boolean(false);

mobileMenu.addEventListener("click", () => {
    console.log("menu clicked");
    if(menuIsOpen){
        mobileMenu.classList.remove('is-active');
        menuIsOpen = false;
        navToggle.classList.remove('is-active');
    }
    else{
        mobileMenu.classList.add('is-active');
        menuIsOpen = true;
        navToggle.classList.add('is-active');

    }
})



