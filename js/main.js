var canvas = document.getElementById("chess");
var context = canvas.getContext("2d");
var v1_me = true;
var ifOver = false;
var chessBoard = [];
// var count = 0;
function startGame() {
	// body...
	for(var i = 0; i < 15; i++){
		chessBoard[i] = [];
		for (var j = 0; j<15; j++){
			chessBoard[i][j] = 0;
		}
	}

	cleanChess();

	drawChess();

	v1_me = true;

	isOver = false;

	for(var i = 0; i<count;i++){
		v1Win[i]=0;
		v2Win[i]=0;
	}

	oneStep(7,7,false);
	chessBoard[7][7] = 2;
}


function drawChess(){

	 for (var i = 0; i < 15; i++) {
		context.strokeStyle = "#BFBFBF";
		context.beginPath();
		context.moveTo(15 + i *30, 15);
		context.lineTo(15 + i*30, canvas.height - 15);
		context.closePath();
		context.stroke();
		context.beginPath();
		context.moveTo(15, 15 + i*30);
		context.lineTo(canvas.width - 15, 15 + i * 30);
        context.closePath();
		context.stroke();
	}

	
}

function cleanChess(){
	context.fillStyle = '#fff';
	context.fillRect(0,0, canvas.width, canvas.height);
}

/*
@param x chess x postion
@param y chess y postion
@param v_me color of my chess
*/
function oneStep(x,y,v_me){
	context.beginPath();
	// draw circle
	context.arc(15 + x*30, 15+y*30, 13,0,2*Math.PI);
	context.closePath();
	var gradient = context.createRadialGradient(15 + x*30+2, 15 + y *30 -2, 13, 15+x*30+2, 15+y*30-2,0);
	if (v_me){
		gradient.addColorStop(0,'#d1d1d1');
		gradient.addColorStop(1,'#f9f9f9');
	}else{
		gradient.addColorStop(0,'#0a0a0a');
		gradient.addColorStop(1,'#636766');
	}
	context.fillStyle = gradient;
	context.fill();

}







/*
canvas mouse click event
@param e
*/

canvas.onclick = function(e){
	if(isOver){
		return;
	}
	var x = e.offsetX;
	var y = e.offsetY;
	var i = Math.floor(x/30);
	var j = Math.floor(y/30);

	// check if on the same postion, any chess exist
	if(chessBoard[i][j] == 0){
		oneStep(i,j,v1_me);
		chessBoard[i][j] = 1;

		for (var i = 0; i< count; i++){
			if (wins[i][j][k]) {
				myWin[k] ++;

				cWin[k] = 6
				if(myWin[k] == 5){
					window.alert("You Win!");
					isOver = true;
				}
			}
		}

		if(!isOver){
			v1_me = !v1_me;
			gobang();
		}
	}
}



















startGame();