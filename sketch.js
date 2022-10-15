var dojo
var kid, kidobj;
var equations
var belts, beltsobj;
var checkMark;

function preload() {
    dojoback = loadImage("dojo2.png")
    kid = loadImage("karateKid.png")
    belts = loadImage("belts.png")
    checkMark = loadImage("check.png")




}

function setup() {
    createCanvas(windowWidth, windowHeight)
  
    // database = firebase.database();

    kidobj = createSprite(windowWidth/2,windowHeight/2+170,10,10)
    kidobj.addImage(kid)
    kidobj.scale = 0.75

    beltsobj = createSprite(windowWidth/2+windowWidth/3, windowHeight/2-windowHeight/9, 10,10)
    beltsobj.addImage(belts)
    beltsobj.scale = 0.5

    equations = new AnswerBox()




}



function draw() {

    background(dojoback)

    equations.display();


    drawSprites();
}
