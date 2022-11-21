function loadMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    for(let i=1; i<=6; i++){
        let menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        menuItem.dataset.itemNumber = i;
        menuContainer.appendChild(menuItem);
    }
    return menuContainer;
}

export default loadMenu;