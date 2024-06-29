import { displayDropDownMenu } from "./dropDownMenu"

function setEventListeners() {
    document.querySelectorAll('.dropdown-btn').forEach((btn) => {
        btn.addEventListener('mouseenter', displayDropDownMenu)
    })

}

export { setEventListeners }