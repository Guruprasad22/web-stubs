/**
 * 
 */

$(document).ready(function() {
//	alert("inside");
	$(".guess_box").bind('click',function() {	
		
		$(this).append(randomFunc);	
		$(".guess_box").unbind('click');
	});
});

function randomFunc() {
	
	var message = "<p>you get a discount of " + Math.floor((Math.random() * 5 + 5)) + "/</p>";
	return message;
}


/*$(document).ready(function() {
	$(".guess_box").click( function() {
		$(".guess_box p").remove();
		var my_num = Math.floor((Math.random()*5) + 5);
		var discount = "<p>Your Discount is "+my_num+"%</p>";
		$(this).append(discount);
	});
});*/