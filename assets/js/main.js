//  sticky header area

const header = document.getElementsByClassName("header")[0];
const logo = document.getElementsByClassName("logo")[0].outerHTML;
const menu = document.getElementsByClassName("menu-area")[0].outerHTML;
const account = document.getElementsByClassName("account-area")[0].outerHTML;
const scrollWatcher = document.getElementsByClassName("scroll-watcher")[0];

const observer = new IntersectionObserver((entries) => {
    header.innerHTML = logo + menu + account;
    header.parentElement.classList.toggle(
        "sticking",
        !entries[0].isIntersecting
    );
});

observer.observe(scrollWatcher);

// mobile menu

const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const nav = document.getElementsByTagName("nav")[0].innerHTML;
const bg = document.getElementsByClassName("bg")[0];
mobileMenu.innerHTML =
    `<div class="menu-top">` +
    logo +
    `<i class="cancel-mobile-menu fa-solid fa-xmark"></i></div>` +
    nav;
const menuCloseBtn = mobileMenu.querySelector(".menu-top i");

console.log();

function showMenu() {
    mobileMenu.classList.add("mobile-menu-active");
    bg.classList.add("bg-show");
    document.body.style.overflow = "hidden";
}

function hideMenu() {
    mobileMenu.classList.remove("mobile-menu-active");
    bg.classList.remove("bg-show");
    document.body.style.overflow = "auto";
}

menuCloseBtn.addEventListener("click", hideMenu);

//  category section

let categorySlider = document.getElementsByClassName("category-slider")[0];
const categorySlide = categorySlider.innerHTML;

categorySlider.innerHTML += categorySlide;

//  deal section

let dealSlider = document.getElementsByClassName("deal-slider")[0];
const dealSlide = dealSlider.innerHTML;

dealSlider.innerHTML += dealSlide;

//  Brands section

let brandsSlider = document.getElementsByClassName("brands-slider")[0];
const brandsSlide = brandsSlider.innerHTML;

brandsSlider.innerHTML += brandsSlide;
