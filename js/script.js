window.onload = function() {

}
let ul = document.querySelector(".navbar_ul");
let clickme = document.querySelector(".bars_container");
clickme.addEventListener("click", function() {
    ul.classList.toggle("active")
})