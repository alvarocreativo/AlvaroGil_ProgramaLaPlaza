//var ii=0;
var i=0;
var temps=0;
var inc=0.2;
var tll=10;
function setup(){
	createCanvas(192,157);
	background(255);
}

function draw(){
	background(255);
	noStroke();

	//rotate(radians(i));
	//rotate(radians(ii));
	//translate(width/2,height/2);
	temps=temps+inc;
	if(tll>20){
		tll=10;
	}
	if(temps>=80){
		temps=0;
	}

	if(temps>5){
		push();
		translate(width/2,height/2);
		rotate(radians(180));
		fill(255,105,180);
		rect(-5,20,10,30);
		pop();
	}if(temps>10){
		push();
		translate(width/2,height/2);
		rotate(radians(225));
		fill(255,0,0);
		rect(-5,20,10,30);
		pop();
	}if(temps>15){
		push();
		translate(width/2,height/2);
		rotate(radians(270));
		fill(255,142,0);
		rect(-5,20,10,30);
		pop();
	}if(temps>20){
		push();
		translate(width/2,height/2);
		rotate(radians(315));
		fill(255,255,0);
		rect(-5,20,10,30);
		pop();
	}if(temps>25){
		push();
		translate(width/2,height/2);
		rotate(radians(360));
		fill(0,142,0);
		rect(-5,20,10,30);
		pop();
	}if(temps>30){
		push();
		translate(width/2,height/2);
		rotate(radians(405));
		fill(0,192,192);
		rect(-5,20,10,30);
		pop();
	}if(temps>35){
		push();
		translate(width/2,height/2);
		rotate(radians(450));
		fill(64,0,152);
		rect(-5,20,10,30);
		pop();
	}if(temps>40){
		push();
		translate(width/2,height/2);
		rotate(radians(495));
		fill(142,0,142);
		rect(-5,20,10,30);
		pop();
	}if(temps>45){
		push();
		background(0,0,0);
		fill(255,255,255);
		tll=tll+0.2;
		textSize(tll);
		textAlign(CENTER);
		text('CARGANDO',width/2,height/2);
		pop();
	}
	console.log(temps);
}

/*
		fill(142,0,142);
		rect(85,30,10,30);
		fill(0,0,0);
		textSize(20);
		textAlign(CENTER);
		text('CARGANDO',width/2,height/2);
		}*/
	

	

