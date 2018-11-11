class Snake {
    // current location of the snake and their variables //
    constructor() {
        this.len = 1; 
        this.body = [];
        this.body[0] = createVector(0,0);
        this.xdir = 0;
        this.ydir = 0;
    }
    // From Key Event into storing another variable //
    setDir(x,y) {
        this.xdir = x;
        this.ydir = y;
    }
    // Loop for the Movement of the Snake //
    update() {
        let head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);


        //this.body[0].x += this.xdir; // We could write this as 'this.body[0].x = this.body[0].x + this.xdir;' (basic increment) //
        //this.body[0].y += this.ydir; // Same goes for this guy //

    }
    // How the snake will look like //
    show() {
        for (let i = 0; i < this.body.length; i++) {
        noStroke();
        fill(50);
        rect(this.body[0].x, this.body[0].y, 1, 1);
        }
    }

    grow() {
        let head = this.body[this.body.length-1].copy();
        this.len++;
        this.body.push(head);
    }

    eat(pos) {
        let x = this.body[this.body.length-1].x;
        let y = this.body[this.body.length-1].y;
        if(x == pos.x && y == pos.y) {
            print("Food Eaten!");
            this.grow();
            return true;
        }
        return false;
    }

}