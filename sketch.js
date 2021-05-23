const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber, stone, iron ;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(500, 300, 30, 30) ;
    stone = new Stone(600, 300, 30, 20) ;
    iron = new Iron(400, 400, 30, 30) ;

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    //stone.shapeColor = "black" ;

    iron.display () ;
    plane.display();
    hammer.display();
    stone.display() ;
    rubber.display () ;

    
 
}