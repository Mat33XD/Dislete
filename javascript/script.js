const Itemtwo = document.getElementById("item-two");
const Itemtre = document.getElementById("item-tre");
const Itemone = document.getElementById("item-one");
let PositionItem1 = 1;
let PositionItem2 = 2;
let PositionItem3 = 3;
function move(num) {
    PositionItem1 += num;
    PositionItem2 += num;
    PositionItem3 += num;
    if (PositionItem1 > 3) {
        PositionItem1 = 1;
    } else if (PositionItem1 < 1) {
        PositionItem1 = 3;
    };
    if (PositionItem2 > 3) {
        PositionItem2 = 1;
    } else if (PositionItem2 < 1) {
        PositionItem2 = 3;
    };
    if (PositionItem3 > 3) {
        PositionItem3 = 1;
    } else if (PositionItem3 < 1) {
        PositionItem3 = 3;
    };
    if (PositionItem1 === 3) {
        Itemone.classList.add("item-rigth")
        Itemone.classList.remove("item-lefth", "item-center")
    }else if (PositionItem1 === 2) {
        Itemone.classList.add("item-lefth")
        Itemone.classList.remove("item-rigth", "item-center")
    }else {
        Itemone.classList.add("item-center")
        Itemone.classList.remove("item-rigth", "item-lefth")
    }
    if (PositionItem2 === 3) {
        Itemtwo.classList.add("item-rigth")
        Itemtwo.classList.remove("item-lefth", "item-center")
    }else if (PositionItem2 === 2) {
        Itemtwo.classList.add("item-lefth")
        Itemtwo.classList.remove("item-rigth", "item-center")
    }else {
        Itemtwo.classList.add("item-center")
        Itemtwo.classList.remove("item-rigth", "item-lefth")
    }
    if (PositionItem3 === 3) {
        Itemtre.classList.add("item-rigth")
        Itemtre.classList.remove("item-lefth", "item-center")
    }else if (PositionItem3 === 2) {
        Itemtre.classList.add("item-lefth")
        Itemtre.classList.remove("item-rigth", "item-center")
    }else {
        Itemtre.classList.add("item-center")
        Itemtre.classList.remove("item-rigth", "item-lefth")
    }

};
/* ----------------- teme color */
function styleElement(elemento,color) {
    document.documentElement.style.setProperty(elemento,color);
};
let temeButton = document.getElementById('teme__interruptor');
let temeButtonMode = 0;
function temeMode(){
    temeButtonMode = temeButton.checked;
    if (temeButtonMode){
        styleElement('--dark-bg-color','#0c0c13');
        styleElement('--dark-bg-color-section','#101010');
        styleElement('--dark-text-color','#c5c5c5');
        styleElement('--dark-var-color', '#17151f');
        styleElement('--dark-panel-color', '#0e0e14');
        styleElement('--dark-bg-color-footer', '#0b0b0c');
        styleElement('--dark-text-color-footer', '#5a6680');
        styleElement('--dark-border-color', '#737373');
        styleElement('--dark-button-bg-color', '#20202b');
        styleElement('--dark-button-text-color','#5897a2');
        styleElement('--dark-separador-color', '#3c4761');
    }else {
        styleElement('--dark-bg-color','#f6fdfd');
        styleElement('--dark-bg-color-section','#afaeae');
        styleElement('--dark-text-color','#121114');
        styleElement('--dark-var-color', '#756f8f');
        styleElement('--dark-panel-color', '#746a81');
        styleElement('--dark-bg-color-footer', '#12121f');
        styleElement('--dark-text-color-footer', '#5a6680');
        styleElement('--dark-border-color', '#c5bac9');
        styleElement('--dark-button-bg-color', '#473358');
        styleElement('--dark-button-text-color','#aaa8ca');
        styleElement('--dark-separador-color', '#3c4761');
    }
}

