var headX = 140;
var headY = 100;
var headDirection = 4;

var bodyX = 100;
var bodyY = 150;
var bodyDirection = 1;

var right_armX = 180;
var right_armY = 155;
var right_armDirection = 9;

var left_legX = 105
var left_legY = 250
var left_legDirection = 5

var right_legX = 145
var right_legY = 250
var right_legDirection = 7

var size = 22;
var count = 0;
var sizeDirection = 0.5;


function setup() {
    createCanvas(300, 500);
}

function draw() {
    background(220);
    // head
    fill(255, 242, 232);
    circle(headX,headY,100);
    headX+=headDirection;
    if(headX >= 280 || headX <= 30)
    {
        headDirection *= -1;
    }

    // body
    fill(169,169,169);
    rect(bodyX,150,80,100);
    bodyX+=bodyDirection;
    if(bodyX >= 220 || bodyX <= 10)
    {
        bodyDirection *= -1;
    }

    // torso decor
    fill(139,0,0)
    circle(140,190,50);
    fill(255,255,0);
    circle(140,190,30);  
    // right_arm 
    fill(255, 242, 232);
    rect(180,right_armY,20,90);
    right_armY+=right_armDirection;
    if(right_armY <= 0 || right_armY >= 400 )
    {
        right_armDirection *= -1;
    }

    // left_arm
    fill(255, 242, 232);
    rect(80,155,20,90);
    // right_sleeve
    fill(169,169,169);
    rect(180,150,20,10);
    // left_sleeve
    fill(169,169,169);
    rect(80,150,20,10);
    // left_leg
    fill(0,0,255);
    rect(105,left_legY,30,90);
    left_legY+=left_legDirection;
    if(left_legY <= 0 || left_legY >= 400 )
    {
        left_legDirection *= -1;
    }
    // right_leg
    fill(0,0,255);
    rect(right_legX,right_legY,30,90);
    right_legX+=right_legDirection;
    if(right_legX >= 270 || right_legX <= 10)
    {
        right_legDirection *= -1;
    }
    right_legY+=right_legDirection;
    if(right_legY >= 400 || right_legY <= 0)
    {
        right_legDirection *= -1;
    }

    // mouth
    fill(0,0,0);
    triangle(120,125,160,125,130,140);
    // nose
    line(150,115,135,90);
    line(150,115,140,115);
    // words
    fill(0,0,0);
    text('Dylan Nelson',10,30);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }

    strokeWeight(4);
    // eyes
    point(120,100);
    point(160,100);
}