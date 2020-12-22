const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,60,60);
    box2 = new Box(900,300,60,60);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(800,300,50,50)
    log1 = new Log(795,100,260,PI/2)
    box3= new Box(700,50 ,60,60);
    box4 = new Box(900,50,60,60);
    pig2= new Pig(800,30,50,50)
    log2 = new Log(795,20,260,PI/2)
    box5 = new Box(800,10,60,60);
    log3 = new Log(795,5,110,PI/7)
    log4 = new Log(815,5,110,-PI/7)
    bird1 = new Bird(200,200)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();


}