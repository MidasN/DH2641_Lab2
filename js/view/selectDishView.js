var  selectDishView = function(container){
	
	this.numberOfGuests = container.find("#numGuests");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
}