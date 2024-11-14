function displayDropDownMenu() {
    const dropDownContainer = document.querySelector('.dropdown-container');
    dropDownContainer.classList.toggle('show');  // Toggle the show class to animate max-height
}

export { displayDropDownMenu };
