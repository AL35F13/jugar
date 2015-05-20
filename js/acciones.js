// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	{
		$('#uno').on('tap', function(){
			$('#numeros').append('1')
		});
		$('#dos').on('tap', function(){
			$('#numeros').append('2')
		});
		$('#tres').on('tap', function(){
			$('#numeros').append('3')
		});
		$('#cuatro').on('tap', function(){
			$('#numeros').append('4')
		});
	}
}); 
});

