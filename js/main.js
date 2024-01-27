let elBoxes = document.querySelectorAll('.box');
let elBoxes2 = document.querySelectorAll('.box2');


let count = 0
setInterval(() => {
    count = count + 1
    if (count == 12) {
        count = 1
    }
    if (count >= 1 && count <= 3) {
        fnRed()
        fnGreen2()
    }
    if (count == 4 || count == 9) {
        fnYellow()
    }
    if (count == 4 && count == 4.5) {
        fnGreen2()
    }
    if (count == 4.5 && count == 5) {
        fnRed2()
    }
    if (count >= 5 && count <= 8) {
        fnGreen()
        fnRed2()
    }
}, 1000);

function fnRed() {
    elBoxes[0].classList.add('qizil')
    elBoxes[1].classList.remove('sariq')
    elBoxes[2].classList.remove('yashil')
}
function fnYellow() {
    elBoxes[0].classList.remove('qizil')
    elBoxes[1].classList.add('sariq')
    elBoxes[2].classList.remove('yashil')
}
function fnGreen() {
    elBoxes[0].classList.remove('qizil')
    elBoxes[1].classList.remove('sariq')
    elBoxes[2].classList.add('yashil')
}

function fnRed2() {
    elBoxes2[0].classList.add('qizil')
    elBoxes2[1].classList.remove('yashil')
}
function fnGreen2() {
    elBoxes2[0].classList.remove('qizil')
    elBoxes2[1].classList.add('yashil')
}