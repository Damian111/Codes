// state variables
// array with the color to draw 
var board = [[0, 0, 0],
             [0, 0, 0],
	     [0, 0, 0]];

// keeps the last color used
var lastColor = 1;

var buttonWidth = 200;
var buttonHeight = 80;
var speeds= 20;

var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;

var box1X = 100;
var box1Y = 100;
var box1S = 100;

var box2X = 100;
var box2Y = 210;
var box2S = 100;

var box3X = 100;
var box3Y = 320;
var box3S = 100;

var box4X = 210;
var box4Y = 100;
var box4S = 100;

var box5X = 210;
var box5Y = 210;
var box5S = 100;

var box6X = 210;
var box6Y = 320;
var box6S = 100;

var box7X = 320;
var box7Y = 100;
var box7S = 100;

var box8X = 320;
var box8Y = 210;
var box8S = 100;

var box9X = 320;
var box9Y = 320;
var box9S = 100;



function MyFirstGame(){ 
}

function RenderMyGame(gameCtx)
{
    gameCtx.fillStyle = "darkblue";
    gameCtx.fillRect(0,0, 640, 480);
    gameCtx.fillStyle = "yellow";
    gameCtx.fillRect(10,30, 75, 40);
    gameCtx.fillStyle = "orange";
    gameCtx.fillText("Back", 9, 60);

    gameCtx.fillStyle = "yellow";
    gameCtx.fillRect(210,30, 75, 40);
    gameCtx.fillStyle = "orange";
    gameCtx.fillText("Reset", 209, 60);
    
    //gameCtx.fillStyle = state[0][0];
    //gameCtx.fillRect (box1X, box1Y, box1S, box1S);
    drawField(gameCtx, 0, 0, box1X, box1Y, box1S);
    
    //gameCtx.fillStyle = state[1][0];
    //gameCtx.fillRect (box2X, box2Y, box2S, box2S);
    drawField(gameCtx, 1, 0, box2X, box2Y, box2S);
    
    //gameCtx.fillStyle = state[2][0];
    //gameCtx.fillRect (box3X, box3Y, box3S, box3S);
    drawField(gameCtx, 2, 0, box3X, box3Y, box3S);
    
    //gameCtx.fillStyle = state[0][1];
    //gameCtx.fillRect (box4X, box4Y, box4S, box4S);
    drawField(gameCtx, 0, 1, box4X, box4Y, box4S);

    //gameCtx.fillStyle = state[1][1];
    //gameCtx.fillRect (box5X, box5Y, box5S, box5S);
    drawField(gameCtx, 1, 1, box5X, box5Y, box5S);

    //gameCtx.fillStyle = state[2][1];
    //gameCtx.fillRect (box6X, box6Y, box6S, box6S);
    drawField(gameCtx, 2, 1, box6X, box6Y, box6S);

    //gameCtx.fillStyle = state[0][2];
    //gameCtx.fillRect (box7X, box7Y, box7S, box7S);
    drawField(gameCtx, 0, 2, box7X, box7Y, box7S);
    
    //gameCtx.fillStyle = state[1][2];
    //gameCtx.fillRect (box8X, box8Y, box8S, box8S);
    drawField(gameCtx, 1, 2, box8X, box8Y, box8S);
    
    //gameCtx.fillStyle = state[2][2];
    //gameCtx.fillRect (box9X, box9Y, box9S, box9S);
    drawField(gameCtx, 2, 2, box9X, box9Y, box9S);
}

function drawField(gameCtx, stateX, stateY, xVal, yVal, width)
{
    //draw squares
    if(board[stateX][stateY] == 0)
    {
	gameCtx.fillStyle = "white";
    } else if(board[stateX][stateY] == 1)
    {
	gameCtx.fillStyle = "red";
    } else if(board[stateX][stateY] == 2)
    {
	gameCtx.fillStyle = "green";
    }
    gameCtx.fillRect (xVal, yVal, width, width);
}

