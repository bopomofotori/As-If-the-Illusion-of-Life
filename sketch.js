//Week1 assignment SELF PORTRAIT by Yuerong Li

let c1,c2;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element


  c1 = color(255,255,255);
  c2 = color(237,178,255);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);

  }
}

function draw() {
  

  //green-ellipse
  noStroke();
  fill(205, 255, 120);
  arc(width/10, width/8, height/4, height/7, QUARTER_PI + QUARTER_PI, QUARTER_PI,OPEN);

  stroke('#fae');
  strokeWeight(10);  
  rect(width/10, height/6, width/6, 60);
  describe('White rect at center with pink outline.');

  //Eye

  fill(0,0,0);
  rect(width/4, height/4, width/6, height/10);
  rect(width/4, height/3, width/8, height/20);
  rect(width/6, height/4, width/5, height/10);
  fill(120, 255, 166);
  rect(width/3, height/40, width/10, height/10);

  fill(0,0,0);
  rect(width/2, height/5, width/7, height/6);
  rect(width/5, height/5, width/7, height/6);
  fill(120, 255, 166);

  
 

  fill(255, 236, 65);
  arc(479, 600, 180, 180, PI, TWO_PI);
  fill(255);
  arc(350, 620, 180, 180, PI, TWO_PI);

  //circle
 push();
 fill(30, 102, 255);
 translate(360, 220);
 noStroke();
 for (let i = 0; i < 150; i ++) {
   ellipse(width/20, height/2, width/10, height/4);
   rotate(PI/32);
 }
 pop();


 ellipse(width/2, 260, 50, 200);
 ellipse(width/3, 260, 80, 40);

  fill(255, 0, 0);
  rect(575,435,300,10);
  rect(575,455,300,4);
  
}

//resizing the window 
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}