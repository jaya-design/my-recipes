class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
            // Pos.x = mouseX
            // Pos.y = mouseY
			strokeWeight(4);
			fill(paper.png);
			rect(0,0,this.w, this.h);
			pop()
			
	}

}