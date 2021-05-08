const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world

var gameState = "onSling";


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,580,1200,20);
    stand = new Ground(875,420,200,20);

    //level 1
    block1 = new Box(795,400,40,40)
    block2 = new Box(835,400,40,40)
    block3 = new Box(875,400,40,40)
    block4 = new Box(915,400,40,40)
    block5 = new Box(955,400,40,40);
    
    //level 2

    block6 = new Box(815,350,40,40);
    block7 = new Box(855,350,40,40);
    block8 = new Box(895,350,40,40);
    block9 = new Box(935,350,40,40);

    //level 3

    block10 = new Box(835,300,40,40);
    block11 = new Box(875,300,40,40);   
    block12 = new Box(915,300,40,40);

    //level 4

    block13 = new Box(855,260,40,40);
    block14 = new Box(895,260,40,40);

    //level 5

    block15 = new Box(875,220,40,40);

    polygon = Bodies.circle(200,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(polygon,{x:200,y:200});

}
function draw(){
    Engine.update(engine);

    background("black");

    ground.display();
    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();     
    block7.display();  
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    slingShot.display();
    ellipse(polygon.position.x, polygon.position.y, 40, 40);

    keyPressed();

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        slingShot.attach(this.polygon);
    }
}

function keyPressed(){
    if(keyCode === 32){
     slingShot.attach(polygon);

    }
}