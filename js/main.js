$(document).ready(function(){

	$('.search-btn').click(function(){
		var parameters = '/search/?';
		$('.navbar-inputs input').each(function(){
			if($(this).val().length > 0){
				parameters += '&' + $(this).attr('name') + '=' + $(this).val();
			}
		});

		window.location.href = parameters;
	});
})