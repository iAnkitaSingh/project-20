var canvas,bg;
var together;
var mouse,mouseImg1,mouseImg2;
var cat,catImg1,catImg2;

function preload() {
    //load the images here
    bg=loadImage("garden.png");
    mouseImg1=loadAnimation("jerryOne.png");
    mouseImg2=loadAnimation("jerryTwo.png","jerryThree.png");
    mouseImg3=loadAnimation("jerryFour.png");
    catImg1=loadAnimation("tomOne.png");
    catImg2=loadAnimation("tomTwo.png","tomThree.png");
    catImg3=loadAnimation("tomFour.png");
}

function setup(){
   canvas =  createCanvas(1000,800);
    //create tom and jerry sprites here

mouse=createSprite(870,600);
mouse.addAnimation("mouseSleeping",mouseImg1);
mouse.scale = 0.2;

cat=createSprite(200,600);
cat.addAnimation("catStanding",catImg1);
cat.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(mouse.x - cat.x < (mouse.width - cat.width)/2)
    {
mouse.velocityX=0;
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.x =300;
        mouse.scale=0.2;
        mouse.changeAnimation("mouseLastImage");
        cat.addAnimation("catLastImage", catImg3);
        cat.scale=0.15;
        cat.changeAnimation("catLastImage");

    }

    drawSprites();
}


function keyPressed(){
if (keyCode === LEFT_ARROW){
      //For moving and changing animation write code here
  mouse.velocityX=-5;
  mouse.addAnimation("mouseRunning",mouseImg2);
  mouse.changeAnimation("mouseRunning");
  
  
  cat.addAnimation("catTeasing",catImg2);
  cat.frameDelay = 25;
  cat.changeAnimation("catTeasing");

}

}