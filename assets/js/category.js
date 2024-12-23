const categoryContainer = document.getElementsByClassName("category-container")[0];
const slider = categoryContainer.getElementsByClassName("category-items")[0];
const categoryLeftButton = categoryContainer.getElementsByClassName("category-left-btn")[0];
const categoryRightButton = categoryContainer.getElementsByClassName("category-right-btn")[0];

scrollCategory = (index) => {
    const scrollAmount = 300;
    
    if(index===0){
        slider.scrollLeft -= scrollAmount;
    }
    
    if(index===1){
        slider.scrollLeft += scrollAmount;
    }
}


categoryBtnCtrl = () =>{

    if(slider.scrollLeft === 0){
        categoryLeftButton.classList.remove("category-btn-active");
    }

    else if(slider.scrollLeft + 1710 === slider.scrollWidth){
        categoryRightButton.classList.remove("category-btn-active");
    }
    
    else{
        categoryLeftButton.classList.add("category-btn-active");
        categoryRightButton.classList.add("category-btn-active");
    }
}