const menuImage = document.getElementById('menu-img'); 
const modalMenu = document.getElementById('modal-menu');
const previewCard = document.getElementById('modal-preview');
const closeMenu = document.getElementById('close-modal-menu');
const cartImage = document.getElementById('cart-image');


menuImage.addEventListener('click',()=>{
    modalMenu.style.display = 'flex'
}) 

closeMenu.addEventListener('click',()=>{
    modalMenu.style.display = 'none'
})

/* This is for the preview menu modal */

cartImage.addEventListener('click',()=>{
    previewCard.style.display = (previewCard.style.display === 'flex') ? 'none' : 'flex';
})