//Create variables here
var dogHappyImage,sittingImage;
var foddS,fodStock,lastFed,fedTime;
var getFoodStock,updateFoodStock,deductFood,foodObj;
function preload()
{
dogHappyImage=loadImage("images/dogImg.png");
sittingImage=loadImage("images/dogImg1.png");
milkImg=loadImage("images/milk.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogHappyImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value,readStock");
  testSize(20);
  feed=createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}
function draw() {  
  background(46,139,87);
 if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
 }
 drawSprites();
 fill(255,255,254);
stroke("black");
text("Food remaining : "+foodS,170,200);
textSize(13);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

 textSize(15);
 if(lastFed>=12){
   text("Last Feed : "+lastFed%12 + "PM",350,30);
 }else if(lastFed==0){
   text("Last Feed : 12 AM",350,30);
 }else{
   text("Last Feed  : "+ lastFed + "AM" , 350,30);
 }
   
 
  drawSprites();
  //add styles here




function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
  Food:x
  })
}
function readStock(data){
    foodS=data.val();
  }

function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodStock(FoodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:FoodObj.getFoodStock(),
    FeedTime:hour(
    )}
    )
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
 function display(){
var x=80,y=100;
imageMode(CENTER);
image(this.image,720,220,70,70);
if(this.foodStock!=0){
for(var i=0;i<this.foodStock;i++){
  if(i%10==0){
    x=80;
    y=y+50;
  }
  image(this.image,x,y,50,50);
  x=x+30;
}
}
 }
