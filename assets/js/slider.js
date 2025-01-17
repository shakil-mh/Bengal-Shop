// const categoryArea = document.getElementsByClassName("category-area")[0];
// const sliderLeftButton = categoryArea.getElementsByClassName("slider-btn-left")[0];
// const sliderRightButton = categoryArea.getElementsByClassName("slider-btn-right")[0];

sliderControl = (index, button) => {
    const targetArea = button.parentElement.parentElement.parentElement;
    const slider = targetArea.getElementsByClassName("slider")[0];
    const scrollAmount =
        slider.getElementsByClassName("slide")[0].offsetWidth * 2.5;

    if (index === 0) {
        slider.scrollLeft -= scrollAmount;
    }

    if (index === 1) {
        slider.scrollLeft += scrollAmount;
    }
};

sliderBtnCtrl = (slider) => {
    const sliderLeftButton =
        slider.previousElementSibling.getElementsByClassName(
            "slider-btn-left"
        )[0];
    const sliderRightButton =
        slider.previousElementSibling.getElementsByClassName(
            "slider-btn-right"
        )[0];

    const currentSliderWidth = slider.clientWidth;

    if (slider.scrollLeft === 0) {
        sliderLeftButton.classList.remove("slider-btn-active");
    } else if (slider.scrollLeft + currentSliderWidth === slider.scrollWidth) {
        sliderRightButton.classList.remove("slider-btn-active");
    } else {
        sliderLeftButton.classList.add("slider-btn-active");
        sliderRightButton.classList.add("slider-btn-active");
    }
};
