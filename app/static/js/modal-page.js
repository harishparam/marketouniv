$( document ).ready(function() {
console.log("indenting");

$(".icon-image").hover(function() {
	console.log("hover");
	  $(this).toggleClass("hover"); 
	
});

   
});