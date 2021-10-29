var bgImage;
var cat, mouse;
var catImg1, catImg2, catImg3;
var mouseImg1, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,700,50,50);
    cat.addAnimation("SittedCat", catImg1);
    cat.addAnimation("WalkingCat", catImg2);
    cat.addAnimation("HappyCat", catImg3);
    cat.scale = 0.2;
    cat.depth = 1;

    mouse = createSprite(200,700,50,50);
    mouse.addAnimation("IdleMouse",mouseImg1);
    mouse.addAnimation("AnnoyingMouse", mouseImg2);
    mouse.addAnimation("HappyMouse", mouseImg3);
    mouse.scale = 0.1;
    mouse.depth = 0;
}

function draw() {
    background(bgImage);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.changeAnimation("HappyCat");

        mouse.changeAnimation("HappyMouse");
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        mouse.changeAnimation("AnnoyingMouse");
        mouse.frameDelay = 25;

        cat.velocityX = -5;
        cat.changeAnimation("WalkingCat");
    }
}
