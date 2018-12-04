console.log("chinpo")

var position = 0;

var unchi = document.getElementById("unchi");
console.log(unchi);

var upMove = document.getElementById("up-move");
var downMove = document.getElementById("down-move");

var form = document.getElementById("form");
var button = document.getElementById("button");

// var button1 = document.getElementById("button1");
// button1.onclick = function () {
//     position = 0;
//     console.log(position);
// }

// var button2 = document.getElementById("button2");
// button2.onclick = function () {
//     position = 1;
//     unchi.style.backgroundColor = '#0000ff'
//     console.log(position);
// }

// var button3 = document.getElementById("button3");
// button3.onclick = function () {
//     position = 2;
//     unchi.style.backgroundColor = '#ffff00'
//     console.log(position);
// }

// var button4 = document.getElementById("button4");
// button4.onclick = function () {
//     position = 3;
//     unchi.style.backgroundColor = '#00ffff'
//     console.log(position);
// }

var leftMove = document.getElementById("left-move");
leftMove.onclick = function () {
    position = (position + 3) % 4;
    console.log(position)
    hoge();
};

function hoge() {
    switch (position) {
        case 0:
            unchi.style.backgroundImage = 'url("./room0.png")';
            upMove.style.visibility = 'visible'
            break;
        case 1:
            unchi.style.backgroundImage = 'url("./room1.png")';
            upMove.style.visibility = 'hidden'
            break;
        case 2:
            unchi.style.backgroundImage = 'url("./room2.png")';
            upMove.style.visibility = 'hidden'
            break;
        case 3:
            unchi.style.backgroundImage = 'url("./room3.png")';
            upMove.style.visibility = 'hidden'
            break;
    }
}

var rightMove = document.getElementById("right-move");
rightMove.onclick = function () {
    position = (position + 1) % 4;
    console.log(position);
    hoge();
}

upMove.onclick = function () {
    unchi.style.backgroundImage = 'url("./room11.png")';
    upMove.style.visibility = 'hidden'
    downMove.style.visibility = 'visible'
    leftMove.style.visibility = 'hidden'
    rightMove.style.visibility = 'hidden'

}

downMove.onclick = function () {
    unchi.style.backgroundImage = 'url("./room0.png")';
    upMove.style.visibility = 'visible'
    downMove.style.visibility = 'hidden'
    leftMove.style.visibility = 'visible'
    rightMove.style.visibility = 'visible'
}

button.onclick = function () {
    console.log(form.value);
    if (form.value == 2473) {
        unchi.style.backgroundImage = 'url("./ome.png")';
        upMove.style.visibility = 'hidden'
        downMove.style.visibility = 'hidden'
        leftMove.style.visibility = 'hidden'
        rightMove.style.visibility = 'hidden'
    }
}

