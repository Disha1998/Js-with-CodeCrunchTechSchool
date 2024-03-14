
// board
let board;
let boardWidth = 360;
let boardHeight = 676;
let context

// doodler
let doodlerWidth = 60;
let doodlerHeight = 60;
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = boardHeight * 7 / 8 - doodlerHeight;
let doodlerRightImage
let doodlerLeftImage

let doodler = {
    image: null,
    x: doodlerX,
    y: doodlerY,
    width: doodlerWidth,
    height: doodlerHeight
}

// physics
let velocityX = 0
let velocityY = 0; //doodler jump speed
let initialVelocityY = -8 // starting velocity Y
let gravity = 0.4


// platforms 
let platformArray = []
let platformWidth = 60;
let platformHeight = 18
let platformImage

let score = 0;
let maxScore = 0;
let gameOver = false

window.onload = function () {
    board = document.getElementById("board")
    board.height = boardHeight;
    board.width = boardWidth
    context = board.getContext("2d")

    // // draw doodler
    // context.fillStyle = "green"
    // context.fillRect(doodler.x, doodler.y, doodler.width, doodler.height)

    // load images
    doodlerRightImage = new Image()
    doodlerRightImage.src = "images/doodle-right.png"
    doodler.image = doodlerRightImage
    doodlerRightImage.onload = function () {
        context.drawImage(doodler.image, doodler.x, doodler.y, doodler.width, doodler.height)
    }

    doodlerLeftImage = new Image()
    doodlerLeftImage.src = "images/doodle-left.png"

    platformImage = new Image()
    platformImage.src = "images/doodle-platform.png";

    velocityY = initialVelocityY;
    placePlatforms();

    requestAnimationFrame(update)
    document.addEventListener("keydown", moveDoodler)
}

function update() {
    requestAnimationFrame(update)
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height)
    // doodler
    doodler.x += velocityX;
    if (doodler.x > boardWidth) {
        doodler.x = 0;
    }
    else if (doodler.x + doodler.width < 0) {
        doodler.x = boardWidth;
    }

    velocityY += gravity;
    doodler.y += velocityY;

    if (doodler.y > board.height) {
        gameOver = true
    }
    context.drawImage(doodler.image, doodler.x, doodler.y, doodler.width, doodler.height)

    // platforms
    for (let i = 0; i < platformArray.length; i++) {
        let platform = platformArray[i]
        if (velocityY < 0 && doodler.y < boardHeight * 3 / 4) {
            platform.y -= initialVelocityY
        }
        if (detectCollision(doodler, platform) && velocityY >= 0) {
            velocityY = initialVelocityY
        }
        context.drawImage(platform.img, platform.x, platform.y, platform.width, platform.height)
    }

    // clear platforms and add new platforms

    while (platformArray.length > 0 && platformArray[0].y >= boardHeight) {
        platformArray.shift(); //remove 1st element of the array
        newPlatform();
    }

    // score
    updateScore();
    context.fillStyle = "black";
    context.font = "16px sans-serif";
    context.fillText(score, 5, 20)

    if (gameOver) {
        context.fillText("Game Over : Press 'Space' to Restart :) ", boardWidth / 7, boardHeight * 7 / 8)
    }
}

function moveDoodler(e) {
    if (e.code == "ArrowRight" || e.code == "KeyD") {
        velocityX = 4
        doodler.image = doodlerRightImage
    }
    else if (e.code == "ArrowLeft" || e.code == "KeyA") {
        velocityX = -4;
        doodler.image = doodlerLeftImage;
    }
    else if (e.code == "Space" && gameOver) {
        //reset 
        doodler = {
            image: doodlerRightImage,
            x: doodlerX,
            y: doodlerY,
            width: doodlerWidth,
            height: doodlerHeight
        }
        velocityX = 0;
        velocityY = initialVelocityY;
        score = 0;
        maxScore = 0;
        gameOver = false;
        placePlatforms()
    }
}

function placePlatforms() {
    platformArray = [];
    // starting platforms
    let platform = {
        img: platformImage,
        x: boardWidth / 2,
        y: boardHeight - 50,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform)

    // platform = {
    //     img: platformImage,
    //     x: boardWidth / 2,
    //     y: boardHeight - 180,
    //     width: platformWidth,
    //     height: platformHeight
    // }
    // platformArray.push(platform)

    for (let i = 0; i < 6; i++) {
        let randomX = Math.floor(Math.random() * boardWidth * 3 / 4) //(0-1)
        let platform = {
            img: platformImage,
            x: randomX,
            y: boardHeight - 75 * i - 180,
            width: platformWidth,
            height: platformHeight
        }
        platformArray.push(platform)
    }
}


function newPlatform() {
    let randomX = Math.floor(Math.random() * boardWidth * 3 / 4) //(0-1)
    let platform = {
        img: platformImage,
        x: randomX,
        y: -platformHeight,
        width: platformWidth,
        height: platformHeight
    }
    platformArray.push(platform)
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
        a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
        a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
        a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}

function updateScore() {
    let points = Math.floor(50 * Math.random()) //0-1 * 50 
    if (velocityY < 0) { //nagative -- upar ja raha h
        maxScore += points;
        if (score < maxScore) {
            score = maxScore
        }
    }
    else if (velocityY >= 0) {
        maxScore -= points
    }
}