const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world;
var box1,ground1,slingshot;

function setup(){

    var canvas = createCanvas(1200,550);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(1080,265,200,20)
    ground2 = new Ground(690,470,260,20)

    ground3= new Ground(600,540,1200,20)

    hexagon=new hexagon(150,225,40,40)

    slingshot = new Slingshot(hexagon.body,{x:150,y:200});

    box1=new Box(1050,235,30,40);
    box2=new Box(1080,235,30,40);
    box3=new Box(1110,235,30,40);
    box4=new Box(1140,235,30,40);
    box5=new Box(1020,235,30,40);

    box6=new Box(1050,195,30,40);
    box7=new Box(1080,195,30,40);
    box8=new Box(1110,195,30,40);

    box9=new Box(1080,155,30,40);

    box10=new Box(600,440,30,40);
    box11=new Box(630,440,30,40);
    box12=new Box(660,440,30,40);
    box13=new Box(690,440,30,40);
    box14=new Box(720,440,30,40);
    box15=new Box(750,440,30,40);
    box16=new Box(780,440,30,40);

    box17=new Box(630,400,30,40);
    box18=new Box(660,400,30,40);
    box19=new Box(690,400,30,40);
    box20=new Box(720,400,30,40);
    box21=new Box(750,400,30,40);

    box22=new Box(660,360,30,40);
    box23=new Box(690,360,30,40);
    box24=new Box(720,360,30,40);

    box25=new Box(690,320,30,40);

}

function draw(){

background(234,60,83);

Engine.update(engine);

ground1.display();
ground2.display();
ground3.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

slingshot.display();
hexagon.display();

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(hexagon.body);
    }
}
