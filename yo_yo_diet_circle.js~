//Karina Ionkina 
//SoftDev2 pd07                                                                                  
//K01 -- They lock us in the tower whenever we get caught                                        
//2018-02-07


var directionx;
var directiony;

var last;
var DVDx;
var DVDy;
var requestID = 0;
var decr;

var rad;
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var star = document.getElementById("start");
var stahp = document.getElementById("halt");
var movie = document.getElementById("movie");


star.addEventListener("click", function(){animate();});
stahp.addEventListener("click", function(){halt();});
movie.addEventListener("click", function(){animate2();});

var setup = function(e){
    decr = 0;
    rad = 5
    ctx.beginPath();
    ctx.arc(300, 300, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}

var animate = function(){
    setup();
    window.requestAnimationFrame(changeSize);

}

var changeSize = function(){
    clear();
    if (decr == 1){
	if (rad == 0){
	    decr = 0;
	    rad++;
	}
	else {
	    rad--;
	}
    }
    else if (decr == 0){
	if (rad > 60){
	    decr = 1;
	    rad--;
	}
	else {
	    rad++;
	}
    }
    console.log(rad);
    ctx.beginPath();
    ctx.arc(300, 300, rad, 0, Math.PI * 2);
    if (decr == 0){
    ctx.fillStyle = 'green';
    }
    else {
	    ctx.fillStyle = 'orange';
    }
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    requestID = window.requestAnimationFrame(changeSize);
    console.log(requestID);
}

var clear = function(){
    ctx.clearRect(0,0, 600,600);
}
    
var halt = function(){
    window.cancelAnimationFrame(requestID);
}


var animate2 = function(){
    clear();
    if (requestID == 0){
	setup2();
    }
    else {
	if (DVDx >= 550 || DVDx <= -50){
	    directionx *= -1;
	}
	if (DVDy >= 575 || DVDy <= -25){
	    directiony *= -1;
	}
    }

    DVDx += 3 * directionx;
    DVDy += 3 * directiony;
    ctx.fillRect(DVDx, DVDy, 100, 50);
    requestID = window.requestAnimationFrame(animate2);
    console.log(requestID);
}
	

var setup2 = function(){
    clear();
    directionx = 1;
    directiony = -1;
    var startx = Math.floor(Math.random() * 600);
    var starty = Math.floor(Math.random() * 600);
    DVDx = startx;
    DVDy = starty;
    ctx.fillStyle = "black";
    ctx.fillRect(startx, starty, 100, 50);
    ctx.stroke;
    
    
}
	 