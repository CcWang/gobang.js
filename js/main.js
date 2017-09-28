var canvas = document.getElementById("chess");
var context = canvas.getContext("2d");
var v1_me = true;
var ifOver = false;
var chessBoard = [];

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

	for(var i =0; i<15; i++){
		context.strokeStyle = '#BFBFBF';
		context.beginPath();
		context.moveTo(15 + i*30,15);
		context.lineTo(15 + i*30, canvas.height - 15);
		context.closePath();
		context.stroke();

		context.beginPath();
		context.moveTo(15 + i*30,15);
		context.lineTo(canvas.width-15,15+i*30);
		context.closePath();
		context.stroke();
	}
}

function ckeanChess(){
	context.fillStyle = '#fff';
	context.fillRect(0,0, canvas.width, canvas.height);
}

startGame();