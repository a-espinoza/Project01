	$("a").click(function(event) {
			event.preventDefault();
			Main.UpdateLetter($(this).attr("id"));
	});
