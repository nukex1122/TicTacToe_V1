$(document).ready(main());

var chance=0;

var board = new Array(3);

var win = 0;
for (var i = 0; i < 3; i++) {
  board[i] = new Array(3);
}

for (var i = 0; i < 3; i++) {
	for (var j = 0; j< 3; j++) {
		board[i][j] = null;
 	}
}

function main(){

	$(".square").click(function(){
		if($(this).find(".A").hasClass("picked") === false) {

			$(this).find(".A").removeClass((chance%2)?"X1":"O1");
			$(this).find(".A").addClass((chance%2)?"X":"O");
			$(this).css("background-color",(chance%2)?"#dc685a":"#ecaf4f");
			$(this).find(".A").addClass("picked");
			addToArray($(this).attr('class'),chance%2);
			checkWin();
			chance++;
		}
	});

	$(".square").hover(function(){
		if($(this).find(".A").hasClass("picked") === false) {
				$(this).find(".A").addClass((chance%2)?"X1":"O1");
		}
	},function(){
		if($(this).find(".A").hasClass("picked") === false ){
           		$(this).find(".A").removeClass((chance%2)?"X1":"O1");
		}
	});
}

function dispArray(){
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			console.log(board[i][j] + " ");
	 	}
	 	console.log("\n");
	}
}

function addToArray(a,num){
	var r = a.charAt(7);
	var c = a.charAt(8);
	num = (num===0)?1:-1;
	board[r][c] = num;
	console.log(r + " " + c);

}

function checkWin(){
	    for(var i = 0; i<3;i++){
        var rowSum = 0;
        for(var j = 0; j<3;j++){
            rowSum += board[i][j];
        }
        if(rowSum === 3)
            alert("Circle WIN!");
        else if(rowSum === -3)
            alert("Cross WIN!");
    }

    for(var i = 0; i<3;i++){
        var colSum = 0;
        for(var j = 0; j<3;j++){
            colSum += board[j][i];
        }
        if(colSum === 3)
            alert("Circle WIN!");
        else if(colSum === -3)
            alert("Cross WIN!");
    }

    if(board[0][0] + board[1][1] + board[2][2] === 3)
        alert("Circle WIN!");
    else if(board[0][0] + board[1][1] + board[2][2] === -3)
        alert("Cross WIN!");

    if(board[2][0] + board[1][1] + board[0][2] === 3)
        alert("Circle WIN!");
    else if(board[2][0] + board[1][1] + board[0][2] === -3)
        alert("Cross WIN!");
}