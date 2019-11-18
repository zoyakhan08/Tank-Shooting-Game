const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var base1, base2, canon1, barrel1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    base1 = new base(200,350,150,60);
    base2 = new base(200,300,150,60);
    canon1 = new canon(200,350,50);
    barrel1 = new barrell(200,200,150,PI/4)
}

function draw(){
    background(0);
    Engine.update(engine);
    base1.display();
    base2.display();
    canon1.display();
    barrel1.display();
}