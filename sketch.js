
var c,cimg,cimg2,cimg3;
var m,mimg,mimg2,mimg3;
var b,bimg;
function preload() 
{
   cimg=loadAnimation("images/cat1.png");
   cimg2=loadAnimation("images/cat2.png","images/cat3.png");
   cimg3=loadAnimation("images/cat4.png");
   mimg=loadAnimation("images/mouse1.png");
   mimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
   mimg3=loadAnimation("images/mouse4.png");
   bimg=loadAnimation("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    b=createSprite(500,400,500,500);
    b.addAnimation("background",bimg);
    c=createSprite(850,650,50,50);
    c.addAnimation("cat",cimg);
    c.scale=0.15;
    m=createSprite(100,650,50,50);
    m.addAnimation("mouse",mimg);
    m.scale=0.15;


}

function draw() {

    background(255);
    if(c.x-m.x<(c.width-m.width)/2)
    {
      c.addAnimation("catend",cimg3);
      c.changeAnimation("catend");
      m.addAnimation("mouseend",mimg3);
      m.changeAnimation("mouseend");
      c.velocityX=0;
      c.x=180;
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  if(keyDown("left"))
  {
    c.velocityX=-4;
    c.addAnimation("running",cimg2);
    c.changeAnimation("running");
    m.addAnimation("teasing",mimg2);
    m.changeAnimation("teasing");
  }


}
