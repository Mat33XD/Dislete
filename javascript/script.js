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

}