const glass = document.querySelector("#glass");
glass.addEventListener("click", function() {
    setTimeout(() => {
        glass.style.backdropFilter = "blur(8px)"
    }, 1000);
    setTimeout(() => {
        glass.style.backdropFilter = "blur(0)"

    }, 1500);
})