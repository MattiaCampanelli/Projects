$(document).ready(function(){
	var string0 = "Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura che la diritta via era smarrita. ";
	for (var n = 0; n < string0.length; n++){
		$("body").append("<span id='a"+n+"'>" + (string0[n]==" "?"&nbsp;":string0[n]) + "</span>");	  	
		$("#a" + n + "").delay(n*50).queue( function(next){
														$(this).css({"top": "10px", "opacity" : "1"});
														next();
											});
	};
});



