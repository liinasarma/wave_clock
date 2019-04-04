let clock;
let clock2;

let x1;
let y1;
let angle1 = 0;
let angle2 = 0;
let strokeCol = 254;
let strokeChange = -1;

function setup(){
createCanvas(800,600);
background(210, 140, 150);


}

function draw(){
x1 = width/2;
y1 = height/2;

clock = new Clocks(x1, y1);
clock2 = new Clocks(300,200);
clock.display();
clock2.display();


}

class Clocks {

constructor(x,y){
this.x = x;
this.y = y;

}

display(){



let scalar = random(0,70);

let x2 = width/2+scalar*sin(angle1);
let y2 = height/2+scalar*cos(angle2);

strokeCol+=strokeChange;
if(strokeCol>254){
strokeChange = -1;
}
if(strokeCol<0){
strokeChange = 1;
}
strokeWeight(1);
stroke(strokeCol,50, strokeCol);

line(this.x, this.y, x2, y2);


angle1++;
angle2++;




}



}
