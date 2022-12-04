window.addEventListener("load",()=>{
    const loading = document.querySelector(".loading");
    loading.style="display:none";
})
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    rootMargin:"-100px",
})

const observer2 = new IntersectionObserver(entries=>{
    entries.forEach(entry => {
        entry.target.classList.toggle("fadeIn",entry.isIntersecting)
        if(entry.isIntersecting) observer2.unobserve(entry.target)
    });
},
{
    rootMargin:"-100px",
})
const myImage = document.querySelector(".myImage")
observer2.observe(myImage)

const mes_competences = document.querySelector(".mes_competences");
observer2.observe(mes_competences)

const portfolio_project = document.querySelectorAll(".portfolio_project");
portfolio_project.forEach(project=>{
    observer.observe(project)
})
const services_cartes = document.querySelectorAll(".services_cartes");
services_cartes.forEach((el)=>observer.observe(el))

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

//UI UX Toggle Image
const uiuxContainer = document.querySelector(".iu_ux_design_projects");
const projects = [
    {src:"images/extraImages/UIUX.jpg",alt:"First UI UX Project"},
    {src:"images/extraImages/UIUX2.jpg",alt:"Second UI UX Project"},
    {src:"images/extraImages/UIUX3.jpg",alt:"Third UI UX Project"},
    {src:"images/extraImages/UIUX4.jpg",alt:"Fourth UI UX Project"}
]
const hideShow = ()=>{
    const show_gallery = document.querySelector(".show_gallery");
    show_gallery.classList.toggle("active")
}
const generateProjects = (obj)=>{
    const uiProject = document.createElement("div");
    uiProject.classList.add("ui_ux_project");
    const projectImage = document.createElement("img");
    projectImage.width=300;
    projectImage.src=obj.src;
    projectImage.alt=obj.alt;

    // Ajouter un évènement au click
    projectImage.addEventListener("click",()=>{
        const show_gallery = document.querySelector(".show_gallery");
        const containerImage = document.querySelector(".show_gallery img");
        containerImage.src=projectImage.src;
        hideShow()
    })
    uiProject.appendChild(projectImage)
    uiuxContainer.appendChild(uiProject)
}

projects.forEach(el=>{
    generateProjects(el)
})
