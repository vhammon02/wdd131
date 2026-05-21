const menuBtn = document.querySelector('.menu-btn');


// Event listener for menu button
menuBtn.addEventListener('click', handleMenuBtnClick);

function handleMenuBtnClick(event) {
    // Code to toggle menu visibility
    let nav = document.querySelector('.menu-nav');
    
    nav.classList.toggle('hide');

    console.log(nav); 
    menuBtn.classList.toggle('change');

}



// Code for gallery modal

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'   
    console.log(e.target);
    if (e.target.tagName === 'IMG') {
        console.log(modalImage.alt);
        modalImage.src = e.target.src.replace('sm', 'full');
        console.log(modalImage.src);
        
        modalImage.alt = e.target.alt.replace('Small', 'Full Size');
        console.log('alt text is:' + modalImage.alt);
        modal.showModal();
    }

}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          