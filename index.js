let menuBtn = document.querySelector('.btn-menu');
let sideBar = document.querySelector('.sidebar');
let rightBtn = document.querySelector('.btn-right');
let leftBtn = document.querySelector('.btn-left');
let product = document.querySelectorAll('.pr-fogging');
let shop = document.querySelector('.shop');
let gift = document.querySelectorAll('.gift');
let switchBtn = document.querySelectorAll('.switch');
let rightBtn2 = document.querySelector('.btn-right-2');
let leftBtn2 = document.querySelector('.btn-left-2');
let shop2 = document.querySelector('.shop-2');
let product2 = document.querySelectorAll('.product-2');

menuBtn.addEventListener('click', function(){
    this.classList.toggle('menu-active');
    sideBar.classList.toggle('sidebar-visible');
})

rightBtn.addEventListener('click', function(){
    func(rightBtn, leftBtn);
});
leftBtn.addEventListener('click', function(){
    func(leftBtn, rightBtn);
});
rightBtn2.addEventListener('click', function(){
    func(rightBtn2, leftBtn2);
});
leftBtn2.addEventListener('click', function(){
    func(leftBtn2, rightBtn2);
});
function func(thisbtn, otherbtn){
    thisbtn.classList.toggle('hidden');
    otherbtn.classList.toggle('hidden');
    if(thisbtn.dataset.index == 1){
        shop.classList.toggle('shop-move');
        for(let i = 0; i < product.length; i++){
            product[i].classList.toggle('fogging');
        }
    } else{
        console.log(shop2);
        shop2.classList.toggle('shop-move-2');
        console.log(shop2);
        product2[0].classList.toggle('fogging');
        product2[3].classList.toggle('fogging');
    }

};


for(let i = 0; i < switchBtn.length; i++){
    switchBtn[i].addEventListener('click', function(){
        switchBtn[i].classList.remove('switch-fogging');
        gift[i].classList.remove('gift-hidden');
        for(let y = 0; y < gift.length; y++){
            if(y !== i){
                switchBtn[y].classList.add('switch-fogging');
                gift[y].classList.add('gift-hidden');
            }
        }
    })
}




