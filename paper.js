class paper{ 

    constructor(x,y){ 
        this.x=x;
		this.y=y;
		this.paperWidth=200;
		this.paperHeight=213;
		this.wallThickness=20; 

        this.rightWallBody=Bodies.rectangle(this.x+this.paperWidth/2, this.y-this.paperHeight/2, this.wallThickness, this.paperHeight, {isStatic:true})
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
	
		this.image=loadImage("sprite/paper.png"); 

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody); 

		var options={ 
			 isStatic:false, 
			 restitution:0.3, 
			 friction:0.5, 
			 density:1.2, 
		}
    } 
    display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			rect(0,0,this.paperThickness, this.paperHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.paperThickness, this.paperHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.paperWidth, this.paperThickness);
			pop()
			
			
		var options={ 
			isStatic:false, 
			restitution:0.3, 
			friction:0.5, 
			density:1.2, 
	   }
}


} 