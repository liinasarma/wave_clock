let clock;
let clock2;
let clock3;
let clock4;

let x1;
let y1;

let angle1 = 0;
let angle2 = 0;

let strokeCol1 = 254;
let strokeChange = -1;

function setup(){
createCanvas(800,600);
background(210);


}

function draw(){
x1 = width/2;
y1 = height/2;

clock = new Clocks(100, 100,50, strokeCol1,50,strokeCol1);
clock2 = new Clocks(300, 100,random(10,60),100,250,strokeCol1);
clock3 = new Clocks(500, 100,50, strokeCol1,50,strokeCol1);
clock4 = new Clocks(100, 300,random(10,60),100,250,strokeCol1);

clock.display();
clock2.display();
clock3.display();
clock4.display();

}

class Clocks {

constructor(x,y, scalar, col1, col2, col3){
this.x = x;
this.y = y;
this.scalar = scalar;
this.col1 = col1;
this.col2 = col2;
this.col3 = col3;

}

display(){

let x2 = this.x+this.scalar*sin(angle1*);
let y2 = this.y+this.scalar*cos(angle1);

this.col1+=strokeChange;

if(this.col1>254){
strokeChange = -1;
}
if(this.col1<0){
strokeChange = 1;
}

strokeWeight(1);
stroke(this.col1,this.col2, this.col3,this.col1);

line(this.x, this.y, x2, y2);


angle1++;
angle2++;




}



}
