//Karina Ionkina 
//SoftDev2 pd07                                                                                  
//K01 -- They lock us in the tower whenever we get caught                                        
//2018-02-07

var DVDx;
var DVDy;
var requestID;
var decr;
var decr2;
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
    setup2();
    if (0 < DVDx < 600 && 0 < DVDy < 600 && DVDx < 550 && DVDy < 575){ //checks to see if the rectagle touches the borders
	if (decr2 == 0){
	    DVDx+=.1;
	    DVDy-=.1;
	}
	else {
	    DVDx-=.1;
	    DVDy+=.1;
	}
    }
    else {
	if (decr == 0){
	    decr = 1;
	    DVDx+=.1;
	    DVDy+=.1;
	    
	}
	else {
	    decr = 0;
	    DVDx-=.1;
	    DVDy-=1;
	}
    
    }

    setTimeout( function(){
    clear();
    console.log("DVDx and y:   ");
    console.log(DVDx);
    console.log(DVDy);
    ctx.fillRect(DVDx, DVDy, 100, 50);
    requestID = window.requestAnimationFrame(animate2);
    console.log(requestID);
	} , 3000 );
}
	

var setup2 = function(){
    clear();
    decr2 = 0;
    var startx = Math.floor(Math.random() * 600);
    var starty = Math.floor(Math.random() * 600);
    DVDx = startx;
    DVDy = starty;
    ctx.fillStyle = "black";
    ctx.fillRect(startx, starty, 100, 50);
    ctx.stroke;

}
	 