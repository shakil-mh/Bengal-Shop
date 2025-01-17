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

// Creating mobile menu

const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const menuTop = document.createElement("div");
menuTop.classList.add("menu-top");
menuTop.innerHTML = logo + `<i class="fa-solid fa-xmark"></i>`;
const dropdown = document.getElementsByClassName("dropdown");
const ul = document.createElement("ul");
ul.innerHTML = `<li>Home<i class="fa-solid fa-caret-down"></i></li>
                ${dropdown[0].outerHTML}
                <li>Shop<i class="fa-solid fa-caret-down"></i></li>
                ${dropdown[1].outerHTML}
                <li>Pages<i class="fa-solid fa-caret-down"></i></li>
                ${dropdown[2].outerHTML}
                <li>Blog<i class="fa-solid fa-caret-down"></i></li>
                ${dropdown[3].outerHTML}
                <li>Contact</li>
                <li>Track Order</li>`;

mobileMenu.append(menuTop, ul); // Inserting menu top and ul to mobile menu

//  Mobile menu toggle

const bg = document.getElementsByClassName("bg")[0];
const menuCloseBtn = mobileMenu.querySelector(".menu-top i");

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

// mobile sub menu toggle

const menuList = Array.from(mobileMenu.querySelectorAll("li"));
menuList.splice(-2, 2);

menuList.forEach((li) => {
    li.addEventListener("click", () => {
        li.nextElementSibling.classList.toggle("show-dropdown");

        if (li.nextElementSibling.classList.contains("show-dropdown")) {
            li.nextElementSibling.style.height =
            li.nextElementSibling.scrollHeight + "px";
        } else {
            li.nextElementSibling.style.height = 0;
        }
    });
});

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
