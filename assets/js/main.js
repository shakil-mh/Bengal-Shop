
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
