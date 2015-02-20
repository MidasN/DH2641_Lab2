var DinnerOverviewView = function(view, model){
	this.starterimg = container.find("#starterimg");
	this.starterName = container.find("#starterName");
	this.startercost = container.find("#startercost");
	this.mainimg = container.find("#mainimg");
	this.mainname = container.find("#mainname");
	this.maincost = container.find("#maincost");
	this.dessertimg = container.find("#dessertimg");
	this.dessertname = container.find("#dessertname");
	this.dessertcost = container.find("#dessertcost");
	this.totalCost = container.find("#totalCost");
	this.numGuests = container.find("#numGuests");
	 
	this.numGuests.html(model.getNumberOfGuests());
	
	this.starterName.html(model.getFullMenu()[0].name);
	this.startercost.html(model.getDishCost(0));
	this.mainname.html(model.getFullMenu()[1].name);
	this.maincost.html(model.getDishCost(1));
	this.dessertname.html(model.getFullMenu()[2].name);
	this.dessertcost.html(model.getDishCost(2));
	this.totalCost.html(model.getTotalMenuPrice());
};