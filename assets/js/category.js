// Toogle category dropdown
const categoryLists = document.querySelectorAll('.category-list > li');
const categoryContainer = document.querySelector('.category-container');

categoryLists.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetLink = e.target.closest('li');
        targetLink.classList.toggle('category-active');
        if(targetLink.classList.contains('category-active')) {
            targetLink.nextElementSibling.style.height = targetLink.nextElementSibling.scrollHeight + 'px';
        }else {targetLink.nextElementSibling.style.height = 0;}
    })
})

// Show category side menu

document.addEventListener('click', (e) => {
    const isCategoryBtn = e.target.closest('.category-btn button') != null;
    const isCategoryContainer = e.target.closest('.category-container') != null;

    if(isCategoryBtn) categoryContainer.classList.toggle('show-category');
    if(!isCategoryBtn && !isCategoryContainer) categoryContainer.classList.remove('show-category');
})


// Update range fill
const minInput = document.querySelector('.min-input');
const maxInput = document.querySelector('.max-input');
const rangeFill = document.querySelector('.range-fill');

function updateRange(dir) {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    const maxRange = parseInt(maxInput.max);
    if(dir = "left") rangeFill.style.left = `${(min / maxRange) * 100}%`;
    if(dir = "right") rangeFill.style.right = `${100 - (max / maxRange) * 100}%`;
}
updateRange("left");
updateRange("right");
updatePrice();

minInput.addEventListener('input', () => {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    if(min > max) maxInput.value = min;
    updateRange("left");
    updatePrice();
})

maxInput.addEventListener('input', () => {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    if(min > max) minInput.value = max;
    updateRange("right");
    updatePrice();
})

function updatePrice() {
    const minPrice = document.querySelector('.min-price');
    const maxPrice = document.querySelector('.max-price');
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    minPrice.textContent = `$${min}`;
    maxPrice.textContent = `$${max}`;
}