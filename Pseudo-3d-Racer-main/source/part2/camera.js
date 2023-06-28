class Camera {
	constructor(scene) {
	  this.scene = scene;
	  this.x = 0;
	  this.y = 1000;
	  this.z = 0;
	  this.distToPlayer = 500;
	  this.distToPlane = null;
	}
  
	init() {
	  // Use an immediately invoked function expression (IIFE) to access 'this' in the inner function
	  (() => {
		this.distToPlane = 1 / (this.y / this.distToPlayer);
	  })();
	}
  
	update() {
	  // Access 'player' and 'circuit' directly without using 'var' keyword
	  const { player, circuit } = this.scene;
  
	  this.x = player.x * circuit.roadWidth;
	  this.z = player.z - this.distToPlayer;
  
	  // Use a conditional (ternary) operator to ensure the camera Z doesn't go negative
	  this.z = this.z < 0 ? this.z + circuit.roadLength : this.z;
	}
  }
  