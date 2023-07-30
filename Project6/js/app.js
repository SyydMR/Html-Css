const width = window.screen.width;
const widthContainer = document.querySelector('.container-width');
const body = document.querySelector('.body');
const navbar = document.querySelector('.navbar');
const disCardC = document.querySelectorAll('.discount-card-center');
const disCardL = document.querySelector('.discount-card-left');
const disCardR = document.querySelector('.discount-card-right');
const locNav = document.querySelector('.locaion-navbar');
const navItem = document.querySelectorAll('.nav-item');
const locations = document.querySelectorAll('.location');
const boxText = document.querySelectorAll('.box-text');
const cardText = document.querySelectorAll('.card-text');
const itemsGroupText = document.querySelectorAll('.items-group-text');
const itemsGroupTitle = document.querySelectorAll('.items-group-title');
const recommendedItemsText = document.querySelectorAll('.recommended-items-text');
const popularBrandText = document.querySelectorAll('.popular-brand-text');
const discountPicsText = document.querySelectorAll('.discount-pics-text');
const textBestSelling = document.querySelectorAll('.text-best-selling');
const discountCardRight2 = document.querySelectorAll('.discount-card-right-2');


const darkMode = document.getElementById('darkModeBtn');
darkMode.addEventListener('input', dMBtn);

function dMBtn(e) {
    if (e.target.checked === true) {
        body.style.backgroundColor = 'rgb(14, 16, 44)';
        navbar.style.backgroundColor = 'rgb(14, 16, 44)';
        locNav.style.backgroundColor = 'rgb(14, 16, 44)';
        disCardL.style.backgroundColor = 'rgb(14, 16, 44)';
        disCardR.style.backgroundColor = 'rgb(14, 16, 44)';
        disCardC.forEach((e) => {
            e.style.backgroundColor = 'rgb(14, 16, 44)';
        })
        navItem.forEach((e) => {
            e.style.color = 'white';
        })
        locations.forEach((e) => {
            e.style.color = 'white';
        })

        boxText.forEach((e) => {
            e.style.color = 'white';
        })

        cardText.forEach((e) => {
            e.style.color = 'white';
        })

        itemsGroupText.forEach((e) => {
            e.style.color = 'white';
        })
        itemsGroupTitle.forEach((e) => {
            e.style.color = 'white';
        })
        recommendedItemsText.forEach((e) => {
            e.style.color = 'white';
        })
        popularBrandText.forEach((e) => {
            e.style.color = 'white';
        })
        discountPicsText.forEach((e) => {
            e.style.color = 'white';
        })
        textBestSelling.forEach((e) => {
            e.style.color = 'white';
        })
        discountCardRight2.forEach((e) => {
            e.style.backgroundColor = 'black';
        })

    } else {
        body.style.backgroundColor = 'white';
        navbar.style.backgroundColor = 'white';
        locNav.style.backgroundColor = 'white';
        disCardL.style.backgroundColor = 'white';
        disCardR.style.backgroundColor = 'white';
        disCardC.forEach((e) => {
            e.style.backgroundColor = 'white';
        })
        navItem.forEach((e) => {
            e.style.color = 'black';
        })
        locations.forEach((e) => {
            e.style.color = 'black';
        })
        boxText.forEach((e) => {
            e.style.color = 'black';
        })
        cardText.forEach((e) => {
            e.style.color = 'black';
        })

        itemsGroupText.forEach((e) => {
            e.style.color = 'black';
        })
        itemsGroupTitle.forEach((e) => {
            e.style.color = 'black';
        })
        recommendedItemsText.forEach((e) => {
            e.style.color = 'black';
        })
        popularBrandText.forEach((e) => {
            e.style.color = 'black';
        })
        discountPicsText.forEach((e) => {
            e.style.color = 'black';
        })
        textBestSelling.forEach((e) => {
            e.style.color = 'black';
        })
        discountCardRight2.forEach((e) => {
            e.style.backgroundColor = 'white';
        })
    }
}