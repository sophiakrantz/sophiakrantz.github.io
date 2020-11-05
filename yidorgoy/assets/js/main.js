$(function(){ 
	var oldtext;     
	$('#yid').hover(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Jew"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
}) 
$(function(){ 
	var oldtext;     
	$('#yid').text(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Yid"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
})
$(function(){ 
	var oldtext;     
	$('#goy').hover(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Gentile"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
}) 
$(function(){ 
	var oldtext;     
	$('#goy').text(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Goy"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
})