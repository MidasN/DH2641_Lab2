var LeftDishListView = function(container, model){
	this.container = container;
	model.addObserver(this);
	
	this.numGuests = container.find("#numberOfGuests");
	this.dishTable = container.find("#dishTable");
	this.total = container.find("#totalCost");
	this.confirmBtn = container.find("#confirmBtn");
	
	
	var loadDishList = function(){
		dishTable.innerHTML("");
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
	 
	
	
	this.update = function(){
		loadDishList();
	}
	
	loadDishList();

};