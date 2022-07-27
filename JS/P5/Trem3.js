let w = window.innerWidth;
let h = window.innerHeight;

let nC = 20;

let sCx = w/nC;
let sCy = h/nC;

let sC = Math.max(sCx,sCy);

let t = 2*sC;
let fr = 60;

let prop = 0.5;

function setup() {
  createCanvas(w,h);
  frameRate(fr);
}

function draw() {
  background(0);
  for(c=2*nC;c>0;c+=-1){
    noStroke();
    fill(255);
    if(pow(-1,c)==1){
      fill(0);
    }
    circle(w/2,h/2,sC*c+t);
  }
  fill(255,0,0);
  circle(w/2,h/2,sC/2)
  t += -15;
  if(t<=0){
    t = 2*sC;
  }
}