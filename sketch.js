var s;
var scl = 20;
var food;

function setup() { 
  createCanvas(600, 600);
	s = new snake();
	frameRate(10);
	pickLocation();



} 

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	// console.log(cols,rows);
	food = createVector(floor(random(1,cols-1)), floor(random(1,rows-1)));
	food.mult(scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	}
}

function draw() { 
  background(25);


  	if (s.eat(food)) {
		pickLocation();
	}
	s.death();
	s.update();
	s.show();

	fill(255, 0, 0);
	stroke(255,0,0);
	rect(food.x, food.y, scl, scl);

	// The border
	var bc = random(100,200);
	fill(bc,0,0);
	stroke(color(bc,0,0));
	rect(0,0,scl,600); // left
	rect(width-scl,0,scl,600); // right
	rect(0,0,600,scl); // top
	rect(0,height-scl,600,scl); // bottom
}



