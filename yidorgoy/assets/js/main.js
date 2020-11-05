//Home page
$(function(){ 
	var oldtext;     
	$('#yid').hover(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Jew"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
})
function myFunction() {
  var str = "Yid";
  var result = str.link("../../yid/index.html");
  document.getElementById("yid").innerHTML = result;
}
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

//Yid page
$(function(){ 
	var oldtext;     
	$('#shidduch').hover(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Matchmaking"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
}) 
$(function(){ 
	var oldtext;     
	$('#shidduch').text(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Shidduch"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
})
$(function(){ 
	var oldtext;     
	$('#schnitzel').hover(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Food"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
}) 
$(function(){ 
	var oldtext;     
	$('#schnitzel').text(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Schnitzel"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
})
$(function(){ 
	var oldtext;     
	$('#schneerson').hover(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Religion"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
}) 
$(function(){ 
	var oldtext;     
	$('#schneerson').text(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Schneerson"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
})
$(function(){ 
	var oldtext;     
	$('#shtick').hover(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Gimmick"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
}) 
$(function(){ 
	var oldtext;     
	$('#shtick').text(function(){ 
		oldtext = $(this).text(); 
		$(this).text("Shtick"); 
	}, function(){ 
		$(this).text(oldtext) 
	}); 
})