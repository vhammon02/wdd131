const menuBtn = document.querySelector('.menu-btn');

console.log('this is the menu button:', menuBtn);


// Event listener for menu button
menuBtn.addEventListener('click', handleMenuBtnClick);

function handleMenuBtnClick(event) {
    // Code to toggle menu visibility
    let nav = document.querySelector('.menu-nav');
    
    nav.classList.toggle('hide');

    console.log(nav); 
    menuBtn.classList.toggle('change');

}

