const allPage = document.querySelector("body");
const hambergurMenu = document.querySelectorAll(".hambergur-menu");
const searchIcon = document.querySelectorAll(".search .bi-search");
const closeModalIcon = document.querySelector(".modal-header .bi-x-lg");
const sideMenu = document.querySelector(".side-menu");
const modal = document.querySelector("#modal");
const closeMenu = document.querySelector(".close-area i")

hambergurMenu.forEach((item) => {
    item.addEventListener("click" , openSideMenu);
})

closeMenu.addEventListener("click" , closeSideMenu);

searchIcon.forEach((item) => {
    item.addEventListener("click" , openModal);
})

closeModalIcon.addEventListener("click" , closeModal)




function openSideMenu(){
    sideMenu.classList.toggle("active");
}

function closeSideMenu(){
    sideMenu.classList.remove("active");
}

function openModal(){
    modal.classList.add("active");
    allPage.classList.add("active");
    sideMenu.classList.remove("active");
}

function closeModal(){
    modal.classList.remove("active");
    allPage.classList.remove("active");
}
