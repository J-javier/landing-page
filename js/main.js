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

/* This is for the preview menu modal  */

cartImage.addEventListener('click',()=>{
    previewCard.style.display = (previewCard.style.display === 'flex') ? 'none' : 'flex';
}) 


/* Next and previous functionality */

const btn_previous = document.getElementById('previous-btn');
const btn_next = document.getElementById('next-btn');
const image_container = document.getElementById('main-img');

const imagePaths = [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg'
];

let currentIndex = 0;

const updateImage = ()=>{
    image_container.src = imagePaths[currentIndex];
}

btn_previous.addEventListener('click',()=>{
    currentIndex = (currentIndex === 0 ) ? imagePaths.length -1 : currentIndex - 1;
    updateImage();
})

btn_next.addEventListener('click', ()=>{
    currentIndex = (currentIndex === imagePaths.length -1) ? 0 : currentIndex + 1;
    updateImage();
})

/*  Remove or Add functionality */

const remove_shoe = document.getElementById('remove-shoe') ;
const add_shoe = document.getElementById('add-shoe');
const total_units = document.getElementById('total-shoes');

let Total = 0;

const updateShoes = ()=>{
    total_units.innerText = Total
};

remove_shoe.addEventListener('click', ()=>{
    if(Total > 0 ){
        Total--;
    }
    updateShoes();
})

add_shoe.addEventListener('click', ()=>{
    Total++;
    updateShoes();
})

updateShoes();

/* Cart and Add cart button  */

const btn_add_cart = document.getElementById('btn-add-cart');

btn_add_cart.addEventListener('click', ()=>{
    console.log(total_units.innerText);
})