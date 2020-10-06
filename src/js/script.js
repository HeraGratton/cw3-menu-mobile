document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");

    var hamburgers = document.querySelectorAll('.hamburger');
    var menuMobile = document.querySelector('.nav-primary-mobile');


    for(let i = 0; i < hamburgers.length; i++) {
        var hamburger = hamburgers[i];
        hamburger.addEventListener('click', openMenu);
    }

    function openMenu(evt) {
        evt.preventDefault();

        var target = evt.currentTarget;

        if(target.classList.contains('open')) {
            target.classList.remove('open');
            menuMobile.classList.remove('open');
        } else {
            target.classList.add('open');
            menuMobile.classList.add('open');

        }
    }
});