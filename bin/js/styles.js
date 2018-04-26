// Resize icons for mac density ratio
$("img.icn").each(function(){
	$(this).css("width", parseInt($(this).width()) / 2);
});


// Drop down select control created div 
$(".chosen-select").chosen();
$(".chosen-container").css("width", "100%");
$(".chosen-search-input.default").css("width", "100%");


//round labels with number limit to one digit ... split after first letter & replace with +
$(document).ready(function() {
	$("label.round").each(function(){
		var val = parseInt($(this).text());
		if(val > 9){
			this.innerHTML = "9+";
		}
	});
});


// vertical panel positioning
$(".verticalPanel").each(function(){
	$(this).css("left", parseInt($(this).parent().width()) + 50);
});

// form control active status
$(".form-control").change(function() {
	if($(this).val() != ""){
		$(this).addClass("active");
	}
});

// rewrite lond table cell text except for the last child
$(document).ready(function() {
	$(".table tr td").not( ":last-child" ).each(function(){
		var val = $(this).text().length;
		if(val > 20){
			this.innerHTML =  $(this).text().substr(0, 20) + "...";
			$(this).css({
				'white-space' : 'nowrap',
				'overflow' : 'hidden',
				'text-overflow' : 'ellipsis',
				'width' : '200px',

			});
			var ind = $(this).index();
			$(".table tr").each(function(){
				$(this).find("td").eq(ind).css("width", "200px");
				$(this).find("th").eq(ind).css("width", "200px")
			});
		}
	});
});