const slider = document.querySelector('.carousel-slider');
const slides = document.querySelectorAll('.carousel-slide');
const slideHeight = slider.children[0].clientHeight;
const buttons = document.querySelectorAll('.carousel-nav button');

slider.style.transform = `translateY(-${slideHeight}px)`;

function goToSlide(index){
    slider.style.transform = `translateY(-${slideHeight * [index]}px)`;
    slides.forEach(slide=>{
        slide.classList.remove('active-slide');
        slides[index].classList.add('active-slide');
    })
    buttons.forEach(button=>{
        button.classList.remove('active-indicator');
        buttons[index].classList.add('active-indicator');
    })
}

buttons.forEach((button, i)=>{
    button.addEventListener('click', ()=> goToSlide(i));
})

setInterval(()=>{
    let currentSlide = Array.from(slides).findIndex((slide)=>{
        return slide.classList.contains('active-slide');
    })
    targetSlide = (currentSlide + 1) % slides.length;
    goToSlide(targetSlide);
}, 3500)