

// Local Variables //
let snake;
let rez = 10;
let food;
let w;
let h;


// Graphics //
function setup() {
	createCanvas(800, 500);
	w = floor(width / rez);
	h = floor(height / rez);
	snake = new Snake();
}

// The location where the food is located //
function foodLocation() {
	let x = floor(random(w));
	let y = floor(random(h));
	food = createVector( x, y)
}

// Key Event //
function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		snake.setDir(-1,0);
	}

	else if (keyCode === RIGHT_ARROW) {
		snake.setDir(1,0);
	}

	else if (keyCode === UP_ARROW) {
		snake.setDir(0,-1);
	}

	else if (keyCode === DOWN_ARROW) {
		snake.setDir(0,1);
	}

}

// Output or the Draw //
function draw() {
	scale(rez);
	background(220);
	snake.update();
	snake.show();

	fill(255, 50, 100)
	rect(food.x, food.y, 1, 1)
}

