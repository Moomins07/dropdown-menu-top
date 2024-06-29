

function displayDropDownMenu() {
    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';
    dropdownMenu.innerText = 'This is a dropdown menu';
    document.body.appendChild(dropdownMenu);

}

export { displayDropDownMenu }