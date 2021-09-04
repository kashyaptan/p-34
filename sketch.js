var dog, happyDog, database, foodS, foodStock;
function preload() {
  image1 = loadImage('images/dogImg.png')
  image2 = loadImage('images/dogImg1.png')
}

function setup() {
database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on('value', readStock)

  createCanvas(500, 500);
  dog1 = createSprite(250, 250, 10, 10)
  dog1.addImage(image1)
  dog1.scale = 0.5

}


function draw() {
background('GREEN')

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog1.addImage(image2)
  }


  drawSprites();
  fill('WHITE')
  text('Click the UP_ARROW to feed the dog', 100,100)
  

}


function readStock(data) {
  foodS = data.val()
}

function writeStock(x) {

  if (x <= 0) {
    x = 0
  }
  else {
    x = x - 1
  }

  database.ref('/').update({
    Food: x
  })
}
