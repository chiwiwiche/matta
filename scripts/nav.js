// function openNav(){
//     document.getElementById("mobile-menu").style.width = "100%";
// }

// function closeNav(){
//     document.getElementById("mobile-menu").style.width = "0%";
// }


document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function () {
        mobileMenu.style.width = "100%";
    });

    const closeButtons = document.querySelectorAll('.close, .overlay-content a');
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            mobileMenu.style.width = "0%";
        });
    });
});