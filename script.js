$(document).ready(main());

var chance=0;
var j=0;

function main(){
	$(".square").click(function(){
		if($(this).find(".A").hasClass("picked") === false) {
			$(this).css("background-color",(chance%2)?"#dc685a":"#ecaf4f");
			$(this).find(".A").addClass("picked");
			chance++;
		}

	});

	$(".square").hover(function(){
		if($(this).find(".A").hasClass("picked") === false) {
				$(this).find(".A").addClass((chance%2)?"X":"O");
		}
	},function(){
		if($(this).find(".A").hasClass("picked") === false ){
			$(this).find(".A").removeClass((chance%2)?"X":"O");
		}
	});
		
}