$(document).ready(function(){
    
    document.body.onmousedown = function() { return false; }; //so page is unselectable

    //Canvas stuff
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var w = $("#canvas").width();
    var h = $("#canvas").height();
    var mx, my;

    var sx = 10;

    var b1x = 10;
    var b1y = 50;

    var b2x = 220;
    var b2y = 50;

    var b3x = 430;
    var b3y = 50;

    var gameRunning = 0;
    
    
    /////////////////////////////////
    ////////////////////////////////
    ////////	GAME INIT
    ///////	Runs this code right away, as soon as the page loads.
    //////	Use this code to get everything in order before your game starts 
    //////////////////////////////
    /////////////////////////////
    function init()
    {
	//////////
	///STATE VARIABLES

	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") 
	{
	    clearInterval(game_loop);
	}	
	game_loop = setInterval(paint, 600);
    }

    init();	
    
    // MyFirstGame();
    
    ///////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ////////	Main Game Engine
    ////////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    function paint()
    {
	if(gameRunning == 1)
	{
	    RenderMyGame(ctx);
	}else{
	    RenderMain();
	}
    }
    /////////////////////////////////////////////////////////////////////////////
    // END PAINT
    // GAME ENGINE
    
    function RenderMain()
    {
	ctx.fillStyle = 'red';
	ctx.fillRect(0,0,640,480);
	
	/// Draw Button 1
	// set fillcolor of button1
	if(mx > 15 && mx < 615 && my > 15 && my < 445){
	    ctx.fillStyle='orange';
	}else {
	    ctx.fillStyle='darkred';
	}
	ctx.fillRect(b1x, b1y, buttonWidth, buttonHeight);
	ctx.fillStyle='green';
	ctx.font="35px Georgia";
	ctx.fillText("Play", b1x + 65, b1y + 55);
	
	/// Draw Button 2
	if(mx > 10 && mx < 625 && my > 10 && my < 455){
	    ctx.fillStyle='orange';
	}else {
	    ctx.fillStyle='darkred';
	}
	ctx.fillRect(b2x, b2y, buttonWidth, buttonHeight);
	ctx.fillStyle='purple';
	ctx.font="35px Georgia";
	ctx.fillText("Instructions", b2x + 5, b2y + 55);
	
	/// Draw Button 3
	if(mx > 5 && mx < 635 && my > 5 && my < 465){
	    ctx.fillStyle='orange';
	}else {
	    ctx.fillStyle='darkred';
	}
  	ctx.fillRect(b3x, b3y, buttonWidth, buttonHeight);
	ctx.fillStyle='gold';
	ctx.font="35px Georgia";
	ctx.fillText("ADD ON", b3x + 30, b3y + 55);
	
	ctx.fillStyle = 'blue';
	ctx.fillText("World of Battle Tanks.", 10, 30);2
	
	speeds += sx;

	if(speeds + 100 > w){		
	    sx = -10;
	}
	if(speeds + 100 < 0){
	    sx = 10;
	}
    }
    
    
    ////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    /////	MOUSE LISTENER 
    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    





    /////////////////
    // Mouse Click
    ///////////////
    canvas.addEventListener('click', 
			    function (evt){
				if(gameRunning ==1){
				    gameEvents(evt);
				}else{
				    mainEvents(evt);
				}
			    }
			    , false);

    function mainEvents(evt)
    {
	// check button1
	if(mx > b1x && mx < b1x + buttonWidth && my > b1y && my < b1y + buttonHeight){
	    //alert("Play!");
	    //InitMyGame();
	    gameRunning = 1;
	    screen = 5;
	}
	// check button 2
	if(mx > b2x && mx < b2x + buttonWidth && my > b2y && my < b2y + buttonHeight){
	    alert("Instructions");
	    screen = 5;
	}
	// check button 3
	if(mx > b3x && mx < b3x + buttonWidth && my > b3y && my < b3y + buttonHeight){
	    alert("Go play Worl of Tanks at http://worldoftanks.com/ ");
	    screen = 5;
	}
    }
    
    function gameEvents(evt)
    {
	// event for back button
	if(mx > 10 && mx < 40 + 40 && my > 30 && my < 20 + 75){
	    gameRunning = 0;
	}
	
	// event for reset button
	if(mx > 210 && mx < 240 + 40 && my > 30 && my < 20 + 75){
	    //gameRunning = 1;
	    board = [[0, 0, 0],
		     [0, 0, 0],
		     [0, 0, 0]];

	}
	
	onFieldMouseClick(box1X, box1Y, box1S, 0,0);
	
	onFieldMouseClick(box2X, box2Y, box2S, 1,0);

	onFieldMouseClick(box3X, box3Y, box3S, 2,0);

	onFieldMouseClick(box4X, box4Y, box4S, 0,1);

	onFieldMouseClick(box5X, box5Y, box5S, 1,1);

	onFieldMouseClick(box6X, box6Y, box6S, 2,1);

	onFieldMouseClick(box7X, box7Y, box7S, 0,2);
	
	onFieldMouseClick(box8X, box8Y, box8S, 1,2);

	onFieldMouseClick(box9X, box9Y, box9S, 2,2);
	CheckForWin();
    }

    function onFieldMouseClick(boxXPos, boxYPos, boxWidth, stateX, stateY)
    {
	if(mx > boxXPos && mx < boxXPos + boxWidth && my > boxYPos && my < boxYPos + boxWidth){
	    if(board[stateX][stateY] == 0)
	    {
		board[stateX][stateY] = lastColor;
		changeColor();
	    }
	    else
	    {
		alert("Illegal Move");
	    }
	}
    }
    
    function changeColor()
    {
	if(lastColor == 1)
	{
	    lastColor = 2;
	}
	else
	{
	    lastColor = 1;
	}		
    }
	
	function CheckForWin()
	{
		var winner = getWinner(1);
		if(winner == 0)
		{
			winner = getWinner(2);
		}
			
		if(winner == 1 || winner == 2)
		{
			alert("Player " + winner + " wins the game");
		}
	}
	
	function getWinner(player)
	{
		var winner = 0;
		if( board[0][0] == player &&  board[0][1] == player &&  board[0][2] == player ){
			winner = player;
		}
		
		if( board[1][0] == player &&  board[1][1] == player &&  board[1][2] == player ){
			winner = player;
		}
		
		if( board[2][0] == player &&  board[2][1] == player &&  board[2][2] == player ){
			winner = player;
		}
		
		if( board[0][0] == player &&  board[1][0] == player &&  board[2][0] == player ){
			winner = player;
		}
		
		if( board[0][1] == player &&  board[1][1] == player &&  board[2][1] == player ){
			winner = player;
		}
		
		if( board[0][2] == player &&  board[1][2] == player &&  board[2][2] == player ){
			winner = player
		}
		
		if( board[0][0] == player &&  board[1][1] == player &&  board[2][2] == player ){
			winner = player
		}
		
		if( board[2][0] == player &&  board[1][1] == player &&  board[0][2] == player ){
			winner = player
		}
		return winner;
	}
    canvas.addEventListener ('mouseout', function(){pause = true;}, false);
    canvas.addEventListener ('mouseover', function(){pause = false;}, false);

    canvas.addEventListener('mousemove', 
			    function(evt) {
				var mousePos = getMousePos(canvas, evt);

				mx = mousePos.x;
				my = mousePos.y;
      			    }
			    , false);


    function getMousePos(canvas, evt) 
    {
	var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    

    ///////////////////////////////////
    //////////////////////////////////
    ////////	KEY BOARD INPUT
    ////////////////////////////////


    

    window.addEventListener('keydown', function(evt){
	var key = evt.keyCode;
	
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	
    }, false);

}

		 );
