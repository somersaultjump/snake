function snake() {
	this.x = width/2;
	this.y = height/2;
	this.xspeed = 0;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	
	this.update = function() {
		if (this.total === this.tail.length) {
			for (var i = 0; i < this.tail.length-1; i++) {
				this.tail[i] = this.tail[i+1];
			}
		} 

		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);
	}

	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) {
			this.total++;
			return true;
		} else {
			return false;
		}
	}
	
	this.show = function() {
		stroke(60,122,60);
		fill(20,122,20);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}

		fill(20,122,20);
		rect(this.x, this.y, scl, scl);
	}
	
	this.dir = function(x,y) {
		// this.xspeed = x;
		// this.yspeed = y;

		if (this.xspeed === -1 && x === 1) {

		} else if (this.xspeed === 1 && x === -1) {

		} else if (this.yspeed === -1 && y === 1) {
			
		} else if (this.yspeed === 1 && y === -1) {

		} else {
			this.xspeed = x;
			this.yspeed = y;
		}

	}

	this.death = function() {
		for (var i =0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if (d < 1) {
				setup();
			}
		}

		if (this.x < scl || this.x > width-scl) {
			setup();
		}

		if (this.y < scl || this.y > height-scl) {
			setup();
		}
	}
}



