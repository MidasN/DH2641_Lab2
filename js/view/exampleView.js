//ExampleView Object constructor
var ExampleView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 
 this.numberOfGuests.html(model.getNumberOfGuests());
 
}
 
 var LeftDishList = function (container, model){
	 
	 this.numGuests = container.find("#numberOfGuests");
	 this.dishTable = container.find("#dishTable");
	 this.total = container.find("#totalCost");
	 this.confirmBtn = container.find("#confirmBtn");
	
	 for(i = 0; i < model.getFullMenu().length ; i++){
		 var row = dishTable.insertRow(-1);
		 var cell1 = row.insertCell(0);
		 var cell2 = row.insertCell(1);
		 
		 cell1.innerHTML = model.getFullMenu()[i].name;
		 cell2.innerHTML = model.getDishCost(i);
	 }
	 
	 this.numGuests.html(model.getNumberOfGuests());
	 this.total.html(model.getTotalMenuPrice());
	 
 }
 
 var DishSelectionPanel = function(container, model){
	 this.keyWords = container.find("#keyWords");
	 this.keyWordBtn = container.find("#keyWordBtn");
	 this.typeDropDown = container.find("#typeDropDown");
 }
 
 var DishSpecs = function(container, model){
	 
 }
