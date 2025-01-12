
//  sticky header area

const header = document.getElementsByClassName("header")[0];
const logo = document.getElementsByClassName("logo")[0].outerHTML;
const menu = document.getElementsByClassName("menu-area")[0].outerHTML;
const account = document.getElementsByClassName("account-area")[0].outerHTML;
const scrollWatcher = document.getElementsByClassName("scroll-watcher")[0];

header.innerHTML = logo + menu + account;

const observer = new IntersectionObserver((entries)=>{
    console.log()
    header.parentElement.classList.toggle("sticking", !entries[0].isIntersecting)

})

observer.observe(scrollWatcher);

//  category section

let categorySlider = document.getElementsByClassName("category-slider")[0];
const categorySlide = categorySlider.innerHTML;

categorySlider.innerHTML += categorySlide

//  deal section

let dealSlider = document.getElementsByClassName("deal-slider")[0];
const dealSlide = dealSlider.innerHTML;

dealSlider.innerHTML += dealSlide

// 