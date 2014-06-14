$(document).ready(function(){

	$('.search-btn').click(function(){
		console.log("TEST")
		var parameters = '/search/?';
		$('.navbar-inputs input').each(function(){
			if($(this).val().length > 0){
				parameters += '&' + $(this).attr('name') + '=' + $(this).val();
				console.log(parameters)
			}
		});

		window.location.href = parameters;
	});
})