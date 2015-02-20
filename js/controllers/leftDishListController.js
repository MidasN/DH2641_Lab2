var LeftDishListController = function(view, model){
	
	view.container.find("#confirmBtn").click( function(e) {
		var guests = view.container.find("#numberOfGuests").value;
		model.setNumberOfGuests(guests);
		
	});
	
};