const btn = document.querySelector(".bars_container");
const links = document.querySelector(".links_container");
btn.addEventListener("click", function() {
    links.classList.toggle("active");
})