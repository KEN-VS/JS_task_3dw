const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);
const itemsList = document.querySelectorAll(".slider__item");

const minRight = 0;
const itemWidth = getComputedStyle(itemsList[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const maxRight = (itemsList.length - preShownItems) * step;
let currentRight = 0;

items.style.right = currentRight;

rightBtn.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = `${currentRight}px`;
    }
})

leftBtn.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        items.style.right = `${currentRight}px`;
    }
})

/*rightBtn.addEventListener('click', e => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);
    if (currentRight < 500) {

        items.style.right = `${currentRight + 100}px`;
    }

});

leftBtn.addEventListener('click', e => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight > 0) {
        items.style.right = `${currentRight-100}px`;

    }


});*/