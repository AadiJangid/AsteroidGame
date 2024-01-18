//console.log(window.innerHeight/2); 357
//console.log(window.innerWidth/2); 519\

var obstacleArr = []

var obstacle1 = document.getElementById("obstacle1");
obstacleArr.push(obstacle1);

var obstacle2 = document.getElementById("obstacle2");
obstacleArr.push(obstacle2);
var obstacle3 = document.getElementById("obstacle3");
obstacleArr.push(obstacle3);
var obstacle4 = document.getElementById("obstacle4");
obstacleArr.push(obstacle4);
var obstacle5 = document.getElementById("obstacle5");
obstacleArr.push(obstacle5);
var obstacle6 = document.getElementById("obstacle6");
obstacleArr.push(obstacle6);


var character = document.getElementById("character");

obstacle1.addEventListener('animationiteration', () => {
    var random = ((Math.random() * (525)));
    obstacle1.style.top = random + "px";
});

obstacle2.addEventListener('animationiteration', () => {
    var random = ((Math.random() * (525)) - 75);
    obstacle2.style.top = random + "px";
});

obstacle3.addEventListener('animationiteration', () => {
    var random = ((Math.random() * 525) - 150);
    obstacle3.style.top = random + "px";
});

obstacle4.addEventListener('animationiteration', () => {
    var random = ((Math.random() * 525) - 225);
    obstacle4.style.top = random + "px";
});

obstacle5.addEventListener('animationiteration', () => {
    var random = ((Math.random() * 525) - 300);
    obstacle5.style.top = random + "px";
});

obstacle6.addEventListener('animationiteration', () => {
    var random = ((Math.random() * 525) - 375);
    obstacle6.style.top = random + "px";
});


var gameOver = false;


document.addEventListener("keydown", move);
var interval = setInterval(function() {
    if (gameOver) {
        for (let i = 0; i < obstacleArr.length; i++) {
            obstacleArr[i].style.animationPlayState = 'paused';
        }
        clearInterval(interval);
    }
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    for (let i = 0; i < obstacleArr.length; i++) {
        var obstacleTop =
        parseInt(window.getComputedStyle(obstacleArr[i]).getPropertyValue("top")) + (i * 75) + 15;
        //console.log(i + ":" + obstacleTop);
        var obstacleLeft =
        parseInt(window.getComputedStyle(obstacleArr[i]).getPropertyValue("left"));
        if (((characterLeft + 15 >= obstacleLeft) && (characterLeft <= obstacleLeft + 75)) &&
            ((characterTop + 15 >= obstacleTop) && (characterTop <= obstacleTop + 75))) {
                alert("Game Over: You Crashed!");
                gameOver = true;
                break;
            }
    }
}, 0.1);

var scoreInterval = setInterval(function () {
    if (gameOver) {
        clearInterval(scoreInterval);
    }
    var scoreDisplay = document.getElementById("scoreDisplay");
    var curr =  parseInt(scoreDisplay.innerText);
    scoreDisplay.innerText = curr + 1;
}, 1500)



function move(e) {
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if ((e.code == "ArrowUp" || e.code == "KeyW") && characterTop > 15 ) {
        character.style.top = (characterTop - 20) + "px";
    }
    else if ((e.code == "ArrowDown" || e.code == "KeyS") && characterTop < 580 ) {
        character.style.top = (characterTop + 20) + "px";
    }
    else if ((e.code == "ArrowLeft" || e.code == "KeyA") && characterLeft > 0) {
        character.style.left = (characterLeft -20) + "px";
    }
    else if ((e.code == "ArrowRight" || e.code == "KeyD") && characterLeft < 585) {
        character.style.left = (characterLeft + 20) + "px";
    }
}

