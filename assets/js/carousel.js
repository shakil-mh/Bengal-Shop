const slide = document.querySelector('.carousel-slide');
const slideItemHeight = slide.children[0].clientHeight;
slide.style.transform = `translateY(-${slideItemHeight}px)`;

const carouselBtn = document.querySelectorAll(".carousel-nav button");

function goToSlide(index){
    slide.style.transform = `translateY(-${slideItemHeight * index}px)`;
    carouselBtn.forEach(button=>{
        button.classList.remove("current-slide")
        carouselBtn[index].classList.add("current-slide")
    })
}

carouselBtn.forEach((btn, i) =>{
    btn.addEventListener("click",()=> goToSlide(i))
})

const totalSlide = carouselBtn.length
let currentSlide = 0

setInterval(()=>{
    currentSlide = (currentSlide + 1) % totalSlide;
    // console.log(currentSlide)
    goToSlide(currentSlide)
}, 3000)