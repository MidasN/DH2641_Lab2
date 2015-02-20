var DinnerView = funtion(container, model){
	this.container = container;
	
	this.numGuests = container.find("#numGuests");
	this.numGuests.html(model.getNumberOfGuests());
};