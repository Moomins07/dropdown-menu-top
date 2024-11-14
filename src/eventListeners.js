import { displayDropDownMenu } from "./dropDownMenu"

function setEventListeners() {
    document.querySelectorAll('.dropdown-btn').forEach((btn) => {
        btn.addEventListener('click', displayDropDownMenu)
    })

}

export { setEventListeners }