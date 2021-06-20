const numberSelector = document.querySelector('.number-selector');
const colorSelector = document.querySelector('.color-selector');
const blockContainer = document.querySelector('.blocks');

const creatMarkup = numbSel => {

    let markup = "";

    for (let i = 0; i < numbSel; i++) {
        const block = document.createElement('div');
        block.classList.add("item");
        block.innerText = i + 1;

        markup += block.outerHTML;

    }

    return markup;
}

numberSelector.addEventListener('change', e => {
    const numbSel = e.target.value;
    const markup = creatMarkup(numbSel);

    blockContainer.innerHTML = markup;

});

const colorTheBlock = (block, colorSel) => {
    block.style.backgroundColor = colorSel;
}

let changed = false;

colorSelector.addEventListener("change", e => {

    const colorSel = e.target.value;
    const items = blockContainer.querySelectorAll(".item")

    changed = !changed;

    for (let i = 0; i < items.length; i++) {
        const currentBlock = items[i];
        const blockNumber = i + 1;

        if (changed) {
            if (blockNumber % 2 != 0) {
                colorTheBlock(currentBlock, colorSel);
            } else {
                colorTheBlock(currentBlock, '#fff');
            }
        } else {
            if (blockNumber % 2 == 0) {
                colorTheBlock(currentBlock, colorSel);
            } else {
                colorTheBlock(currentBlock, '#fff');
            }

        }

    }
})