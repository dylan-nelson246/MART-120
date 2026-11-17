var characterX = 60;
var characterY = 440;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 35;
var shapeY = 45;
var shapeXSpeed;
var shapeYSpeed;

var shape2X = 170;
var shape2Y = 340;
var shape2XSpeed;
var shape2YSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(400, 500);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(350, 80);
}

function draw()
{
    background(0,128,0);
    stroke(0);
    fill(0);

    createBorders(12)

    // exit message
    textSize(18);
    text("EXIT", width-60,height-50)


    drawCharacter();
    characterMovement();


    // enemy 1
    fill(255,0,0);
    circle(shapeX, shapeY, 40);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

    // enemy movement
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    // enemy 2
    fill(128,0,128);
    circle(shape2X, shape2Y, 20);

     // get a random speed when the it first starts
     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);

    // enemy 2 movement
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    // out of bounds
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }
    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right border
    rect(width-thickness,0,thickness,height-50);
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    // character
    fill(173,216,230);
    circle(characterX, characterY, 25);
}

function characterMovement()
{
    // movement keys
    if(keyIsDown(w))
    {
        characterY -= 5;
    }
    if(keyIsDown(s))
    {
        characterY += 5;
    }
    if(keyIsDown(a))
    {
        characterX -= 5;
    }
    if(keyIsDown(d))
    {
        characterX += 5;
    }
}
