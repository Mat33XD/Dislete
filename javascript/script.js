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
let temeMode = 1;
const temeModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
function modeTeme(a){
    temeMode += a;
    if (temeMode % 2 === 0){
        styleElement('--bg-color','#0c0c13');
        styleElement('--bg-color-section','#101010');
        styleElement('--text-color','#c5c5c5');
        styleElement('--var-color','#23212c');
        styleElement('--bg-color-temeButton','#302f36');
        styleElement('--bg-color-temeButton-off','#c5c5c5');
        styleElement('--bg-color-topButton','#3d3a52');
        styleElement('--color-var-topButton','#131313');
        styleElement('--panel-color','#0e0e14');
        styleElement('--color-column-panel','#1d1d24');
        styleElement('--color-shadow-column-panel ','#1d1d24');
        styleElement('--text-panel-color','#e0d9d9');
        styleElement('--text-panel-color-active','#323561');
        styleElement('--text-color-column-panel','#fff3f3');
        styleElement('--button-bg-color','#20202b');
        styleElement('--button-text-color','#5897a2');
        styleElement('--border-color','#737373');
        styleElement('--button-bg-color-hover','#3e3d49');
        styleElement('--button-text-color-hover','#80c9de');
        styleElement('--border-color-hover','#404040');
        styleElement('--shadow-text-color-button','#000000');
        styleElement('--separador-color','#3c4761');
        styleElement('--bg-color-footer','#0b0b0c');
        styleElement('--text-color-footer','#5a6680');
    }else {
        styleElement('--bg-color','#f0f6ff');
        styleElement('--bg-color-section','#c7c6d4');
        styleElement('--text-color','#06020c');
        styleElement('--var-color','#434783');
        styleElement('--bg-color-temeButton','#3c4761');
        styleElement('--bg-color-temeButton-off','#c5c5c5');
        styleElement('--bg-color-topButton','#3d3a52');
        styleElement('--color-var-topButton','#131313');
        styleElement('--panel-color','#cccccc');
        styleElement('--color-column-panel','#2d3053');
        styleElement('--color-shadow-column-panel','#34344d59');
        styleElement('--text-panel-color','#000000');
        styleElement('--text-panel-color-active','#13635d');
        styleElement('--text-color-column-panel','#fff3f3');
        styleElement('--button-bg-color','#818cac');
        styleElement('--button-text-color','#040024');
        styleElement('--border-color','#191725');
        styleElement('--button-bg-color-hover','#97a0bd');
        styleElement('--button-text-color-hover','#1a1a53');
        styleElement('--border-color-hover','#42458871');
        styleElement('--shadow-text-color-button','#576a75');
        styleElement('--separador-color','#3c4761');
        styleElement('--bg-color-footer','#222236');
        styleElement('--text-color-footer','#5a6680');
    };
};
/** if (temeModePreference) {
    modeTeme(1);
}; */

