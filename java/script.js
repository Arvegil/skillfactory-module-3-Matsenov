var prods = document.querySelectorAll('.product');
var active = document.querySelectorAll('.products-button');
var pt = document.querySelectorAll('.prod-pt');
var wt = document.querySelectorAll('.prod-wt');
var ui = document.querySelectorAll('.prod-ui');
var mu = document.querySelectorAll('.prod-mu');

// for (var i = 0; i < prods.length; i++) {
//     prods[i].classList.add('newclass');
// }

let buttonall  = document.querySelector('.b-prod-all');
let buttonpt   = document.querySelector('.b-prod-pt');
let buttonwt   = document.querySelector('.b-prod-wt');
let buttonui   = document.querySelector('.b-prod-ui');
let buttonmu   = document.querySelector('.b-prod-mu');

buttonall.addEventListener('click', showAll);
buttonpt.addEventListener('click', showPrt);
buttonwt.addEventListener('click', showWeb);
buttonui.addEventListener('click', showUi);
buttonmu.addEventListener('click', showMu);



function showAll() {
     for (var i = 0; i < prods.length; i++) {
          prods[i].classList.remove('product-hidden', 'product-shown');
     }
     for (var i = 0; i < active.length; i++) {
          active[i].classList.remove('products-button-active');
     }
     document.querySelector('.b-prod-all').classList.add('products-button-active');
}

function showPrt() {
     for (var i = 0; i < prods.length; i++) {
          prods[i].classList.add('product-hidden');
     }
     for (var i = 0; i < pt.length; i++) {
          pt[i].classList.remove('product-hidden');
          pt[i].classList.add('product-shown');
     }
     for (var i = 0; i < active.length; i++) {
          active[i].classList.remove('products-button-active');
     }
     document.querySelector('.b-prod-pt').classList.add('products-button-active');
}
function showWeb() {
     for (var i = 0; i < prods.length; i++) {
          prods[i].classList.add('product-hidden');
     }
     for (var i = 0; i < wt.length; i++) {
          wt[i].classList.remove('product-hidden');
          wt[i].classList.add('product-shown');
     }
     for (var i = 0; i < active.length; i++) {
          active[i].classList.remove('products-button-active');
     }
     document.querySelector('.b-prod-wt').classList.add('products-button-active');
}
function showUi() {
     for (var i = 0; i < prods.length; i++) {
          prods[i].classList.add('product-hidden');
     }
     for (var i = 0; i < ui.length; i++) {
          ui[i].classList.remove('product-hidden');
          ui[i].classList.add('product-shown');
     }
     for (var i = 0; i < active.length; i++) {
          active[i].classList.remove('products-button-active');
     }
     document.querySelector('.b-prod-ui').classList.add('products-button-active');
}
function showMu() {     
     for (var i = 0; i < prods.length; i++) {
          prods[i].classList.add('product-hidden');
     }
     for (var i = 0; i < mu.length; i++) {
          mu[i].classList.remove('product-hidden');
          mu[i].classList.add('product-shown');
     }
     document.querySelector('.prod-mu').classList.remove('product-hidden');
     for (var i = 0; i < active.length; i++) {
          active[i].classList.remove('products-button-active');
     }
     document.querySelector('.b-prod-mu').classList.add('products-button-active');
}
