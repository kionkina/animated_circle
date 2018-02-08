//Karina Ionkina 
//SoftDev2 pd07                                                                                  
//K01 -- They lock us in the tower whenever we get caught                                        
//2018-02-07

var requestID;
var decr;
var rad;
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var star = document.getElementById("start");
var stahp = document.getElementById("halt");


star.addEventListener("click", function(){animate();});
stahp.addEventListener("click", function(){halt();});

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