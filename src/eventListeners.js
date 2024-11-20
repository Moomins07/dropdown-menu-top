import { displayDropDownMenu } from "./dropDownMenu"
import { carouselRight } from "./carousel"
import { carouselLeft } from "./carousel"

function setEventListeners() {
    document.querySelectorAll('.dropdown-btn').forEach((btn) => {
        btn.addEventListener('click', displayDropDownMenu)
    })


    document.querySelector('.carousel-button.right').addEventListener('click', carouselRight)
    document.querySelector('.carousel-button.left').addEventListener('click', carouselLeft)



}

export { setEventListeners }