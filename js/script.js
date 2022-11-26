window.onload = function() {
// alert("hello world")
}
let ul = document.querySelector(".link_container ul");
let clickme = document.querySelector(".humberger_menu");
clickme.addEventListener("click", function() {
    ul.classList.toggle("active")
})
let lis = document.querySelectorAll(".link_container ul li")
lis.forEach(element => {
   element.addEventListener("click",()=>{
    ul.classList.toggle("active")
   }) 
});