class Stone{

    constructor(x,y,width,height){

       var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
       }
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       this.image=loadImage("images/stone.png");
       this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
       World.add(world,this.body);

    }

    display(){

        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(78);
        image(this.image,0,0,this.width,this.height);
        pop()

    }
}