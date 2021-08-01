
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,iron,hammer,plane,rubber;
var sand1,sand2,sand3,sand4;





function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane=new Plane(600,height,1200,20)
	stone=new Stone(700,320,100,100)
    rubber=new Rubber(900,450,70)
	sand1= new Sand(505,450,10)
	sand2= new Sand(510,450,10)
	sand3= new Sand(515,450,10)
	sand4= new Sand(520,450,10)
	iron= new Iron(300,350,80,50)
	hammer=new Hammer(10,100,150,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine)

  stone.display()
  sand1.display()
  hammer.display()
  sand2.display()
  sand3.display()
  sand4.display()
  iron.display()
  rubber.display()
  plane.display()
  

 
}



