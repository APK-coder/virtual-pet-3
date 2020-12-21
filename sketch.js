//Create variables here
var dogHappy,sittingImage;
function preload()
{
dogHappyImage=loadImage("dogImg.png");
sittingImage=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);
  }

function readStock(data){
  foods-data.val(); 
}
function wtiteStock(x){
  if(x<=0){
    x=0;
  }else{
      x=x-1;
    }
  }
  databadse.ref('/').update({
    food:x
  })
}
function draw() {  

  drawSprites();
  //add styles here

}



