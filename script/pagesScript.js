let burger = "",
    medianav = document.querySelector('.navbar'),
    sect = document.querySelector('.central');
document.addEventListener("DOMContentLoaded", function() {
    burger = document.getElementById('burger')
    burger.addEventListener("click", toggleBurger)
});

function toggleBurger() {
    if (burger.classList.contains("active")) {
        burger.classList.remove("active")
        medianav.classList.remove("active")
        sect.classList.remove("active");
        console.log(medianav.classList);
    } else {
        burger.classList += " active"
        medianav.classList.add("active")
        sect.classList.add("active")
    }
}