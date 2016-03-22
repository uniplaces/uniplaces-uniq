(function(){
	var dropdownContext = $('.dropdown');
	var dropdownTrigger = dropdownContext.find('.dropdown__selected-value');
	var dropdownList = dropdownTrigger.next();

	dropdownContext.on('click', dropdownTrigger, function(e) {
		e.preventDefault();
		dropdownList.toggle()
		dropdownTrigger.toggleClass('is-active');
	});

	dropdownList.on('click', 'a', function() {
		var value = $(this).html();
		dropdownTrigger.text(value);
	});

})();
