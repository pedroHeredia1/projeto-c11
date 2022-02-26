var menino
var correndo
var pista
var imagempista
var limite1
var limite2




function preload(){
  //imagens pré-carregadas
correndo = loadAnimation("runner-1.png","runner-2.png");
imagempista = loadImage("path.png")


}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
pista = createSprite(200,200)
pista.addImage("pista",imagempista)

  menino = createSprite(200,350 )
menino.addAnimation("correndo",correndo)
menino.scale = 0.09

limite1 = createSprite(1,200,5,400)
limite2 = createSprite(399,200,5,400)

limite1.visible=false
limite2.visible=false







}

function draw() {
 background(0);
 pista.velocityY = 5
 if (pista.y > 400) {
   pista.y = 0
 }
 
 menino.x = mouseX
 
 menino.collide(limite1)
 
 menino.collide(limite2)
 
 
 
 
 
 
 
 
 
 
 
 drawSprites()

}
