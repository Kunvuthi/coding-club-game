class Snake {
    // current location of the snake and their variables //
    constructor() {
        this.body = [];
        this.body[0] = createVector(0,0);
        this.xdir = 0;
        this.ydir = 0;
    }
    // From Key Event into storing another variable //
    setDir(x,y) {
        this.xdir = x;
        this.ydir = y
    }
    // Loop for the Movement of the Snake //
    update() {

        this.body[0].x += this.xdir; // We could write this as 'this.body[0].x = this.body[0].x + this.xdir;' (basic increment) //
        this.body[0].y += this.ydir; // Same goes for this guy //

    }
    // How the snake will look like //
    show() {
        fill(50);
        rect(this.body[0].x, this.body[0].y, 1, 1);

    }

}